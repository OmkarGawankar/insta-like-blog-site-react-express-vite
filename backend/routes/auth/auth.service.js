const service = module.exports;
const userService = require('../users/users.service');

service.register = async (query, params, body) => {
    try {

        // you need name, email and password to register
        // This will create new user
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
        throw new Error("Invalid Credentials!");
    }
}
