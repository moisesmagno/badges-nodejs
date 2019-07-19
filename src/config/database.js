module.exports = {
  dialect: 'postgres',
  host: '.localhost',
  username: 'postgres',
  password: 'adminusr',
  database: 'badges',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
