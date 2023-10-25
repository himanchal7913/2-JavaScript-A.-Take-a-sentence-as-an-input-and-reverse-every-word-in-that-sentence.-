function reverseWords(sentence) {
  const reversedSentence = sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');

  return reversedSentence;
}


const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); 

// Output: "sihT si a ynnus yad"
