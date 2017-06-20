

function yell () {
 let words = " Stupify ";
 return words.toUpperCase();
}

function yell10 () {
    for (let i = 0; i < 10; i++) {
      document.write(yell());
}
}

function longest () {
let num = [1,2,3,4,5,6,7,8];
let string = ["1", "2", "3", "4", "5"];
 if (num.length > string.length) {
     document.write(string);
 } else {
    document.write(num);
 }
}

function isVowel (letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        document.write("true")
    } else {
        document.write("false")
    }

}

yell10();
longest();
isVowel("y");