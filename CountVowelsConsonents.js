function countVowelConsonent(str) {
    var vCount = 0
    var cCount = 0

    let vowelList = "AEIOUaeiou"
    for (let alpha of str) {
        if (alpha.match(/[a-zA-Z]/g)) {
            if (vowelList.includes(alpha))
                vCount++
            else
                cCount++
        }
    }
    return ({ vCount, cCount })
}

console.log(countVowelConsonent("Count me out1221431"))