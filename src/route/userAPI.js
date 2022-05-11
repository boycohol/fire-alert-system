import userDirect from "../controller/userDirect"
import express from "express";

let router = express.Router();

const initUserRoute = (app) => {
    router.post('/create-user', userDirect.createUser)
    router.post('/confirm-user', userDirect.confirmUser)
    router.post('/update-auth', userDirect.authUpdate)
    router.post('/update-devices', userDirect.updateDevices)
    router.post('/history-devices', userDirect.historyDevices)
    return app.use("/user", router)
}

export default initUserRoute;