const controller = module.exports;
const service = require('./blogs.service');

controller.all = async (req, res, next) => {
    try {
        // Get all blogs using service
        const blogs = await service.all(req.query, req.params, req.body);

        // Return blogs
        return res.status(200).json({
            data: blogs
        });
    } catch (error) {
        console.log(error)
        return next(error);
    }
}

controller.create = async (req, res, next) => {
    try {
        // Create blog using service
        const blog = await service.create(req.query, req.params, req.body);

        // Return blog
        return res.status(200).json({
            data: blog
        });
    } catch (error) {
        console.log(error)
        return next(error);
    }
}

controller.read = async (req, res, next) => {
    try {
        // Get blog using service
        const blog = await service.read(req.query, req.params, req.body);

        // Return blog
        return res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        return next(error);
    }
}

controller.update = async (req, res, next) => {
    try {
        // Update blog using service
        const blog = await service.update(req.query, req.params, req.body);

        // Return blog
        return res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        return next(error);
    }
}

controller.delete = async (req, res, next) => {
    try {
        // Delete blog using service
        const blog = await service.delete(req.query, req.params, req.body);

        // Return blog
        return res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        return next(error);
    }
}