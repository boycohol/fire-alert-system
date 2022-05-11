import express from "express";
import pageDirect from "../controller/pageDirect"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', pageDirect.getHomepage);
    router.get('/login', pageDirect.getLoginPage);
    router.get('/datalist', pageDirect.getDataListPage);
    router.get('/statistic', pageDirect.getDataAdafruit);
    router.get('/signup', pageDirect.getSignupPage);
    router.get('/datalist', pageDirect.getDataListPage);
    router.get('/dangerlist', pageDirect.getDangerListPage);
    router.get('/devicemanager', pageDirect.getDeviceManagerPage);
    router.get('/history', pageDirect.getHistoryPage);
    router.get('/logout', pageDirect.logout);
    router.get('/location', pageDirect.getLocationPage);
    return app.use("/", router)
}

export default initWebRoute;