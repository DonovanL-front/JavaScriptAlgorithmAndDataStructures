function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) { 
      case 1 : 
       answer = "alpha";
      break; 
      case 2 : 
      answer = "beta"; 
      break; 
      case 3 : 
      answer = "gamma"; 
      break ; 
      case 4 : 
      answer = "delta"; 
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);




//   With default case :



  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val) { 
      case "a" : 
      answer = "apple"; 
      break; 
      case "b": 
      answer = "bird"; 
      break; 
      case "c" : 
      answer = "cat"; 
      break ; 
      default : 
      answer = "stuff"
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

// README


/*Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

Tests
Passed:caseInSwitch(1) should have a value of the string alpha
Passed:caseInSwitch(2) should have a value of the string beta
Passed:caseInSwitch(3) should have a value of the string gamma
Passed:caseInSwitch(4) should have a value of the string delta
Passed:You should not use any if or else statements
Passed:You should have at least 3 break statements */

