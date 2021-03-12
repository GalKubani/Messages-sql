const {DataTypes}= require('sequelize')

const sequelize= require('../db/sequelize')

const Message = sequelize.define('message',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    message:{
        type:DataTypes.STRING
    }
})

module.exports=Message