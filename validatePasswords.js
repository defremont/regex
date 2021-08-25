
function validatePasswords() {
    console.log('Validating Passwords START');
    let data = ["!18R2r5e", "111AAAbb", "518R2r5e", "F123456A", "1234567T", "ropsSoq0"]
    let invalidData = ["F1234567A", "abcdefgH", "1234567HI"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /^(?=.{8,8}$)(?=[0-9A-Za-z]*[0-9])(?=[0-9A-Za-z]*[A-Z])[a-z]*/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Passwords END');

}
validatePasswords();