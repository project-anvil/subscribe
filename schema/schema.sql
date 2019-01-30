CREATE TABLE IF NOT EXISTS subscriber (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS subscriber_status (
  id TEXT PRIMARY KEY,
  subscriber TEXT REFERENCES subscriber,
  verified BOOLEAN DEFAULT FALSE,
  created INTEGER DEFAULT (strftime('%s', 'now'))
);
