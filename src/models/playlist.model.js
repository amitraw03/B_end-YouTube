import mongoose,{Schema} from "mongoose";

const playlistSchema = new Schema({
    name:{
        type: String,
        requred:true
    },
    description:{
        type: String,
        requred:true
    },
    videos:{               // here videos becoz it is playlist schema
        type: Schema.Types.ObjectId,
        ref:"Video"
     },
     owner:{
         type: Schema.Types.ObjectId,
         ref:"User"
     },

},{ timestamps: true})

export const Playlist = mongoose.model("Playlist",playlistSchema)