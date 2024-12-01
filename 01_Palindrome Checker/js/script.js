var frm = document.getElementById("form");
frm.onsubmit = function () {
    var user = document.getElementById("number").value;
    var view = document.getElementById("result");
    var store = user;
    var rev = 0;
    while (store != 0) {
        rev = (rev * 10) + (store % 10);
        store = parseInt(store / 10);
    }
    if (user == rev) {
        result.innerHTML = "This is palindrome";
        return false;
    } else {
        result.innerHTML = "this is not palindrome";
        return false;
    }
}