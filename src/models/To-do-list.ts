import mongoose, {Schema, Types} from "mongoose";
import {Gender, TodolistStatus} from "../enum/enum";

export interface ITodoList extends Document {
    name: string;
    user_id: Types.ObjectId;
    status: TodolistStatus;
    createAt: Date;
    updateAt: Date;
}

const TodolistSchema = new Schema<ITodoList>({
    name: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref:"User", required: true},
    status: {type: String, enum: Object.values(TodolistStatus), default: TodolistStatus.Unfinished}
},{
    timestamps: true
});

export const TodoList = mongoose.model<ITodoList>('TodoList', TodolistSchema);