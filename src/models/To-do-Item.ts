import mongoose, {Schema} from "mongoose";
import { TodoitemStatus } from "../enum/enum";

export interface ITodoItem extends Document {
    to_do_group_id: mongoose.Types.ObjectId;
    name: string;
    des: string;
    due_at: Date;
    status: TodoitemStatus;
    createAt: Date;
}

const TodoItemSchema = new Schema<ITodoItem>(
    {
    to_do_group_id: {type: Schema.Types.ObjectId, ref: 'TodoList', required: true},
    name: {type: String, required: true},
    des: {type: String},
    due_at: {type: Date},
    status: {type: String, enum: Object.values(TodoitemStatus), default: TodoitemStatus.Todo}
    },
    {timestamps: true}
);

export const TodoItem = mongoose.model<ITodoItem>('TodoItem', TodoItemSchema);