const { Pool } = require('pg');

const pool = new Pool({
  user: 'coryanderson',
  host: 'localhost',
  database: 'prime_feedback',
  password: '' ,
  port: 5432, 
});


CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

const queryText = 'INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)';
await client.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]);


