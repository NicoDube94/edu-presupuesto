import { Sequelize } from "sequelize";
const sequelize=new Sequelize('presupuesto_edu','root','',{host:"localhost",dialect:'mysql',port:'3306'});

//relaciones de modelos 
import { Tipo } from "./tipo.js";
import { Trabajo } from "./trabajo.js";
Tipo.hasMany(Trabajo,{foreignKey:'id_tipo'});
Trabajo.belongsTo(Tipo,{foreignKey:'id_tipo'});

// prueba de conexión a la base de datos 
async function test(){
    try {
        await sequelize.sync();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos :', error);
    }
};

export default test