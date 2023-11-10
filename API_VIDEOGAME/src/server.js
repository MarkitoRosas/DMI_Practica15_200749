import Express from "express";
import playerRoutes from "./routes/playerroutes.js"

const api = new Express();

const port = 20074;

api.use("/players", playerRoutes)

api.listen(port, ()=>{
    console.log(`el API ha sido iniciada y se encuentra en el puerto: ${port}`)
})