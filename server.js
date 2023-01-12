const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set('strictQuery', true);

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect("mongodb+srv://levi:ErOlxKKqDrKZSUrs@cluster0.i5n8rio.mongodb.net/test")
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
