const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const seedUser = async () => {
  const user = new User({
    name: 'Admin',
    email: 'admin@example.com',
    password: '123456'
  });
  await user.save();
  console.log('User seeded');
  mongoose.connection.close();
};

seedUser();
