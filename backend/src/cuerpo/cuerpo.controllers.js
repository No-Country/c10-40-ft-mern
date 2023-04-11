const Cuerpo = require("../models/cuerpo");
const Rutina = require("../models/rutina");

const findAllCuerpo = async () => {
    const data = await Cuerpo.findAll({
        include: {
            model: Rutina,
            attributes: { 
                exclude: ['id','createdAt', 'updatedAt' ,'cuerpoId']
            }
        },
        attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
        }
    });
    return data;
};
const findCuerpoById = async (id) => {
    const data = await Cuerpo.findOne({
        where: {
            id: id
        },
        include: {
            model: Rutina,
            attributes: { 
                exclude: ['id','createdAt', 'updatedAt','cuerpoId']
            }
        },
        attributes: {
            exclude: [ "createdAt", "updatedAt"],
        },
    });
    return data;
};

const createNewCuerpo = async (name) => {
    const data = await Cuerpo.create({name});
    return data;
};

const updateCuerpo = async (id, name) => {
    const data = await Cuerpo.update({name}, {
        where: {
            id,
        },
    });
    return data[0];
};

const deleteCuerpo = async (id) => {
    const data = await Cuerpo.destroy({
        where: {
            id,
        },
    });
    return data;
};

//*para los de front
const findCuerpoByname = async (id) => {
    const data = [1]
    data[0] = await Cuerpo.findOne({
        where: {id:"2"},
        include: {
            model: Rutina,
            attributes: { exclude: ['id','createdAt', 'updatedAt' ,'cuerpoId']}},
        attributes: {exclude: [ "createdAt", "updatedAt"],},
    });
    data[1] = await Cuerpo.findOne({
        where: {id:"3"},
        include: {
            model: Rutina,
            attributes: { exclude: ['id','createdAt', 'updatedAt' ,'cuerpoId']}},
        attributes: {exclude: [ "createdAt", "updatedAt"],},
    });

    return data;
};

module.exports = {
    findAllCuerpo,
    createNewCuerpo,
    updateCuerpo,
    deleteCuerpo,
    findCuerpoById,
    findCuerpoByname
};
