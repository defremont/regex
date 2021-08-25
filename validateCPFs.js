
function validateCPFs() {
    console.log('Validating CPF START');
    let data = ["123.456.789-09", "000.000.000-00", "012.630.582-05", "739.635.290-83", "707.660.350-00", "997.526.490-50", "337.007.080-41", "999.330.710-68", "593.335.600-09", "040.925.500-90"]
    let invalidData = ["123.456.789-0", "111.111.11-11", "xxxx.630.xxx-05", "7.635.290-83", "707..350-00", "9950", "3337.04407.02280-4133", "@#@.330.710-68", "593.335.60009", "040.500-90"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]-[0-9][0-9]/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating CPF END');

}
validateCPFs();