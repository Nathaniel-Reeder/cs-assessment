const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(arr[i] + arr[k] === 0){
                return true
            }
        }
    }
    return false
}

// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))
// Runtime complexiy for addToZero: O(n^2) where n is the arr.length
// Space complexity: O(1), constant because we only set i 

const hasUniqueChars = str => {
    let strArr = [...str]
    let strSet = new Set(strArr)
    let setArr = Array.from(strSet)
    if(strArr.join('') === setArr.join('')){
        return true
    } else {
        return false
    }
}

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
// Runtime complexity for hasUniqueChars: O(n) where n is the length of the str argument. The spread operator iterates over each element of the str like a for loop would.
// Space Complexity: O(1) because the spread operator creates an array based on the length of the str

const isPangram = str => {
    let string = str.toLowerCase()
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("")
    return alphabets.every(x => string.includes(x))
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))
// Runtime complexity for isPangram: O(n) where n is the length of the string. The .includes iterates over the string
// Space complexity: O(1) because string is only defined once

const findLongestWord = wordArr => {
    let length = 0
    for(let i = 0; i < wordArr.length; i++){
        if (wordArr[i].length > length) {
            length = wordArr[i].length
        }
    }
    return length
}

// console.log(findLongestWord(["Well, howdy there pardner!", "hi", "hello", "hey",]))
// Runtime Complexity for findLongestWord: O(n) where n is wordArr.length
// Space Complexity is O(1) 