const controller = module.exports;
const service = require('./auth.service');

controller.register = async (req, res, next) => {
    try {
        const user = await service.register(req.query, req.params, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

controller.login = async (req, res, next) => {
    try {
        const user = await service.login(req.query, req.params, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
