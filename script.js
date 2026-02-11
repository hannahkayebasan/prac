/* LEVEL 3 */
let level = 3;
function levelUp() {
    if (level < 6) {
        level++;
        document.getElementById("levelNum").innerHTML = level;
    }
}

/* LEVEL 4 */
function validateName() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg");

    if (name === "") {
        msg.style.color = "red";
        msg.innerHTML = "Name is required!";
    } else {
        msg.style.color = "green";
        msg.innerHTML = "Welcome, " + name + "!";
    }
}

/* LEVEL 5 */
let coins = 0;
function addCoin() {
    coins++;
    document.getElementById("coins").innerHTML = coins;
}
function removeCoin() {
    if (coins > 0) {
        coins--;
        document.getElementById("coins").innerHTML = coins;
    }
}

/* LEVEL 6 */
function chooseDoor(door) {
    let result = document.getElementById("result");

    if (door === 2) {
        result.style.color = "green";
        result.innerHTML = "🎉 Correct Door!";
    } else {
        result.style.color = "red";
        result.innerHTML = "❌ Wrong Door!";
    }
}
