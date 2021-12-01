// cree un shema pour films ,,

const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
name: {type: String , required: true}
});



module.exports = mongoose.model('film',filmSchema);
// const filmShema = mongoose.Sc hema({
//     _id: mongoode,shema.types,ObjectId,
//     title: {type: String , reqired: true},
//     dateSortie : {type: Date, required : true , default: Date.now}
//     hero: {type: mongoose.shema.types.ObjectId , ref: "Member", required: true},
//     topicL {type: mongoose.shema.types.objectId , ref:"Topic", required: true},
// });
// commentShema.pre(['find, 'findOne] , function(next){
//     this.populate("creator");
//     this.poulate('topic');
//     next();
// })

// module.exports = mongoose.model('Comment' , filmsScheme)
