import express from "express";
import pageDirect from "../controller/pageDirect"

let router = express.Router();

const initAdminRoute = (app) => {

    return app.use("/admin", router)
}

export default initAdminRoute;