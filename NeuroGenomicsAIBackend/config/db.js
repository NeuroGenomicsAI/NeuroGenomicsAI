const { Pool } = require('pg');\nconst pool = new Pool({ user: 'user', host: 'localhost', database: 'db', password: 'password', port: 5432 });\nmodule.exports = pool;
