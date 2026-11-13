const fs = require('fs');
const path = require('path');
const { createClient } = require('C:/Users/Administrator/Documents/Expo/ams-app/node_modules/@supabase/supabase-js');

// Read from .env.local if present
let supabaseUrl = process.env.SUPABASE_URL || 'https://iuoohxfzuzussnlhlnfz.supabase.co';
let serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const envPath = path.join(__dirname, '..', '.env.local');
if (!serviceRoleKey && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) {
      serviceRoleKey = trimmed.split('=')[1].replace(/^["']|["']$/g, '');
    }
  }
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

function parseCSV(content) {
  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;
  
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    const next = content[i + 1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      currentRow.push(currentVal);
      currentVal = '';
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      currentRow.push(currentVal);
      currentVal = '';
      if (currentRow.length > 1 || (currentRow.length === 1 && currentRow[0] !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentVal += c;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    if (currentRow.length > 1 || (currentRow.length === 1 && currentRow[0] !== '')) {
      rows.push(currentRow);
    }
  }
  return rows;
}

async function main() {
  const csvPath = 'C:/Users/Administrator/Downloads/students_rows.csv';
  console.log('Reading CSV from:', csvPath);
  const content = fs.readFileSync(csvPath, 'utf8');
  const rows = parseCSV(content);

  console.log(`Parsed total lines: ${rows.length}`);
  const header = rows[0];
  console.log('Headers:', header);

  const dataRows = rows.slice(1);
  console.log(`Student data records: ${dataRows.length}`);

  const students = dataRows.map(r => {
    const obj = {};
    header.forEach((col, idx) => {
      let val = r[idx];
      if (val === undefined || val === '') {
        val = null;
      }
      obj[col] = val;
    });

    // Type casting
    if (obj.has_full_access !== null) {
      obj.has_full_access = obj.has_full_access === 'true' || obj.has_full_access === true;
    } else {
      obj.has_full_access = false;
    }

    if (obj.topics_completed_count !== null) {
      obj.topics_completed_count = parseInt(obj.topics_completed_count, 10) || 0;
    }

    if (obj.avg_score_percentage !== null) {
      obj.avg_score_percentage = parseFloat(obj.avg_score_percentage) || 0;
    }

    if (obj.completed_topic_ids) {
      try {
        if (typeof obj.completed_topic_ids === 'string') {
          obj.completed_topic_ids = JSON.parse(obj.completed_topic_ids);
        }
      } catch (e) {
        obj.completed_topic_ids = [];
      }
    } else {
      obj.completed_topic_ids = [];
    }

    return obj;
  });

  console.log('Sample parsed student:', students[0]);

  // Upsert in batches of 100
  const batchSize = 100;
  let inserted = 0;
  for (let i = 0; i < students.length; i += batchSize) {
    const batch = students.slice(i, i + batchSize);
    const { error } = await supabase.from('students').upsert(batch, { onConflict: 'id' });
    if (error) {
      console.error(`Batch ${i} - ${i + batch.length} error:`, error);
      process.exit(1);
    }
    inserted += batch.length;
    console.log(`Upserted ${inserted} / ${students.length} students...`);
  }

  // Verification count
  const { count, error: countErr } = await supabase.from('students').select('*', { count: 'exact', head: true });
  if (countErr) {
    console.error('Count error:', countErr);
  } else {
    console.log(`\n========================================`);
    console.log(`VERIFIED TOTAL STUDENTS IN DATABASE: ${count}`);
    console.log(`========================================\n`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
