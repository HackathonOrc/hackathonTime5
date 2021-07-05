import { Schema, model, Document, modelNames } from "mongoose";

interface ILike extends Document {
    user: String,
    postid: Schema.Types.ObjectId,
}

const likeSchema = new Schema<ILike>({
    user: {
        type: String,
        required: true,
        ref: "User"
    },
    postid: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export default model<ILike>("Like", likeSchema);