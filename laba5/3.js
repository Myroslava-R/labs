let text = "This is random text about nothing";
text.toLowerCase();

function removeLastVowel(arr) {
    let ans = arr.split(" ");
    for (i = 0; i < ans.length; i++) {
        for (j = ans[i].length - 1; j >= 0; j--) {
            if (
                ans[i][j] == "a" ||
                ans[i][j] == "e" ||
                ans[i][j] == "i" ||
                ans[i][j] == "o" ||
                ans[i][j] == "u"
            ) {
                ans[i] = ans[i].slice(0, j) + ans[i].slice(j + 1);

                break;
            }
        }
    }
    return ans.join(' ');
}

console.log(removeLastVowel(text));