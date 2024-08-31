const mongoose=require('mongoose');
const {Schema}=mongoose;
const CommentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    comment:{
        type:String,
    },
    accept:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('comments',CommentSchema);