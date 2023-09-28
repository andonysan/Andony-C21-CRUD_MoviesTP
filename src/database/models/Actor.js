module.exports = (sequelize,dataTypes) =>{
    const alias = 'Actor';
    const cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_Name:{
            type:dataTypes.STRING,
        },
        last_Name:{
            type:dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
        }
    }
    const config = {
        tableName: "actors",
        timestamps: false, // si no tiene marca de tiempo debe de ir en false
        underscored: true
    }
    const Actor = sequelize.define(alias,cols,config)
    return Actor;
}