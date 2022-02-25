const mongoose= require('mongoose'); 
const Schema = mongoose.Schema; 

const cocktailSchema = new Schema({  
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    }
});

const Cocktails = mongoose.model('Skill', cocktailSchema);
module.exports = Cocktails;