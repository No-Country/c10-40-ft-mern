const Cuerpo = require("../models/cuerpo");
const Rutina = require("../models/rutina");

const findAllCuerpo = async () => {
    const data = await Cuerpo.findAll({
        include: {
            model: Rutina,
            attributes: { 
                exclude: ['id','createdAt', 'updatedAt','cuerpo_id' ,'cuerpoId']
            }
        },
        attributes: {
            exclude: ["id","createdAt", "updatedAt"],
        }
    });
    return data;
};
const findCuerpoById = async (id) => {
    const data = await Cuerpo.findOne({
        where: {
            id,
        },
        attributes: {
            exclude: ["password", "createdAt", "updatedAt"],
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

module.exports = {
    findAllCuerpo,
    createNewCuerpo,
    updateCuerpo,
    deleteCuerpo,
    findCuerpoById
};
