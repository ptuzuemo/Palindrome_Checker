var checkButton = document.getElementById("checkPalindrome");

function palindrome(str) {
    'use strict';
    var reg = /[\W_]/g;
    var aStr = str.toLowerCase().replace(reg, "");
    var palindro = aStr.split("").reverse().join("");
    
    if (palindro === aStr) return true;
    
    return false;
}
checkButton.addEventListener("click", function() {
    'use strict';
    var value = document.getElementById("inputPalindrome").value;
    var notification = document.getElementById("notification");

    if (value==="") {
        return alert("Type something");
    }
    if(palindrome(value)) {
        notification.innerHTML = "Yes! it is a palindrome";
        document.getElementById("notification").style.color="green";
        

    } else {
        notification.innerHTML = "No! it is not a palindrome";
        notification.style.color="red";
    }
});


