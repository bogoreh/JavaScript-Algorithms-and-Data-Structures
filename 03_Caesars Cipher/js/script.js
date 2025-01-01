function caesarCipher(str, num) {
    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCasStr[i];
        if (currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentindex + num;
        if (newindex > 25) newIndex = newIndex - 26;
        // if (newIndex < 0) newIndex = 26 + newIndex;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else newStr += alphabet[newIndex];
    }
    return newStr;
}