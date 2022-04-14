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
function pigIt(str){
  let pigWord = '';
    str.split(' ').forEach(word => {
    if(word.match(/[a-zA-Z]/)) {
        pigWord += word.substr(1) + word[0] + 'ay ';
    } else pigWord += word;
  });
  return pigWord;
}

console.log(pigIt('This is my string !'));