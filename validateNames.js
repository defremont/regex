
function validateNames() {
    console.log('Validating Names START');
    let data = ["Jake Brett", "Sally Stott", "Yuvraj Madden", "Alan Turing", "Noam Chomsky", "Ada Lovelace"]
    let invalidData = ["1Alan", "Alan", "A1an", "A1an Turing", "342 234", "A23 F343"]
    data = data.concat(invalidData);
    console.log("Data:" + data);
    var regex = /[A-Z][a-z]+\s[A-Z][a-z]/;
    data.forEach(d => {
        return console.log(regex.test(d) + " " + d);
    });
    console.log('Validating Names END');

}
validateNames();