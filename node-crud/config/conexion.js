const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/crud', { useMongoClient: true }); //mongodb://localhost:27017/crud
mongoose.connect('mongodb://localhost/crud', {useNewUrlParser: true});

module.exports = mongoose;