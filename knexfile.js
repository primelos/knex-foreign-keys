// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './farms.db3'
    },
    useNullAsDefault : true,
    pool:{
      afterCreate: (con, done) => {
        con.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};
