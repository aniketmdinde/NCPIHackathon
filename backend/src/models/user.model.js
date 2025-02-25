import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: { 
            type: String, 
            required: true, 
            unique: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        name: { 
            type: String, 
            required: true 
        },
    }, 
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);