import fetch from "node-fetch";

const getDataAdafruitTotal = (userName, userKey, fromDate, toDate) => {

    const urlAPI = `https://io.adafruit.com/api/v2/${userName}/feeds?start_time=${fromDate}&end_time=${toDate}`;
    return fetch(urlAPI, {
        method: "GET",
        header: {
            "X-AIO-Key": `${userKey}`,
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP error, status = " + res.status);
            }
            return res.json();
        })
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e;
        });
}
const getDataAdafruitDetails = (userName, userKey, feedKey, fromDate, toDate) => {

    const urlAPI = `https://io.adafruit.com/api/v2/${userName}/feeds/${feedKey}/data?start_time=${fromDate}&end_time=${toDate}`;
    return fetch(urlAPI, {
        method: "GET",
        header: {
            "X-AIO-Key": `${userKey}`,
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP error, status = " + res.status);
            }
            return res.json();
        })
        .then((res) => {

            return res;
        })
        .catch((e) => {
            return e;
        });
}
module.exports = {
    getDataAdafruitTotal, getDataAdafruitDetails
}