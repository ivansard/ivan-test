//The sum of a range

function range(start, end, step){
    //return value
    let array = [];

    //defining step if not given
    if(!step){
        step = 1;
    }
    //Ascending
    if(start < end){
        for (let value = start; value < end ; value+= step) {
            array.push(value);
        }
    } else {
        // Descending
        for (let value = end; value > end ; value+= step) {
            array.push(value);
        }
    }
    // Adding end element
    array.push(end);
    return array;
}

function reverseArray(originalArray){
    let newArray = [];

    for (let index = originalArray.length - 1; index >= 0; index--) {
        newArray.push(originalArray[index]);
    }

    console.log(newArray);
    return newArray;
}

function reverseArrayInPlace(array){
    for (let index = 0; index < array.length/2; index++) {
        let helper = array[index];
        array[index] = array[array.length -1 - index];
        array[array.length -1 - index] = helper;
    }

    console.log(array);
    return array;
}

function arrayToList(array){
    let list = null;

    for (let index = array.length - 1; index >= 0; index++) {
        let obj = {
            value: array[index],
            rest: list
        }
        list = obj
    }
    return list;
}

function arrayToListRecursive(array){
    if(array.slice(1).length === 0){
        return {
            value: array[0],
            rest: null
        }
    }

    return {
        value: array[0],
        rest: arrayToList(array.slice(1))
    }
}

function listToArray(list, array){

    //Create an empty array if one is not supplied
    if(!array){
        array = [];
    }

    //Checking list.rest is null, we have reached the final element of the list
    if(!list.rest){
        array.push(list.value);
        return array;
    }

    array.push(list.value);
    return listToArray(list.rest, array);
}

function prepend(element, list){
    // If the list is empty, the element itself will be the single node in the new list
    if(!list){
        list = {
            value: element,
            rest: null
        }
        return;
    }
    //Creation of a new list
    let newList = {
        value: element,
        rest: list
    }

    return newList;
}

function nth(list, number){
    // Checking if list if falsey
    if(!list){
        console.log('List is ' + list);
        return undefined;
    }
    // Checking for submitted index
    if(!number || number < 0){
        console.log('Please submit an index which is greater than -1');
        return undefined;
    }

    // Checking if the submitted index is the first one
    if(number === 0){
        return list.value;
    }

    // If not, then we
    let iterationList = list;
    for (let shift = 0; shift < number; shift++) {
        if(!iterationList.rest){
            console.log('There is no element at the submitted index');
            return undefined;
        }
        iterationList = iterationList.rest;
    }

    return iterationList.value;
}

function deepEqual(value1, value2){

    // If one is an object and the other is not an object, return false
    if( (typeof(value1) === Object && typeof(value2) != Object) || (typeof(value2) === Object && typeof(value1) != Object)){
        return false;
    }

    // If both are not objects, compare them
    if(typeof(value1) != Object && typeof(value2) != Object){
        return value1 === value2;
    }

    // If both are objects
    if(typeof(value1) === Object && value1 !== null && typeof(value2) === Object && value2 !== null){

        const firstObjectKeys = Object.keys(value1);
        const secondObjectKeys = Object.keys(value2);

        // Checking that they have the same number of properties
        if(firstObjectKeys.length !== secondObjectKeys.length){
            return false;
        }
        // Looping through all properties in one object
       for(let prop in value1){
            // Check if the second one also contains it    
            if(value2.hasOwnProperty(prop)){
                // Check if the values of the same property are equal
                if(!deepEqual(value1[prop], value2[prop])){
                    return false;
                }
            } else {
                return false;
            }    
       }
       return true;
    } else {
        return false;
    }
}



