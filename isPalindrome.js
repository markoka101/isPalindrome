// Write your code below
const isPalindrom = word => {
    //reverse starts at opposite end of word
    let reverse = word.length-1;
    for (let letter in word) {
        //false if the place in word is not equal to reverse order
        if (word[letter] != word[reverse]) {
            return false;
        }
        //decrement reverse variable
        reverse--;
    }
    return true;
}
