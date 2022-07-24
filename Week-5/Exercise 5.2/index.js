
function isVowel(char) {

    return "aeiou".includes(char);
 }

function vowelCount(str) {

    const vowelMap = new Map();

    for (let char of str) {

        let lowerCaseChar = char.toLowerCase()

      if ("aeiou".includes(char.toLowerCase())) {

        if (vowelMap.has(lowerCaseChar)) {

          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);

        } else {

          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    
    return vowelMap;
}
  
console.log(vowelCount("sdhjkg")); // 👉️ Map(0) {}
console.log(vowelCount("asdfkiowdfjfgkao")); // 👉️ Map(3) { 'a' => 2, 'i' => 1, 'o' => 2 }