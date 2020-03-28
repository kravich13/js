// Напишите конструктор класса Person со следующими параметрами: name, surname, age, sex, salary, married, сохраняемыми в полях объекта.
function Person (name, surname, age, salary, married) {
    this.name = name
    this.surname = surname
    this.age = age
    this.salary = salary
    this.married = married
}
let VK = new Person("Vlad", "Kravich", 22, "qq", "banane")


// Напишите конструктор класса Person с теми же параметрами, что и в предыдущей задаче. Поля должны хранится в замыкании. Для задания и чтения параметров напишите набор геттеров и сеттеров: getName, setName, getSurname, setSurname, getAge, setAge, getSex, setSex, getSalary, setSalary, getMarried, setMarried. Каждый из сеттер должен проверять данные. Если данные некорректны, данные внутри замыкания не изменяются. Сеттер всегда возвращает текущее значение переменной.

function Person(name, surname, age, salary, married) {
    function zamicanie() {
        this.name = name
        this.surname = surname
        this.age = age
        this.salary = salary
        this.married = married
    }
}
let Persona = new Person("Vlad", "Kravich", 22, "qq", "banane")