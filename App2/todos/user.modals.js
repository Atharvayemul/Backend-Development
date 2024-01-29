import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        Unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        Unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })


export const User = mongoose.model("User", UserSchema)