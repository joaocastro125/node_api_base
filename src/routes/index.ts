import {  Router } from "express";
import * as phrasesController from '../controller/phrasesController';


const router=Router();

router.get("/ping",phrasesController.Home);
router.get("/randow",phrasesController.Randow);
router.get("/name/:name",phrasesController.Name);  

// router.post("/user",phrasesController.User);

router.post('/frases',phrasesController.createPhrases);
router.get('/frases',phrasesController.allPhrases);
router.get('/frases/aleatorio',phrasesController.aleatorioPhrases);
router.get('/frases/:id',phrasesController.onePhrases);
router.put('/frases/:id',phrasesController.updatePhrases);
router.delete('/frases/:id',phrasesController.deletePhrases);



   
export default router;