import { Router } from "express";
import * as todoController from '../controller/totoController'
import { sequelize } from '../instance/postgres'
import { Todo } from '../models/Todo';


const router = Router();

router.get("/todo", todoController.All);
router.post("/todo", todoController.Add);
router.put("/todo/:id", todoController.Update);
router.delete("/todo/:id", todoController.Delete);





export default router;