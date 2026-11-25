function challenge1(width, height) {
    let rectangleString = '';
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            rectangleString += '*';
        }
        rectangleString += '\n';
    }
    return rectangleString;
}

console.log(challenge1(5,2));

function challenge2(arr){
    let temp = [];
    let left = 0;
    for(let i = 0; i < arr.length; i++){
        temp[i] = arr[i];
    }
    for(let i = arr.length - 1; i >= 0; i--){
        arr[i] = temp[left];
        left++;
    }
    return arr;
}

function challenge3(arr){
    avg = 0;
    if(arr.length == 0){
        console.log("Array cannot be empty.");
    }
    else {
        for(let i = 0; i < arr.length; i++){
            avg += arr[i];
        }
        return avg/arr.length;
    }
}

arr = [10,11,12,13];

arr1 = [];

console.log(challenge3(arr));

function challenge4(string,target){
    count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === target){
            count++;
        }
    }
    return count;
}

text = "aaaaa bbbb cc";
char = "a";

console.log(challenge4(text,char));

let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray.length);

function challange5(arr){
    count = arr.split(" ");
    return count.length;
}

function challenge_6(arr){
    if(arr.length === 0){
        return "There is not vote yet";
    }

    count_a = 0;
    count_b = 0;
    count_c = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "A"){
            count_a++;
        }else if(arr[i] === "B"){
            count_b++;
        }else if(arr[i] === "C"){
            count_c++;
        }
    }

    max_count = Math.max(count_a, count_b, count_c);
    winners = [];

    if(count_a === max_count){
        winners.push("A");
    }
    if(count_b === max_count){
        winners.push("B");
    }
    if(count_c === max_count){
        winners.push("C");
    }

    if(winners.length === 1){
        return winners[0] + " is the winner";
    }
    if(winners.length === 2){
        return winners[0] + " and " + winners[1] + " are both winners";
    }
    return "A, B and C are all winners";
}
