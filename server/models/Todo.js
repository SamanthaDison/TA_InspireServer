import mongoose from 'mongoose'
import { Schema } from 'mongoose'

export const TodoSchema = new Schema(
    {
        completed: { type: Boolean, required: true, default: false },
        user: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)