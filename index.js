//Die Aufgaben von Dominik:
//1. Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt.

function longestString() {
    let str1 = "The weather is good";
    let str2 = "The weters suckst";
    let str3 = "Bad weather";
    let str4 = "Sun out";
    if (
        str1.length > str2.length &&
        str1.length > str3.length &&
        str1.length > str4.length
    ) {
        return str1;
    } else if (
        str2.length > str1.length &&
        str2.length > str3.length &&
        str2.length > str4.length
    ) {
        return str2;
    } else if (
        str3.length > str1.length &&
        str3.length > str2.length &&
        str3.length > str4.length
    ) {
        return str3;
    } else if (
        str4.length > str2.length &&
        str4.length > str3.length &&
        str4.length > str1.length
    ) {
        return str4;
    }
}
console.log("___________Aufgabe 1_______________");
console.log(longestString());

//2. Schreibe eine Funktion, die alle Vorkommen eines Wortes in einem Text prüft.
function numTimesWordRepeated() {
    const str =
        "The weather is good but if the weather is bad we realy need to brace for bad weather";
    const char = {};
    const arr = str.split(" ");

    for (let word of arr) {
        if (!char[word]) {
            char[word] = 1;
        } else {
            char[word]++;
        }
    }
}
console.log("___________Aufgabe 2_______________");

console.log(numTimesWordRepeated());
//3. Schreibe eine Funktion, die alle Wörter in einem Text rückwärts geschrieben zurückgibt. Die Position der Worte soll sich dabei aber nicht ändern.
//Beispiel: “the quick brown fox jumps over the lazy dog” => “eht kciuq nworb xof spmuj revo eht yzal god”
