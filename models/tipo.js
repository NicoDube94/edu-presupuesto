import {Sequelize,Model, DataTypes} from 'sequelize'
import { Trabajo } from './trabajo.js';
const sequelize=new Sequelize('presupuesto_edu','root','',{host:"localhost",dialect:'mysql',port:'3306'});

export class Tipo extends Model{
  static associate(model){
    
  }
};

Tipo.init({
  id_tipo:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull:false
  }
},{
  sequelize,
  modelName:'tipo',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
