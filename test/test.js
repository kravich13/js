var userName = prompt("Вы админ?", "");


if (userName == "Admin") {

    var pass = prompt("А какой пароль?", "")
    if (pass == "Giant") {
        alert("Здравствуйте");

    } else {
        if (pass == null) {
            alert("Отмэна")
        } else {
            alert("Неа");
        }
    }

} else {
    if (userName == null) {
        alert("Вы нажали отмэна");
    } else {
        alert("я хз кто вы");
    }
}





// выход из цикла - break (когда ровно null)
var i = 0;
while (i < 100) {
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
        break
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}

// Проверка на null (отмэна) в условии цикла

var i = 0;
while (i < 100 && i != null) {
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}

// это do
do {        
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
        break
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}
while (i < 100) 




// При помощи цикла for выведите чётные числа от 2 до 10.
for ( var i = 0; i <= 10; i += 2 ) {
    alert (i);
    }




i = 0;
while (i < 3) {
    i++;
    alert(`number ${i}!`);
}