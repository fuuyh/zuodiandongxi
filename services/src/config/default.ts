export default {
  database: {
    url: 'postgresql://user:password@localhost:5432/mydb'
  },
  jwt: {
    secret: 'your-secret-key',
    expiresIn: '1h'
  }
};