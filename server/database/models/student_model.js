import { Schema ,model} from "mongoose";


const student = new Schema({
  first_name:{ 
    type: String,
    required:true
},
last_name:{
    type:String,
    required
},
user_code:{
    type:String,
    required
},
courses_id:{ 
    type: [String],
    required:false
}
});


export default model("student",student);
