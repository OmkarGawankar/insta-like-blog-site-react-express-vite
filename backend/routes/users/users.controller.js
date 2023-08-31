const controller = module.exports;
const service = require("./users.service");

controller.all = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const users = await service.all(query, params, body);
    res.status(200).json({
      data: users
    });
  } catch (error) {
    next(error);
  }
}

controller.create = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const user = await service.create(query, params, body);
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error);
  }
}

controller.read = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const user = await service.read(query, params, body);
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error);
  }
}

controller.update = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const user = await service.update(query, params, body);
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error);
  }
}

controller.delete = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const user = await service.delete(query, params, body);
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error);
  }
}

controller.like = async (req, res, next) => {
  try {
    const { query, params, body } = req;
    const user = await service.like(query, params, body);
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error);
  }
}