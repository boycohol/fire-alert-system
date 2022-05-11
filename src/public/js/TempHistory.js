$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds/bbc-temp/data?X-AIO-Key=aio_Nxul03GLcIb2tsoz1pXghnCzo5nA",function(data){
    var table = document.getElementById('infoTableTemp');

    var dataLength = data.length;

    for (var i = 0; i < dataLength; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = data[i].created_at;
        var cell2 = row.insertCell();
        cell2.innerHTML = data[i].value;
    }
});