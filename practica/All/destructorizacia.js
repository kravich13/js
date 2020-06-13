// Деструктурирующее присваивание

let user = {
    name: "John",
    years: 30
}

let {name, years: age, isAdmin = false} = user

console.log(name, age, isAdmin)




// Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalary (obj) {
    if (Object.keys(obj).length === 0) {
        return null
    }

    let max_ZP = 0
    let topName

    for (const [name, salary] of Object.entries(obj)) {
        // console.log(name, salary)
        if (salary > max_ZP) {
            // console.log(salary)
            max_ZP = salary
            topName = name
        }
    }
    return topName

}
topSalary(salaries)


