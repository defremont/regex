
function validateCPFs() {
    console.log('Validating CPF START');
    let data = ["123.456.789-09", "000.000.000-00", "012.630.582-05"]
    let invalidData = ["123.456.789-0", "111.111.11-11"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[0-9]+[0-9]+[0-9]+.[0-9]+[0-9]+[0-9]+.[0-9]+[0-9]+[0-9]+-[0-9]+[0-9]/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating CPF END');

}
validateCPFs();