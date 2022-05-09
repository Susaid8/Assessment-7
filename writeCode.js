const array = [2,4,6,8,10]

const addToZero = (array) => {
    let result = 'false'
    for(let i = 0;i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(i !== j){
                if (array[i] + array[j] === 0){
                    result = 'true'
                }
            }
        }
    }

    return result
}

// console.log(addToZero(array)) // returns false // o(n^2)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// console.log(hasUniqueChars("Monday")) // true
// console.log(hasUniqueChars("Moonday")) // o(n)


const isPangram = (str) => {
    return str.toLowerCase().split('').filter((e) => e >= "a" && e <= "z").length > 25;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!")) // true
// console.log(isPangram("I like cats, but not mice")) // false // this is doing what the append in runtime did. adding new values so it has a lower complexity

function find_longest_word (string) {
    let stringSplit = string
    let longestWord = 0
    for (let i = 0; i < stringSplit.length; i++){
        if(stringSplit[i].length > longestWord){
            longestWord = stringSplit[i].length
        }
    }
    
    return longestWord
}

console.log(find_longest_word(['hi', 'hello'])) // 5 // o(n)




