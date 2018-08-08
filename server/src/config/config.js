module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
      // operatorsAliases: Op
      // operatorsAliases: false
    }
  }
}
