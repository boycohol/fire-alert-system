import api from "./HandleAPI";
import pool from "../configs/connectDB";

const IO_userName = "toilabin"
const IO_userKey = "aio_ouek49CwRvxSgRfeml8BCR4XkEjG"


const BBC_BUZZER = "bbc-buzzer"
const BBC_FAN = "bbc-fan"
const BBC_GAS = "bbc-gas"
const BBC_HUMI = "bbc-humi"
const BBC_LED = "bbc-led"
const BBC_PUMP = "bbc-pump"
const BBC_TEMP = "bbc-temp"

let getInputdevices = async (arrayDate) => {
    /* let fromDate = arrayDate.pop()
    let toDate = new Date();
    console.log("fromDate: ", fromDate)
    console.log("todate: ", toDate)
    let inputGAS = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_GAS, fromDate, toDate);
    let inputHUMI = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_HUMI, fromDate, toDate);
    let inputTEMP = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_TEMP, fromDate, toDate);
    arrayDate.push(toDate);
    await inputGAS.forEach(async (inputgas) => {
        try {
            let [locationGAS, fields] = await pool.query("select Location from input_devices where Name = 'gas'")
            await locationGAS.forEach(async (locationgas) => {
                try {
                    await pool.query('INSERT INTO input_devices_history(ID,Name, Average_value,Location,Time) VALUES (?,?,?,?,?)', [inputgas.id, inputgas.feed_key, inputgas.value, locationgas.Location, inputgas.created_at], (error, result) => {
                        if (error) {
                            throw error
                        }
                    });
                } catch (e) {
                    console.log(e)
                }
            })
        } catch (e) {
            console.log(e)
        }
    });
    await inputHUMI.forEach(async (element) => {
        try {
            let [locationHUMI, fields] = await pool.query("select Location from input_devices where Name = 'humi'")
            await locationHUMI.forEach(async (locationhumi) => {
                await pool.query('INSERT INTO input_devices_history(ID,Name, Average_value,Location,Time) VALUES (?,?,?,?,?)', [element.id, element.feed_key, element.value, locationhumi.Location, element.created_at], (error, result) => {
                    if (error) {
                        throw error
                    }
                });
            })
        } catch (e) {
            console.log(e)
        }
    });
    await inputTEMP.forEach(async (element) => {
        try {
            let [locationTEMP, fields] = await pool.query("select Location from input_devices where Name = 'temp'")
            await locationTEMP.forEach(async (locationtemp) => {
                await pool.query('INSERT INTO input_devices_history(ID,Name, Average_value,Location,Time) VALUES (?,?,?,?,?)', [element.id, element.feed_key, element.value, locationtemp.Location, element.created_at], (error, result) => {
                    if (error) {
                        throw error
                    }
                });
            })
        } catch (e) {
            console.log(e)
        }
    }); */
}

let geOutputdevices = async (arrayDate) => {
    /* let fromDate = arrayDate.pop()
    let toDate = new Date();
    console.log("fromDate: ", fromDate)
    console.log("todate: ", toDate)
    let ouputBUZZER = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_BUZZER, fromDate, toDate);
    let ouputFAN = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_FAN, fromDate, toDate);
    let outputLED = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_LED, fromDate, toDate);
    let outputPUMP = await api.getDataAdafruitDetails(IO_userName, IO_userKey, BBC_PUMP, fromDate, toDate);
    arrayDate.push(toDate);
    await ouputBUZZER.forEach(async (element) => {
        try {
            await pool.execute('INSERT INTO output_devices_history(ID,Name,Time) VALUES (?,?,?)', [element.id, element.feed_key, element.created_at]);
        } catch (e) {
            console.log(e)
        }
    });
    await ouputFAN.forEach(async (element) => {
        try {
            await pool.execute('INSERT INTO output_devices_history(ID,Name,Time) VALUES (?,?,?)', [element.id, element.feed_key, element.created_at]);
        } catch (e) {
            console.log(e)
        }
    });
    await outputLED.forEach(async (element) => {
        try {
            await pool.execute('INSERT INTO output_devices_history(ID,Name,Time) VALUES (?,?,?)', [element.id, element.feed_key, element.created_at]);
        } catch (e) {
            console.log(e)
        }
    });
    await outputPUMP.forEach(async (element) => {
        try {
            await pool.execute('INSERT INTO output_devices_history(ID,Name,Time) VALUES (?,?,?)', [element.id, element.feed_key, element.created_at]);
        } catch (e) {
            console.log(e)
        }
    }); */
}



module.exports = {
    getInputdevices, geOutputdevices
}