import Express from "express";
import{ createPlayer, findOneById, findOneByEmail, updatePlayer, changePlayerPortrait, deletePlayer} from "../controllers/playerControler.js"

 const router = Express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findOneById/:playerID", findOneById)
router.get("/findOneByEmail/:email", findOneByEmail)
router.put("/update/:playerID", updatePlayer)
router.patch("/changePortrait/:playerID", changePlayerPortrait)
router.delete("/deletePlayer/:playerId", deletePlayer)

 export default router