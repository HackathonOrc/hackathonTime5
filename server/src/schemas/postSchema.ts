import { Schema, model, Document, modelNames } from "mongoose";

interface IPost extends Document{
    id: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId,
    content: string
}
// lembrar de colocar as paradas de foto posteriormente

const postSchema = new Schema <IPost>({
    id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        require: true,
        ref: "User"
    },
    content:{
        type: String,
        requiere: true,
        maxLength: 200
    }
});

export default model<IPost>("Post", postSchema);