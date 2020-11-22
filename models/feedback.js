'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let tbFeedback = sequelize.define('tbFeedback',{
		idFeedback: {
			field: 'idFeedback',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		assunto: {
			field: 'assunto',
			type: DataTypes.STRING,
			allowNull: false
        },
        feedback: {
            field: 'feedback',
            type: DataTypes.STRING,
            allowNull: false
        }
	}, 
	{
		tableName: 'tbFeedback', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return tbFeedback;
};
