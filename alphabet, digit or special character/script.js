var alpha = prompt("Please enter the string");
if (alpha >= "a" && alpha <= "z" || alpha >= "A" && alpha <= "Z") {
    alert("The character is Alphabet");
}
else if (alpha >= "0" && alpha <= 9) {
    alert("The character is number");
}
else {
    alert("The character is special character");
}
