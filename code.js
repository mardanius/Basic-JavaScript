
/*--------------
Basic JavaScript
----------------

JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, 
along with HTML and CSS, and is supported by all modern browsers.

In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like 
numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more. */

/*------------------------------
1. Comment Your JavaScript Code.
------------------------------*/

// One line comment.

/* Multiple 
lines 
comment */




/*-----------------------------
2. Declare JavaScript Variables
-------------------------------

In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types 
which are undefined, null, boolean, string, symbol, bigint, number, and object.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the 
data we want to refer to. Computer variables differ from mathematical variables in that they can store different values 
at different times. */




/*--------------------------------------------
3. Storing Values with the Assignment Operator
----------------------------------------------

In JavaScript, you can store a value in a variable with the assignment operator (=).

myVariable = 5; */





/*-----------------------------------------------
4. Assigning the Value of One Variable to Another
-------------------------------------------------

After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another 
variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar; */




/*----------------------------------------------------
5. Initializing Variables with the Assignment Operator
------------------------------------------------------

It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0; 

NOTE: Remember de difference between:
    - DECLARE (Basically create de variable without a value).
    - INITIALIZE (Assign a value to a declared variable).*/




/*=========================
6. Declare String Variables
===========================

Previously you used the following code to declare a variable:

var myName;
But you can also declare a string variable like this:

var myName = "your name";
"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in 
single or double quotes. */




/*======================================
7. Understanding Uninitialized Variables
========================================

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation 
on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an 
undefined variable, you will get a string of undefined.




/*============================================
8. Understanding Case Sensitivity in Variables
==============================================

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different 
casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and 
the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;




/*=====================================================
9. Explore Differences Between the var and let Keywords
=======================================================

One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable 
declarations:

var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. 
The console then displays the string David.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might 
accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for 
and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. */ 

let camper = "James";
let camper = "David";
/*The error can be seen in your browser console.*/




/*=====================================================
10. Declare a Read-Only Variable with the const Keyword
=======================================================

The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt 
to reassign a variable that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase 
for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later 
challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers. */
