import {Sequelize,DataTypes,Model} from 'sequelize'
import { Tipo } from './tipo.js';
const sequelize=new Sequelize('presupuesto_edu','root','',{host:"localhost",dialect:'mysql',port:'3306'});

export class Trabajo extends Model{};

Trabajo.init({
  id_trabajo:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull:false
  },
  unidad:{
    type: DataTypes.STRING,
    allowNull:false
  },
  precio_min:{
    type: DataTypes.FLOAT,
    allowNull:false
  },
  precio_max:{
    type: DataTypes.FLOAT,
    allowNull:false
  }
},{
  sequelize,
  modelName:'trabajo',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})