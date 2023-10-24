console.log("%c level-1_1", "color: blue; background-color: gold");

const firstName = "John";
const LastName = "Doe";
let fullName = firstName + LastName;

console.log(firstName.length);
console.log(LastName.length);
console.log(fullName.length);

console.log("%c level-1_2", "color: blue; background-color: gold");

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));
console.log(txt.indexOf("H"));

console.log("%c level-1_3", "color: blue; background-color: gold");

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));
console.log(txt2.search("Blue"));

console.log("%c level-1_4", "color: blue; background-color: gold");

const A = 'Susi is going to codingschool';
document.write("LEVEL-1_4", "<br>", "<br>");
document.write(A.slice(0, 4), "<br>");
document.write(A.slice(5, 7), "<br>");
document.write(`${A.slice(5, 16)}  ${A.slice(23)} <br>`);
document.write(A.slice(23), "<br>");
document.write(`${A.slice(0, 7)}  ${A.slice(23)} <br>`);

console.log("%c level-1_5", "color: blue; background-color: gold");

const text = 'Susi is back from codingschool';

document.write("<br>", "LEVEL-1_5", "<br>", "<br>");
document.write(text.substring(0, 4), "<br>");
document.write(text.substring(5, 7), "<br>");
document.write(text.substring(24), "<br>");
document.write(`${text.substring(0, 7)}  ${text.substring(24)} <br>`);

console.log("%c level-1_7", "color: blue; background-color: gold");

const text2 = "Sam is good at codingschool";

document.write("<br>", "LEVEL-1_7", "<br>", "<br>");
document.write(text2.slice(0, 15).concat(text2.slice(21)).replace("good", "bad"), "<br>");
document.write(text2.slice(0, 15).concat(text2.slice(21)).replace("Sam", "Susi"), "<br>");
document.write(text2.slice(0, 15).concat(text2.slice(21)).replace("school", "tennis"), "<br>");

console.log("%c level-1_8", "color: blue; background-color: gold");

const text3 = "Sam is going to codingschool";

document.write("<br>", "LEVEL-1_8", "<br>", "<br>");
document.write(text3.substring(0, 4).toUpperCase().concat(text3.slice(6, 16).concat(text3.slice(22).toUpperCase())), "<br>");
document.write(text3.substring(0, 4).toLowerCase().concat(text3.slice(6, 16).toUpperCase().concat(text3.slice(22))), "<br>");

const text4 = text3.substring(0, 16).concat(text3.slice(22));

document.write(text4[0].toUpperCase());

for (let i = 0; i < text4.length - 1; i++)
{
    if (text4[i].includes(" ") === true)
    {
        document.write(text4[i + 1].toUpperCase());
    }
    else if (text4[i].includes(" ") !== true)
    {
        document.write(text4[i + 1].toLowerCase());
    }
}