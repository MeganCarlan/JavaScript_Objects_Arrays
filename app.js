console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// const numbers = [2, 22, 12, 17, 18, 39, 129];
// let sum = 0;

// function arraySum(numbers) {
//  numbers.forEach((number,index) => {
//    sum += number;
//  });

//  return sum;
// }

// console.log(arraySum(numbers));



// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");


// function info() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;

// }

// let book = {
//     title: "A Good Book",
//     author: "Megan Carlan",
//     pages: 300,
//     readCount: 5,
//     info,
// }

// console.log(book.info());

// let sentence = "The quick brown fox jumps over the lazy dog";

// let sentenceArray = sentence.split(" ");
// let characterArray = [];

// for (let i=0; i<sentenceArray.length; i++) {
//   sentenceArray[i] = sentenceArray[i].split("");
//   sentenceArray[i] = sentenceArray[i].reverse();
//   sentenceArray[i] = sentenceArray[i].join('');
// }

 
//  sentence = sentenceArray.join(' ');



// console.log(sentence);


let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let csvStringArray = csvData.split(/\r?\n/);
let stringHeadersArray = csvStringArray[0].split(",");
let csvStringObjects = [];

for (let i = 1; i<csvStringArray.length; i++) {
    csvStringArray[i] = csvStringArray[i].split(",");

   csvStringObjects[i-1] = Object.assign({}, csvStringArray[i]);

}

for (let object of csvStringObjects) {
    
    object['Name'] = object['0'];
    delete object['0'];

    object['Age'] = object['1'];
    delete object['1'];
}


console.log(csvStringObjects);








