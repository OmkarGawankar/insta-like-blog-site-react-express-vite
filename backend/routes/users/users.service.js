const service = module.exports;
const { User } = require("./users.model");
const bcrypt = require('bcrypt');

service.all = async (query, params, body) => {
    try {
        const users = await User.find();
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
        const user = await User.create({
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
        const user = await User.findOne({ userId: query.userId });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.readByEmail = async (query, params, body) => {
    try {
        const user = await User.findOne({ email: query.email });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

service.update = async (query, params, body) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
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
        const user = await User.findOneAndDelete({ userId: query.userId });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
