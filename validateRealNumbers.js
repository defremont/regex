
function validateRealNumbers() {
    console.log('Validating RealNumbers START');
    let data = ["-25.467", "1", "-1", "+1", "64.2", "122224.33332"]
    let invalidData = ["1.", ".2", "+64,2", "a34.2", "++23", "."]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /(^[-+]?[0-9]+\.[0-9]+)|^[-+]?[0-9]+$/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating RealNumbers END');

}
validateRealNumbers();