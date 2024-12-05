// Exercise 1
 
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.
 
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
 
for(let i=0; i<=15; i++){
    if(i%2===0){
       console.log( `${i} is even number`);
    }
    else{
       console.log( `${i} is odd number`);
    }
}
// Exercise 2
 
// 7. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
 
 for(let i=0; i<=100; i ++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
        }
        else if(i%5===0){
            console.log("Buzz");
        }
        else if(i%3===0){
            console.log("Fizz");
        }
        else if(i%3!==0 && i%5!==0){
            console.log(i)
        }
        else{
            console.log(i)
        }
 }
 
// Exercise 3
 
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
 
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sum1=0;
let sum2=0;
for(let i=0; i<=arr_1.length-1; i++){
    sum1+=arr_1[i];
}
console.log(sum1);
for(let i=0; i<=arr_2.length-1; i++){
    sum2+=arr_2[i];
}
console.log(sum2);
const sum=sum1+sum2;
console.log(sum);
// Exercise 4
 
// Using a for loop print all even numbers up to and including n. Don’t include 0.
 
// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let n1 = 22;
for( let i=1; i<=n1; i++){
if(i%2===0){
 console.log(i);
}
}
// Exercise 5
 
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
 
// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
let str1 = "javascript";  
 for(let i=0;i<=str1.length-1;i++){
    if((i+1) % 2 == 0){
        str1 = str1.replace(str1[i], "Z");
        
       }
 }
 console.log(str1)
// Exercise 6
 
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
// let str2 = "don’t know why";
// Example output:
// “yes”
let str2 = "don’t know why";
for(let i=0;i<=str2.length-1;i++){
    if(str2[i]=== "y"){
        console.log("Yes");
       }
 }
// Exercise 7
 
// Given a number n Calculate the factorial of the number
 
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
let n2 = 4;
let fa=1;
 for(let i=1; i<=n2; i++){
fa*=i;
 }
 console.log(fa);
 
//  Exercise 8
 
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).
let mul=1;
 for(let i=0; i<=10; i++){
    mul=i*9;
    console.log(mul);
 }
// Exercise 9
 
// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.
 for(i=60; i<=100; i++){

if (i >= 60 && i <= 69) {
  console.log("Your grade is D");
} else if (i >= 70 && i <= 79) {
  console.log("Your grade is C");
} else if (i >= 80 && i <= 89) {
  console.log("Your grade is B");
} else {
  console.log("Your grade is A");
}
 }
// Exercise 10
 
//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.
 
// Example Output:
// 1 2 3 4 5 6 7 8 9 10
let r=[];
 for(let i=1; i<=10; i++){
    r.push(i);
 }
 console.log(r);
// Exercise 11
 
// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.
 
// Example Output:
// The sum is 210
let sum3=0;
 for(i=1; i<=20;i++){
sum3+=i;
 }
 console.log(sum3);
// Exercise 12
 
// Count Vowels in a String Write a loop to count how many vowels are in a given string.
 
// let str = "hello world";
// Example Output:
// Number of vowels: 3
let str = "hello world";
let count=0;
 for(let i=0; i<=str1.length-1;i++){
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u" ||
        str[i] === "A" ||
        str[i] === "E" ||
        str[i] === "I" ||
        str[i] === "O" ||
        str[i] === "U"
      ) {
        count++;
 }
}
console.log(count);
// Exercise 13
 
// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.
 
// Example Output:
// 1 3 5 7 9 11 13 15
let n = 15;
let p=[];
for( let i=1; i<=n; i++){
if(i%2!==0){
    p.push(i);
 
}
}
console.log(p);
// Exercise 14
 
// Check if a Number is Prime Write a loop to check if a number n is prime.
 
// let n = 7;
// Example Output:
// 7 is a prime number
 for(let i=1; i<=20;i++){
    if(i%2===0 && i%3===0 && i%4===0 && i%5===0){

    }
 }
// Exercise 15
 
// Reverse a String Write a loop to reverse the characters in a string.
 
// let str = "javascript";
// Example Output:
// tpircsavaj
 let strr="javascript";
 let st='';
 for(let i=strr.length-1;i>=0;i--){
st+=strr[i];

 }
 console.log(st);
// Exercise 16
 
// Calculate Power of a Number Write a loop to calculate base^exponent.
 
// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32
let base = 2, exponent = 5;
let m=1;
 for(let i=1; i<=exponent; i++){
m=Math.pow(2,i);
 }
 console.log(m);
// Exercise 17
 
// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.
 
// Example Output:
// 5 10 15 20 25 30 35 40 45 50
let x=[];
 for(let i=5; i<=50; i++){

     if(i%5===0){
        x.push(i);
     }
     
 }
 console.log(x);
// Exercise 18
 
// Find the Largest Number in an Array Write a loop to find the largest number in an array.
 
// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98
let arr = [3, 67, 15, 98, 23];
let b=0;
for(i=0; i<=arr.length-1; i++){
if(arr[i]<=arr[i+1]){
    b=arr[i+1];

}
}
console.log(b);
// Exercise 19
 
// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.
 
// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4
let s = "javascript is amazing";
let c=0;
for(let i=0; i<=s.length-1;i++){
    if(s[i]==="a"){
c++;
    }
}
console.log(c);
// Exercise 20
 
// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.
 
// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8
let n3 = 7;
let d=0;
let n5=0; n6=1;
for (let i = 1; i <= n3; i++) {
    console.log(n5);
    t = n5 + n6;
    n5 = n6;
    n6 = t;
}
// Exercise 21
 
// Find All Divisors Write a loop to find all divisors of a number n.
 
// let n = 28;
// Example Output:
// 1 2 4 7 14 28
let nn = 28; 
 for(i=0;i<=nn;i++){
   
 }
// Exercise 22
 
// Check Palindrome Write a loop to check if a string is a palindrome.
 
// let str = "radar";
// Example Output:
// radar is a palindrome
let s1="radar";
let st1='';
for(let i=strr.length-1;i>=0;i--){
st+=strr[i];
}
if(st1===st1){
    console.log(`${s1} is palindrom`);
}
else{ 
    console.log(`${s1} is not palindrom`);
}
// Exercise 23
 
// Count Words in a Sentence Write a loop to count the number of words in a sentence.
 
// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5
let sentence = "Loops are fun to learn";
let c1=0;
for(i=0; i<=sentence.length-1; i++){
    if(sentence[i]===" "){
c1++;
    }
}
console.log("Number of Words:",c1+1)
// Exercise 24
 
// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.
 
// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4
// let ar = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// for( let i=0;i<=ar.length-1; i++){
//     for(let j=1; j<=10; j++){
//         if(arr[i]!==j){
//             console.log("Missing number is:", arr[i]);
//         }
//     }
// }
// Exercise 25
 
// Filter Positive Numbers Write a loop to filter out positive numbers from an array.
 
// let arr = [-3, 5, -2, 0, 9, -8];
// Example Output:
// [5, 9]
let arrr = [-3, 5, -2, 0, 9, -8];
let arrr1=[];
for(let i=0; i<=arrr.length-1;i++){
    if(arrr[i]>0){
        arrr1.push(arrr[i]);

    }
}
console.log(arrr1)
// Exercise 26
 
// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****
n=5;
for(let i=1; i<= n; i++){
    let str = ' '.repeat(n-i);
    let str2 = '*'. repeat(i)
    console.log(str2 + str + str);

  }
// Exercise 27
 
// Sum of Digits Write a loop to calculate the sum of the digits of a number.
 
// let num = 12345;
// Example Output:
// Sum of digits: 15
let num = 12345;
let gg=num.toString();
let num1=0;
for(let i=0; i<=gg.length-1;i++){
    num1=parseInt(num/10);
    
}
console.log(num1,"hhi");

// Exercise 28
 
// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.
 
// let arr = [1, 2, 3, 2, 1, 4];
// Example Output:
// [1, 2, 3, 4]
let a2 = [1, 2, 3, 2, 1, 4];
let a1=[];
let a3=[];
for(let i=0;i<=a2.length-1; i++){
    for(let j=i+1;j<=a2.length; j++){
         if(a2[i]===a2[j]){
         a1.push(a2[i]);
    }
}
}
console.log(a1);
console.log(a2);
// Exercise 29
 
// Find Second Largest Number Write a loop to find the second largest number in an array.
 
// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9
let a4 = [4, 10, 9, 2, 7];
let b1=0;
for(i=0; i<=a4.length-1; i++){
    for(let j=0;j<=a2.length-1; j++){
       if(a4[i]<=a4[i+1]){
        b1=a4[i+1];
    
    }
   }
    }
    console.log(b1);
// Exercise 30
 
// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.
 
// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]
 
// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *
n=3;
for(let i=1; i<= n; i++){
    let str = ' '.repeat(n-i);
    let str2 = '*'. repeat((i*2) -1);
    console.log(str + str2 + str);

  }
  n=2
  for(let i=n-1; i>= 0; i--){
    let str = '  '.repeat(n-i);
    let str2 = '*'. repeat((i*2) -1);
    console.log(str + str2 + str);

  }