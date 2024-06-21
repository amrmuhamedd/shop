const DB_DATA_TYPES = {
  timestamp: 'timestamp',
  currentTime: 'CURRENT_TIMESTAMP',
  json: 'json',
  json4MigrationFiles: 'json',
  int4MigrationFiles: 'int',
};

if (process.env.NODE_ENV === 'test') {
  DB_DATA_TYPES['timestamp'] = 'datetime';
  DB_DATA_TYPES['currentTime'] = `strftime('%s','now')`;
  DB_DATA_TYPES['json'] = `simple-json`;
  DB_DATA_TYPES['json4MigrationFiles'] = `'simple-json'`;
  DB_DATA_TYPES['int4MigrationFiles'] = 'integer';
}

export default DB_DATA_TYPES;
