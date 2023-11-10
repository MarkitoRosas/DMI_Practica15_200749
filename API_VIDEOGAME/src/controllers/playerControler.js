

const createPlayer = (rq, rs)=> {
    console.log("se ha solicitado la creación de un nuevo jugador");
    rs.status(200);
    rs.send("se ha solicitado la creación de un nuevo jugador")
   
    
}
const findOneById = (rq, rs)=>
{
    const playerID = rq.params.playerID
    console.log(`se ha solicitado buscar al jugador con id: ${playerID}`);
    rs.status(200);
    rs.send(`se ha solicitado buscar al jugador con id: ${playerID}`)
}
const findOneByEmail = (rq, rs )=>
{
    const playerEmail = rq.params.playerEmail
    console.log(`se ha solicitado buscar al jugador con correo: ${playerEmail}`);
    rs.status(200);
    rs.send(`se ha solicitado buscar al jugador con correo: ${playerEmail}`)
}
const updatePlayer = (rq, rs )=>
{
    const playerID = rq.params.playerID
    console.log(`se ha solicitado una actualizacion al jugador con id: ${playerID}`);
    rs.status(200);
    rs.send(`se ha solicitado una actualizacion al jugador con id: ${playerID}`)
}
const changePlayerPortrait = (rq, rs )=>
{
    const playerID = rq.params.playerID
    console.log(`se ha solicitado el cambio de la imagen al jugador con id: ${playerID}`);
    rs.status(200);
    rs.send(`se ha solicitado el cambio de la imagen al jugador con id: ${playerID}`)
}
const deletePlayer = (rq, rs )=>
{
    const playerID = rq.params.playerID
    console.log(`se ha solicitado la eliminacion de la cuenta del jugador con id: ${playerID}`);
    rs.status(200);
    rs.send(`se ha solicitado la eliminacion de la cuenta del jugador con id: ${playerID}`)
}


export {createPlayer, findOneById, findOneByEmail, updatePlayer, changePlayerPortrait, deletePlayer}