// localStorage - подобие объекта

// Данные сохраняются при обновлении страницы и даже после перезагрузки браузера.



// Сохранить пару key/value (как в обычном объекте)
localStorage.setItem("user", "Vlad") 
console.log(localStorage) // Storage { user: "Vlad", length: 1 }



// Получить данные на другой странице/браузере по ключу key
localStorage.getItem("user") // Vlad



// Удалить данные с ключом key
localStorage.removeItem("user") 
console.log(localStorage) // Storage { length: 0 }



// Удалить всё
localStorage.setItem("user", "Vlad") 
localStorage.setItem("age", 22) 
console.log(localStorage) // Storage { user: "Vlad", age: "22", length: 2 }

localStorage.clear() // Storage { length: 0 }



// Получить ключ на заданной позиции
localStorage.setItem("user", "Vlad") 
localStorage.setItem("age", 22) 

localStorage.key(0) // user



// Length - количество элементов в хранилище
localStorage.setItem("user", "Vlad") 

localStorage.length // 1



// Доступ как к обычному объекту
localStorage.test = 2
console.log(localStorage) // Storage { test: "2", length: 1 }

delete localStorage.test



// Перебор ключей: 
localStorage.setItem("user", "Vlad") 
localStorage.setItem("age", 22) 

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    
    console.log(`${key}: ${localStorage.getItem(key)}`)
    // user: Vlad, age : 22
}





// SessionStorage

// Этот объект используется реже и существует лишь в рамках текущей вкладки браузера.
// Другая вкладка в этом же браузере будет иметь другое хранилище.

// Имеет все те же методы, что и localStorage

sessionStorage.setItem("user", "Vlad")

// на другой вкладке недоступен 
console.log(sessionStorage) // Storage { length: 0 }





// Ivent storage
