import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../instance/postgres';


export interface UserTodo extends Model {
   id: number,
   title: string,
   done: boolean
}

export const Todo = sequelize.define<UserTodo>('todosimples', {
   id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
   },
   title: {
      type: DataTypes.STRING
   },
   done: {
      type: DataTypes.BOOLEAN
   },
}, {
   tableName: 'todosimples',
   timestamps: false
});





