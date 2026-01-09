// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let iin = 1; iin <= i; iin++) str += "*";
//   str += "\n";
// }

// console.log(str);

// *
// **
// ***
// ****
// *****

// let str = "";

// for (let intial = 1; intial <= 5; intial++) {
//   for (let run = 5; run >= 1; run--) str += intial >= run ? "*" : " ";
//   str += "\n";
// }

// console.log(str);

//     *
//    **
//   ***
//  ****
// *****

// let str = "";

// for (let val = 5; val >= 1; val--) {
//   for (let inn = 1; inn <= val; inn++) str += "*";
//   str += "\n";
// }

// console.log(str);

// *****
// ****
// ***
// **
// *

// let str = "";

// for (let int = 5; int >= 1; int--) {
//   for (let inn = 5; inn >= 1; inn--) str += inn > int ? " " : "*";
//   str += "\n";
// }

// console.log(str);
// *****
//  ****
//   ***
//    **
//     *

// let str = "";
// const maxValue = 10;
// for (let i = 1; i <= maxValue; i++) {
//   for (let inner = 1; inner <= maxValue; inner++) {
//     if (i === 1 || i === maxValue) str += "*";
//     else if (inner === 1 || inner === maxValue) str += "*";
//     else str += " ";
//   }
//   str += "\n";
// }

// console.log(str);

// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

// let increaseValue = 1;
// let str = "";

// for (let i = 1; i < 5; i++) {
//   for (let inner = 1; inner <= i; inner++) {
//     str += increaseValue + " ";
//     increaseValue++;
//   }
//   str += "\n";
// }

// console.log(str);

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   if (i != 1) str += " ".repeat(i - 1);
//   for (let inner = 1; inner <= 4; inner++) str += "* ";
//   str += "\n";
// }
// console.log(str);
// * * * *
//  * * * *
//   * * * *
//    * * * *
//     * * * *

// let str = "";
// const applicationData = {
//   userValue: 5,
//   leftValue: null,
//   rightValue: null,
// };

// const { userValue } = applicationData;

// const centerNum = Math.round(userValue / 2);

// for (let i = 1; i <= userValue; i++) {
//   if (i === 1) {
//     applicationData.leftValue = centerNum;
//     applicationData.rightValue = centerNum;
//   } else {
//     const { leftValue, rightValue } = applicationData;
//     applicationData.leftValue = leftValue - 1;
//     applicationData.rightValue = rightValue + 1;
//   }
//   for (let inner = 0; inner <= userValue + 1; inner++) {
//     const { leftValue, rightValue } = applicationData;
//     if (centerNum === inner && i === 1) str += "*";
//     else if (
//       (i != 1 && i === userValue) ||
//       leftValue === inner ||
//       rightValue === inner
//     )
//       str += "*";
//     else str += " ";
//   }
//   str += "\n";
// }
// console.log(str);
//    *
//   * *
//  *   *
// *     *
// *******

// let str = "";

// const userData = 11;

// const roundedValue = Math.trunc(userData / 2);

// for (let i = 1; i < userData; i++) {
//   const valueToMov = Math.abs(roundedValue - i);
//   for (let inner = 0; inner <= valueToMov; inner++) {
//     if (valueToMov === inner) {
//       const valueToSet =
//         i > roundedValue ? roundedValue - (i - roundedValue) : i;
//       str += "* ".repeat(valueToSet);
//     } else str += " ";
//   }

//   str += "\n";
// }
// console.log(str);

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let str = "";
// const userValue = 7;
// const roundValue = Math.round(userValue / 2);

// for (let i = 1; i <= userValue; i++) {
//   str += " ".repeat(userValue - i);
//   str += "* ".repeat(i);
//   str += "\n";
// }
// console.log(str);

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *

// let str = "";

// const userValue = 7;
// const roundValue = Math.round(userValue / 2);

// for (let i = userValue; i >= 1; i--) {
//   str += " ".repeat(userValue - i);
//   str += "* ".repeat(i);
//   str += "\n";
// }

// console.log(str);

// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *

// let str = "";
// const userValue = 11; // only odd no is nessory
// const roundValue = Math.round(userValue / 2);

// for (let i = userValue; i >= 1; i--) {
//   const valueForSpace =
//     i - roundValue > 0
//       ? Math.abs(i - roundValue - roundValue)
//       : roundValue - (roundValue - i);

//   const calcRound = Math.abs(roundValue + 1 - i);

//   const forStar =
//     i > roundValue
//       ? i - (userValue - roundValue)
//       : roundValue > i
//       ? calcRound
//       : 1;
//   str += " ".repeat(valueForSpace);

//   i === roundValue ? (str += "* ") : (str += "* ".repeat(forStar));

//   str += "\n";
// }
// console.log(str);

//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *

// const userVal = 101;
// let value = "";
// for (let out = userVal + 1; out > 0; out--) {
//   value += " ".repeat(out - 1);
//   const runLoop = userVal + 2 - out;

//   for (let inn = 1; inn <= runLoop; inn++) {
//     if (out >= userVal || inn === 1 || inn === runLoop) value += " 1";
//     else {
//       const increase = 1 + (userVal - out);
//       value += ` ${increase}`;
//     }
//   }

//   value += "\n";
// }
// console.log(value);

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 4 4 1
