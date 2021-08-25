
function validateRealNumbers() {
    console.log('Validating RealNumbers START');
    let data = ["-25.467", "1", "-1", "+1", "64.2"]
    let invalidData = ["1.", ".2", "+64,2"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /(^[-+]?[0-9]+\.[0-9]+)|^[-+]?[0-9]+$/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating RealNumbers END');

}
validateRealNumbers();