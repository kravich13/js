// function jsonPost(url, data) {
//     return new Promise((resolve, reject) => {
//         const x = new XMLHttpRequest();
//         x.onerror = () => reject(new Error('jsonPost failed'))
//         //x.setRequestHeader('Content-Type', 'application/json');
//         x.open("POST", url, true);
//         x.send(JSON.stringify(data))

//         x.onreadystatechange = () => {
//             if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
//                 resolve(JSON.parse(x.responseText))
//                 // console.log(x)
//             } 
//             else if (x.status != 200) {
//                 reject(new Error('status is not 200'))
//             }
//         }
//     })
// }

async function jsonPost (url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })
        if (response.ok) {
            // console.log(response)
            return await response.json()
        }
        return console.log("Ошибка")
    }
    catch (error) {
        console.log("Ошибка", error)
    }
}   


const inputNickname = document.getElementById("nickname")
const inputMessage = document.getElementById("message")
const ButtonOtpravka = document.getElementById("enter")
const chat = document.getElementById("chat")

let indexPosta = 0 // хранится индекс массива с начальным/последним положением

post(690) // отрисовываем весь чат с нулевого индекса объекта

async function post (index) {
    let result = await jsonPost("http://students.a-level.com.ua:10012", {
            func: "getMessages",
            messageId: index
            // messageId: 690 // к примеру 685 - 682 = 3 сообщения будет показано
        })
        // .then (function (result) {
            const ArrMessage = result.data

            console.log(index)
            // console.log(result.nextMessageId)    



            // если сообщения не добавлялись, выход из функции
            if (result.nextMessageId === indexPosta) {
                return
            }

            // если индекс изменился с последнего на +1, меняем предпоследний индекс поста на последний
            if (result.nextMessageId === indexPosta + 1) {
                indexPosta = result.nextMessageId
            }

            // если отрисовка начинается с первого сообщения, запоминаем последний индекс
            if (index === 0) {
                indexPosta = result.nextMessageId
            }


            // перебор и добавление сообщений
            ArrMessage.forEach (function (elem) {
                const div = document.createElement("div")
                const p = document.createElement("p")
                let span = document.createElement("span")
                const br = document.createElement("br")

                let dateMessage = elem.timestamp
                let date = new Date(dateMessage)
                span.textContent = `[${date.getDate()}.${date.getDay()}.${date.getFullYear()}] `
                span.style.color = "rgb(168, 168, 168)"
                span.style.fontSize = "17px"
                p.append(span)


                span = document.createElement("span")
                span.textContent = `${elem.nick}:` // добавили ник в span
                p.append(span) // в p добавили сразу span для ника
                span.insertAdjacentHTML("afterend", elem.message) // добавил текст сообщения после span в p
                div.append(p) // добавили p со span и после с текстом
                chat.append(div) // div со всеми элементами добавили в сам чат
                chat.append(br)
            })

            chat.scrollBy(0, chat.scrollHeight)
            // return
        // })
}

// интервал
setInterval( () => {
    post(indexPosta) // отрисовка если добавилось новое сообщение
}, 1000)

ButtonOtpravka.addEventListener("click", function (event) {
    // сообщение добавляется в объект и в чат
    if (inputNickname.value === "" || inputMessage.value === "") return
    
    jsonPost("http://students.a-level.com.ua:10012", {
        func: 'addMessage',
        nick: inputNickname.value,
        message: `  ${inputMessage.value}`
    })
    inputMessage.value = "" // очистка поля для текста

    post(indexPosta) // отрисовываем с последней позиции при клике
})
