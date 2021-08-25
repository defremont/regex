function validatePhones() {
    console.log('Validating Phones START');
    let data = ["(91) 99999-9999", "(91) 999999999", "91 999999999"]
    let invalidData = ["(91) 59999-9999", "99 99999-9999", "(94)95555-5555", "99 bb999-aaa9", "(94)  9333-5225", "(91) 99333999-99933393"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /(^\([0-9][0-9]\)\s9[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$)|(^\([0-9][0-9]\)\s9[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$)|(^[0-9][0-9] 9[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$)/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Phones END');

}
validatePhones();