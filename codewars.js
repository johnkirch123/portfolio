// // Descending number
// // return a descending number
// function descendingOrder(n){
//   let arr = [...n.toString()];
//   arr.sort((a, b) => {
//       return parseInt(b) - parseInt(a);
//   });
//   return parseInt(arr.join(''));
// }
// console.log(descendingOrder(14532678));
// console.log(descendingOrder(3));
// console.log(descendingOrder(333));

// ******************************************************************************************************************************************************* //
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// function friend(friends){
//   return friends.filter(name => name.split('').length === 4);
// }
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));

// ******************************************************************************************************************************************************* //
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// DECIDED TO USER RECURSION JUST TO HELP CEMENT THE CONCEPT

// function betterThanAverage(classPoints, yourPoints) {
//   function helper(arr) {
//     if(arr.length === 0) return 0;
//     return arr[0] + helper(arr.slice(1));
//   }
//   return helper(classPoints) / classPoints.length < yourPoints ? true : false;
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// ******************************************************************************************************************************************************* //

// Pig latin
// function pigIt(str){
//   let pigWord = '';
//     str.split(' ').forEach(word => {
//     if(word.match(/[a-zA-Z]/)) {
//         pigWord += word.substr(1) + word[0] + 'ay ';
//     } else pigWord += word;
//   });
//   return pigWord;
// }

// console.log(pigIt('This is my string !'));

// ******************************************************************************************************************************************************* //

// // SURRONDING MATRIX WITH DEPENDANCY VARIABLE
// let matrix = [[0,1,2],[3,4,5],[6,7,8]];
// // let matrix = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]];
// function get_neighbourhood(type, arr, coordinates){
//   let result = [];
//   let m = coordinates[0];
//   let n = coordinates[1];
//   if(m < 0 || m >= arr.length || n < 0 || n >= arr[0].length || arr === []) return [];

//   if(m-1 >= 0) result.push(arr[m-1][n]);
//   if(n-1 >= 0) result.push(arr[m][n-1]);
//   if(m+1 <= arr.length - 1) result.push(arr[m+1][n]);
//   if(n+1 <= arr[0].length - 1) result.push(arr[m][n+1]);

//   if(type === 'moore') {
//     if(m-1 >= 0 && n-1 >= 0) result.push(arr[m-1][n-1]);
//     if(m-1 >= 0 && n+1 <= arr.length - 1) result.push(arr[m-1][n+1]);
//     if(m+1 <= arr.length - 1 && n-1 >= 0) result.push(arr[m+1][n-1]);
//     if(m+1 <= arr.length - 1 && n+1 <= arr[0].length -1) result.push(arr[m+1][n+1]);
//   }
//   return result;
// }

// // console.log(get_neighbourhood('moore', matrix, [0,0]));
// // console.log(get_neighbourhood('moore', matrix, [2,2]));
// // console.log(get_neighbourhood('von_neumann', matrix, [2,2]));
// console.log(get_neighbourhood('von_neumann', matrix, [1,1]));
// console.log(get_neighbourhood('moore', matrix, [-1,1]));

// ******************************************************************************************************************************************************* //

// RGB TO HEX
// function rgb(r, g, b) {
//   const hexArray = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//   ];
//   const rgbArray = [r, g, b];
//   let hexColor = "";
//   rgbArray.forEach((color) => {
//     const num1 = color <= 0 ? 0 : color >= 255 ? 15 : Math.floor(color / 16);
//     const num2 =
//       color <= 0
//         ? 0
//         : 1 <= color && color <= 15
//         ? color
//         : 16 <= color && color <= 254
//         ? ((color / 16) % num1) * 16
//         : 15;
//     hexColor += hexArray[num1] + hexArray[num2];
//   });
//   return hexColor;
// }

// MORE CONCISE RGB TO HEX AND LEARNED FROM READING AND THE SUPPLIED ANSWERS
const rgb = (r, g, b) => {
  return toHex(r) + toHex(g) + toHex(b);
};

function toHex(num) {
  return num <= 0 ? "00" : 255 <= num ? "FF" : num.toString(16).toUpperCase();
}

console.log(rgb(93, 3, 3));
// console.log(rgb(0, 0, 0));
