import { Schema, model, Document, modelNames } from "mongoose";

import * as bcrypt from "bcryptjs";

interface IUser extends Document {
    username: string,
    name: string,
    email: string,
    password: string
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre<IUser>('save', async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
});

export default model<IUser>("User", userSchema);