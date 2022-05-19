/* ARRAYS

Store Multiple Values in one Variable using JavaScript Arrays

    Explanation: 
    With JavaScript array variables, we can store several pieces of data in one place.

    You start an array declaration with an opening square bracket,
    end it with a closing square bracket, and put a comma between each entry, 
    like this: */

    const sandwich = ["Tomate", "Mayonesa", "Fiambre"];

    /*  
    Exercise 
    Modify the new array myArray so that it contains both 
    a string and a number (in that order)*/

    const myArray = ["This is a string", 15];

/* NEST ONE ARRAY WITHIN ANOTHER ARRAY

    You can also arrays within other arrays, like below: */

    const team = [["String", 10],["String tow", 5]];
    console.log(team[0]);

/* shift(), unshift(), push(), pop() 

    shift() Remove the first element of an array.
    unshift() Add an element at the beginning of an array.
    push() Add en element at the end of an array.
    pop() Remove the last element of an array.

