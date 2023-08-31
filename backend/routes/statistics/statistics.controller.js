const controller = module.exports;
const service = require("./statistics.service");

controller.all = async (req, res, next) => {
    try {
        const { query, params, body } = req;
        const stratistics = await service.all(query, params, body);
        res.status(200).json({
            data: stratistics
        });
    } catch (error) {
        next(error);
    }
};