

function validateDateTimes() {
    console.log('Validating DateTimes START');
    let data = ["31/08/2019 20:14:55", "99/99/9999 23:59:59"]
    let invalidData = ["99/99/9999 3:9:9", "9/9/99 99:99:99", "xx/99/9999 3x:9x:x9", "9x/x9/x9 99:99:99", "9x/x9/x9 99,99,99", "94\49\49 99:99:99"];
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[0-9]+[0-9]+\/[0-9]+[0-9]+\/[0-9]+[0-9]+[0-9]+[0-9]+\s[0-9]+[0-9]+:[0-9]+[0-9]+:[0-9]+[0-9]+/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating DateTimes END');

}
validateDateTimes();