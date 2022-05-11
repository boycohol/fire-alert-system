import pool from "../configs/connectDB"

let getHistoryDevices = async () => {
    try {
        let [dataHistoryDevices, fields] = await pool.query("select * from output_devices");
        return dataHistoryDevices;
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getHistoryDevices
}