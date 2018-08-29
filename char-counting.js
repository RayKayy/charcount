function countLetters(str) {
 function countChar(char, word) {
   var count = 0;
   for (var letter of word) {
     if (char == letter) count++;
   }
   return count;
 }
 var list = {};
 for (var letter of str) {
   list[letter] = countChar(letter, str);
 }

 return list;
}

console.log(countLetters("lighthouse"));