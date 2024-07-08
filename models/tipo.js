import {Sequelize,Model, DataTypes} from 'sequelize'
const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{host:process.env.DB_HOTS,dialect:'mysql',port:process.env.DB_PORT});

export class Tipo extends Model{
  static associate(model){
    
  }
};

Tipo.init({
  id_tipo:{
    type: DataTypes.INTEGER,
    autoIncrement:false,
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
