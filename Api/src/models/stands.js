const { DataTypes}=require('sequelize');

module.exports = (sequelize)=>{
  sequelize.define('Stands',{
    id:{
      type:DataTypes.UUID,
      primaryKEy:true,
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    }
  })
}