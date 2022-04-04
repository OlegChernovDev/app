const express = require('express');

const app = express();
app.use(express.json());


app.get('/getCourses', async (req, res) => {
  res.json('123')
});

module.exports = app
