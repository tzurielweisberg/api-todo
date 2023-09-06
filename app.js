const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const todoRoutes = require('./routes/todo');


const cors = require('cors');

// Use the 'cors' middleware
app.use(cors());



app.use(bodyParser.json());
app.use('/todos', todoRoutes);

mongoose.connect('mongodb://localhost/crud-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

