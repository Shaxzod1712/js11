/*              Task 1                       */

// ar = [
//   {
//     id: 1,
//     year: 2012,
//     name: 'Eshmat',
//     status: 'student',
//     key: 'test',
//   },

//   {
//     id: 2,
//     year: 2011,
//     name: 'Toshmat',
//     status: 'student',
//     key: 'test',
//   },
//   {
//     id: 3,
//     year: 2010,
//     name: 'Eshmat akasi',
//     status: 'student',
//     key: 'test',
//   },
// ];

// const onDelete = (id) => ar.filter((value) => value.id !== id)
// console.log(onDelete(1));

//  const onSort = () => ar.sort((a, b) => (a.year - b.year));
//  console.log(onSort());

/* 1. Object kalitlari va qiymatlarini tengligini tekshirish */

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const areEqual = (value1, value2) => {
//   if (Object.values(value1).toString() === Object.values(value2).toString()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// areEqual(data, data2);

// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };

// const nestedValueExists = (obj) => {
//   if (obj.a.b === undefined) {
//     return false
//   }
//   else if (obj.a.innerKey === null) {
//     return false
//   }else return true
// }

// console.log(nestedValueExists(data));
// console.log(nestedValueExists(data2));
// console.log(nestedValueExists(data3));

// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { b: 2,  a: 1, };
// const data2 = {b: 2,  c: 1,  };
// const data3 = { c: 3, b: 5 };

// const checkSame = (value1, value2) => {
//   if(
//     Object.values(value1).toString() === Object.values(value2).toString() ||
//     Object.keys(value1).toString() === Object.keys(value2).toString()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkSame(data, data2));
// console.log(checkSame(data2, data3));

// const Karra = (a) => {
//     return (b) => {
//       console.log(`${a} x ${b} = ${a * b}`);
//   };
// };

// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//         }
//     console.log('-------------');
// }

// var ar = [1, 2, 7, 3, 5, 4, 8];

// var SortedAr = ar.sort();

// var b = SortedAr.splice(SortedAr.length - 2, 2);

// ar.push(b[1] - b[0]);

// console.log(ar);

// var ar = [1, 2, 8, 3, 5, 5, 8];

// var i = 0;
// var sorted = ar.sort();
// while (ar.length > i) {
//     console.log(ar);
//     var spliced = sorted.splice(sorted.length - 2, 2);
//     if (spliced[1] - spliced[0] !== 0) {
//         ar.push(spliced[1] - spliced[0]);
//         console.log(spliced);
//     }
//     sorted = ar.sort();
//     i++;
// }

// if (ar[0] - ar[1] === 0) ar = [];
// console.log(ar);

// ar= [2,3,2,4,6,2,3,5];
//     ar.sort()
//     kk=ar.pop()
//     jk=ar.pop()
//     jj=kk-jk
//     ar.map((value)=>{
//         for (let i = 0; i < ar.length; i++) {
//             jj>=1&& ar.unshift(jj)
//             jj=0&& ar===ar
//             console.log(i);
            
//         }
//     })
//     console.log(ar[i]);

// var yosh = 17;


// if ( yosh > 18 ) {
//     console.log('xa mashina xaydash mumkun');
// } else if (yosh == 18) {
//     console.log('pravaga oqw kere');
// }
// else {
//     console.log( 'yoq moshina xaydash taqiqlanad');
// } 







// var yosh = 22;

// if (yosh > 21) {
//     console.log('xa siz chet elga ishlashga ketishingiz mumkun');
// } else if ( yosh == 21 ) {
//     console.log('siz qizil passport olishingiz kere');
// } else {
//     console.log('yoq siz xali kota bollishingiz kere');
// }

// let a = 'webBrain Academy'

// console.log(a.repeat(6));


// for (let salom = 0; salom < 10; salom++ ){
//     console.log(salom, 'nma gap');
// }


// function obj(num1 = 0, num2 = 0) {
//     console.log(num1 + num2);
//     return function (num3 = 0) {
//         console.log(num1 + num2 + num3);
//     };
// }

// obj(1,2);
// obj(1)(2);

console.log(2);

var a ='zato push qildm'
console.log(a);