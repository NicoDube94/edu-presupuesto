import {Sequelize,DataTypes,Model} from 'sequelize'
const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{host:process.env.DB_HOTS,dialect:'mysql',port:process.env.DB_PORT});

export class Trabajo extends Model{};
// let id_auto=1
Trabajo.init({
  id_trabajo:{
    type: DataTypes.INTEGER,
    // defaultValue:++id_auto,
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