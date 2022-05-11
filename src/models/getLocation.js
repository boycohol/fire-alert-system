import pool from "../configs/connectDB"

let getLocationDB = async () => {
    try {
        let [dataLocation, fields] = await pool.query("select Location from input_devices");
        return dataLocation
    } catch (e) {
        console.log(e)
    }
}

let showLocation = async (location) => {
    try {
        let [dataLocation, fields] = await pool.query("select * from input_devices where Location = ?", [location]);
        return dataLocation
    } catch (e) {
        console.log(e)
    }
}

let getAllLocation = async () => {
    try {
        let [data, fields] = await pool.query("select * from input_devices");
        return data;
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getLocationDB, showLocation, getAllLocation
}