function removeFirstTwo(list) {
    const [a,b,...shorterList] = list ; 

    return shorterList; 
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];; 
const sourceWithoutFirstTwo = removeFirstTwo(source); 


console.log(sourceWithoutFirstTwo);


/*README

Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

Use a destructuring assignment with the rest parameter to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

Tests
Passed:removeFirstTwo([1, 2, 3, 4, 5]) should be [3, 4, 5]
Passed:removeFirstTwo() should not modify list
Passed:Array.slice() should not be used.
Passed:Destructuring on list should be used.*/