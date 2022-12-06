const authDB = {
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE as string,
  user: process.env.DB_USERNAME as string,
  pass: process.env.DB_PASSWORD as string,
};

export default authDB;
