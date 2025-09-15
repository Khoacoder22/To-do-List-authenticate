import {User, IUser} from "../models/User";

//get all users
const getAllUser = async () : Promise<IUser[]> => {
    return await User.find();
}

//Create User
const createUser = async (name: String, gender: String, dob: Date) : Promise<IUser> => {
    const createUser = new User({name, gender, dob});
    return await createUser.save();
}


//Delete User
const deleteUser = async (id: String): Promise<IUser | null> => {
    const exisitingUser = await User.findById(id);
    if(!exisitingUser){
        throw new Error("User not found");
    }
    return await User.findByIdAndDelete(id);
}

//Update User
const updateUser = async (id: String, data: Partial<IUser>): Promise<IUser | null> => {
    const userExisiting = await User.findById(id);
    if(!userExisiting){
        throw new Error("User not found");
    }
    return await User.findByIdAndUpdate(id, data, {new: true, runValidators: true});
}

export {getAllUser, createUser, deleteUser, updateUser};   