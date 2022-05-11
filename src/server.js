import express from "express";
import configViewEngine from "./configs/viewEngine";
import initUserRoute from "./route/userAPI";
import initWebRoute from "./route/webDirect";
import session from "express-session";
import cookieParser from "cookie-parser";

require('dotenv').config()

const app = express()
const port = process.env.PORT;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
    key: "userId",
    secret: "fire alert system",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 1000,
    },
}))

configViewEngine(app);
initWebRoute(app);
initUserRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})