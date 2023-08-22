const service = module.exports;
const userModel = require("./users.model");
const bcrypt = require('bcrypt');

service.all = async (query, params, body) => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

service.create = async (query, params, body) => {
    try {

        const { name, email, password } = body;

        // Create a hash of the password
        const passwordHash = await bcrypt.hash(password, 10);
        
        // Create the user with the hashed password
        const user = await userModel.create({
            name,
            email,
            password: passwordHash,
        });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.read = async (query, params, body) => {
    try {
        const user = await userModel.findOne({ userId: query.userId });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.readByEmail = async (query, params, body) => {
    try {
        const user = await userModel.findOne({ email: query.email });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.update = async (query, params, body) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { userId: body.userId }, // Use the query object to identify the user to update
            body, // The update is defined by the body object
            { new: true, runValidators: true } // Options for findOneAndUpdate
        );

        if (!updatedUser) {
            throw new Error('User not found'); // Handle the case where no user was found to update
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.delete = async (query, params, body) => {
    try {
        const user = await userModel.findOneAndDelete({ userId: query.userId });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
