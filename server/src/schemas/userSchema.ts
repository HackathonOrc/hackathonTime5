import { Schema, model, Document, modelNames } from "mongoose";

import * as bcrypt from "bcryptjs";

const validator = require("mongoose-validator");

interface IUser extends Document {
    username: string,
    name: string,
    email: string,
    password: string
}

// O q vai ter no banco dos usuários

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 20
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Por favor coloque um email válido'
            })
        ],
    },
    password: {
        type: String,
        required: true
    }
});
// Cripitografar as senhas

userSchema.pre<IUser>('save', async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
});

export default model<IUser>("User", userSchema);