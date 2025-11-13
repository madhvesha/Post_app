const mongoose = require('mongoose');

exports.dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected");
    
  } catch (err) {
    console.error('error:', err);  
  }
};
