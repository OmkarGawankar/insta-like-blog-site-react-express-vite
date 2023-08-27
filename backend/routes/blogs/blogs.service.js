const service = module.exports
const userService = require('../users/users.service')
const Blog = require('./blogs.model')


service.all = async (query, params, body) => {
    try {
        // Get all blogs using Blog model with pagination
        const blogs = await Blog.find()
            .sort({ createdAt: -1 })
            .skip((query.page - 1) * query.limit)
            .limit(query.limit);

        // Return blogs
        return blogs;
    } catch (error) {
        console.log(error)
        throw new Error("Cannot get Blogs", error.message)
    }
}

service.create = async (query, params, body) => {
    try {

        const { userId } = query
        const { title, caption, image } = body;

        // Fetch User using User model
        const user = await userService.read({ userId }, {}, {});

        // If user not found, throw error
        if (!user) {
            throw new Error("User not found");
        }

        const newBlog = {
            title,
            caption,
            image,
            user: {
                userId: user.userId,
                name: user.name,
                email: user.email,
            }
        }

        // Create blog using Blog model
        const blog = await Blog.create(newBlog);

        // Return blog
        return blog;
    } catch (error) {
        console.log(error)
        throw new Error("Cannot create Blog", error.message)
    }
}

service.read = async (query, params, body) => {
    try {
        // Get blog using Blog model
        const blog = await Blog.findOne({ blogId: query.blogId })
            .populate('user', 'name email');

        // Return blog
        return blog;
    } catch (error) {
        console.log(error)
        throw new Error("Cannot get Blog", error.message)
    }
}

service.update = async (query, params, body) => {
    try {
        // Update blog using Blog model
        const blog = await Blog.findOneAndUpdate({ blogId: query.blogId }, body, { new: true });

        // Return blog
        return blog;
    } catch (error) {
        console.log(error)
        throw new Error("Cannot update Blog", error.message)
    }
}

service.delete = async (query, params, body) => {
    try {
        const blog = await Blog.findOneAndDelete({ blogId: query.blogId });

        // Return blog
        return blog;

    } catch (error) {
        console.log(error)
        throw new Error("Cannot delete Blog", error.message)
    }
}