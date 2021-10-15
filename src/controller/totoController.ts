import { Request, Response } from 'express'
import { Todo } from '../models/Todo'
import { sequelize } from '../instance/postgres'
import { findSourceMap } from 'module'
export const All = async (req: Request, res: Response) => {
    const list = await Todo.findAll()
    res.json({ list })

}
export const Add = async (req: Request, res: Response) => {
    if (req.body.title) {
        let newTile = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false

        })
        res.json({ newTile })

    } else {
        res.status(404).json({ error: 'tarefa não encontrada' })
    }


}

export const Update = async (req: Request, res: Response) => {
    let id = req.params.id
    let update = await Todo.findByPk(id);

    if (update) {
        if (req.body.title) {
            update.title = req.body.title
        }
        if (req.body.done) {
            switch (req.body.done) {
                case 'true':
                case '1':
                    update.done = true;
                    break;
                case 'false':
                case '0':
                    update.done = false;
                    break;

            }

        }
        await update.save();
        res.json({ item: update })
    }
    else {
        res.status(404).json({ error: 'tarefa não encontrada' })
    }



}


export const Delete = async (req: Request, res: Response) => {


    let id = req.params.id
    let del = await Todo.findByPk(id)

    if (del) {
        await del.destroy()
    }



    res.json({});

}