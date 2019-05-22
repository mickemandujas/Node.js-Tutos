const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/crud', { useMongoClient: true }); //mongodb://localhost:27017/crud
mongoose.connect('mongodb+srv://mickemandujas:123@clusterfornodejs-2fzle.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

module.exports = mongoose;