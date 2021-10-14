import {Request,Response} from 'express';
import {Sequelize} from 'sequelize'
import { sequelize } from '../instance/postgres';
import {Phrases} from '../models/Phrases'


export const Home=(req:Request,res:Response)=>{
    res.json({
        ping:"pong"
    });

};


export const Randow=(req:Request,res:Response)=>{
    const ran:number=Math.floor(Math.random()*10);
    console.log(ran)
    res.json({number:ran}); 

};
export const Name=(req:Request,res:Response)=>{
    const name:string=req.params.name;
    console.log(name)
    res.json({name}); 

};
export const User=(req:Request,res:Response)=>{
    const name:string=req.body.name;
    console.log(name)
    res.json(name); 

};

export const createPhrases=async (req:Request,res:Response)=>{
    let {author,txt}=req.body;
    let newPhrases=await Phrases.create({author,txt}); 
   
     res.status(201);
     res.json({id:newPhrases.id,author,txt});
}
export const allPhrases=async(req:Request,res:Response)=>{
   const list= await Phrases.findAll()

   res.json({list})
}
 export const onePhrases=async(req:Request,res:Response)=>{
     const {id}=req.params;

     const phrase=await Phrases.findByPk(id);
     if(phrase){
        res.json({phrase});
     }else{
         res.status(404).json({error:'frase não encontrada'});
     }

     
 }

 export const updatePhrases=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {author,txt}=req.body

    const phrase=await Phrases.findByPk(id);
    if(phrase){
        phrase.author=author; 
        phrase.txt=txt;

        await phrase.save();
        

       res.json({phrase});
    }else{
        res.status(404).json({error:'frase não encontrada'});
    }

    
}

export const deletePhrases=async(req:Request,res:Response)=>{
    const {id}=req.params; 
    await Phrases.destroy({where:{id}})
 
    res.json({})
 }

 export const aleatorioPhrases=async(req:Request,res:Response)=>{
     let phrases=await Phrases.findOne({
         order:[
             Sequelize.fn('RAnDOM')
         ]
     })
     if(phrases){
         res.json(phrases)
     }else{
        res.status(404).json({error:'Não há frases cadastradas'});
     }
     
   
 
    res.json({})
 }