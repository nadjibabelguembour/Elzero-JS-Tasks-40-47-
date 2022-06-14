console.log("%cAssignements of videos  from 40 up to 47: ","color: blue; font-size:28px");

//task 1.........................................
console.log("%cPart 1: ","color: red; font-size:25px");
let myFriends=["Ahmed", "Ilhem", "Osama","Gamal"];
let num=3;
//Method 1:
myFriends.length = num;
console.log(myFriends)

//method 2
console.log(myFriends.splice(num-num,num));//["Ahmed", "Ilhem", "Osama"]




//task 2.........................................
console.log("%cPart 2: ","color: red; font-size:25px");
let friends=["Ahmed","Eman","Ossama","Gamal"];
friends.shift();
friends.pop();
console.log(friends);
//task 3.........................................
console.log("%cPart 3: ","color: red; font-size:25px");

 let arrOne = ["C","D","X"];
 let arrTwo = ["A","B","Z"];
 let finalArr=[];
 console.log(finalArr.concat(arrTwo[arrTwo.length-true],arrOne[arrOne.length-true],arrOne.slice(false,true+true).reverse(), arrTwo.slice(false,true+true).reverse()))

//task 4.........................................
console.log("%cPart 4: ","color: red; font-size:25px");

let website= "Go";
let words = [`${website}ogle`,"Facebook",["Elzero","Web","School"]];
console.log(words.reverse()[0][0].slice(website.length).toUpperCase());

//task5
console.log("%cPart5", "color:red;font-size:1.5rem")

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
    console.log("First solution: found")
}
for (let i=0; i<haystack.length; i++){
    if (haystack[i]==needle){
        console.log("second solution: found"); 
    }
}
(haystack.indexOf(needle)==1)?
console.log("third solution: found"):
console.log("not found");

/////////---------------------------------------------------------------/////////////////
//task6
console.log("%cPart6", "color:red;font-size:1.5rem")
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [...arr1, ...arr2]; //concat arrays

allArrs = allArrs.sort() //sort array in alphabet order
allArrs = allArrs.slice(arr2.length).join('').toLowerCase() //extract last three items from array(i use length of the arr2 (return 4) in order to not use number in my code) and join them to remove ',' between letters than write them in lower case. 
console.log(allArrs); // fxy
