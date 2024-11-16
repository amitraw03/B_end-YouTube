import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
     videoFile:{
        type:String, //cloudnary URL
        required:true,
    },
    thumbnail:{
        type:String, //cloudnary URL
        required:true,
    },
    title:{
        type:String, 
        required:true,
    },
    description:{
        type:String, 
        required:true,
    },
    duration:{
        type:Number, //cloudnary URL
        required:true,
    },
    views:{
         type: Number,
         default:0
    },
    isPublished:{
        type:Boolean, 
        default:true,
    },
    owner :{
        type: Schema.Types.ObjectId,
        ref:"User",
    }

},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)    //we need to aggregate queries config for writihng aggregation pipelines


export const Video = mongoose.model("Video",videoSchema)