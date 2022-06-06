import { cadastrarAnime,colsuntaAnime } from "../repository/anime.js";
import { Router } from "express";


const server= Router();

server.post('/anime',async (req,resp)=>{
    try{
        const nome =req.body;
        const x = await cadastrarAnime(nome);
        resp.send({
            resposta: x
        })
    }
    catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
} )

server.get('/consulta', async (req,resp) =>{
    try {
        const x = await colsuntaAnime();
        resp.send(x) 
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        }) 
    }
})

export default server;