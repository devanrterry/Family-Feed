const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devanrterry:DRTswim10@cluster0-owofh.azure.mongodb.net/family?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});