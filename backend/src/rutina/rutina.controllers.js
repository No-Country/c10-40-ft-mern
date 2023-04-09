const Rutina = require("../models/rutina");
const uuid = require('uuid')

const findAllRutina = async () => {
    const data = await Rutina.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        }
    });
    return data;
};
const findRutinaById = async (id) => {
    const data = await Rutina.findOne({
        where: {
            id,
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
    });
    return data;
};
const createNewRutina = async (userObj, id) => {
    const data = await Rutina.create({
        id: uuid.v4(),
        series: userObj.series,
        repetitions: userObj.repetitions,
        description: userObj.description,
        cuerpo_id: id //tienes que espesifeicar el id de la parte del cuerpo 
    })
    return data;
};

const updateRutina = async (id, userObj) => {
    const data = await Rutina.update(userObj, {
        where: {
            id,
        },
    });
    return data[0];
};

const deleteRutina = async (id) => {
    const data = await Rutina.destroy({
        where: {
            id,
        },
    });
    return data;
};

module.exports = {
    findAllRutina,
    createNewRutina,
    updateRutina,
    deleteRutina,
    findRutinaById
};