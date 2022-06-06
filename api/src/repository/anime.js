    import { con } from './connection.js'


export async function cadastrarAnime(anime){
    const comando =`insert into tb_anime(nm_anime)
	values(?)`;

    const [resposta] = await con.query(comando,[anime.nome]);

    return resposta.affectedRows;
}

export async function colsuntaAnime(anime){
    const comando =`    select id_anime,
    nm_anime nome
    from tb_anime`;

    const [resposta] = await con.query(comando);

    return resposta;
}