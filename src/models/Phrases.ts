import {Model,DataTypes}from 'sequelize';

import {sequelize} from '../instance/postgres';

export interface UserPhrases extends Model{
    id:number,
    author:string,
    txt:string
}

export const Phrases=sequelize.define<UserPhrases>('phrases',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER

    },
    author:{
        type:DataTypes.STRING
    },
    txt:{
        type:DataTypes.STRING
    }
    
},{
    tableName:'phrases',
    timestamps:false
})


