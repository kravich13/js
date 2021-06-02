// ============= VAR =============
// var numb = 1

// fn1()

// function fn1() {
//   var numb = 2

//   numb = 20
//   console.log(numb) // 20, т.к. идёт перезапись

//   fn2()
//   function fn2() {
//     var numb = 3
//     numb = 30
//     console.log(numb) // 30, т.к. идёт перезапись
//   }
// }

// console.log(numb) // 1

// function fn() { //   var b = 3 // }
// console.log(b) // отсутствует т.е. не создано в глобальной области

// if (true) var numb = 13
// console.log(numb) // 13

// ============= LET || CONST =============

// if (true) let numb = 13
// console.log(numb) // error, let не существует на этом уровне

// let kravich = 'hello'
// let kravich = 'Kravich' // ошибка, переопределение запрещено

// const secret_key = 'kravichA&A'
// secret_key = 'A&Akravich' // ошибка, константу нельзя перезаписывать

// const obj = {}
// obj.name = 'vlad'
// console.log(obj.name) // vlad, объект - тип данных и его не перезаписывают, а изменяют

// const arr = [1]
// arr.push(2)
// console.log(arr) // [1, 2], то же самое что и с объектом
