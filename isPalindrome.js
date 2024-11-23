function isPalindrom(str){
    const cleanString = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return str === cleanString.split("").reverse("").join("")

}

console.log(isPalindrom("12a3a21"))