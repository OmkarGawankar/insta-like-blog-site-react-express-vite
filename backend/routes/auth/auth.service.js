const service = module.exports;
const userService = require('../users/users.service');

service.register = async (query, params, body) => {
    try {
        const { email, password } = body;

        // Verify that the user does not already exist
        const user = await userService.create({}, {}, body);

        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Register User: " + error.message);
    }
}

service.login = async (query, params, body) => {
    try {

        const { email, password } = body;

        const user = await userService.readByEmail({ email }, {}, {});

        // Verify that the user exists
        if (!user) throw new Error("User not found");

        // Verify that the password is correct
        const isMatch = await user.comparePassword(password);

        if (!isMatch) throw new Error("Invalid password");

        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Login Failed: ", error.message);
    }
}
