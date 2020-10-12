## Оператор ?? 

Означает следующее: если не `null` или `undefined` - вернуть операнд справа: 

* `undefined ?? "kravich` - вернёт `"kravich"`.
* `null ?? "kravich"` - вернёт `"kravich"`.
* `false ?? "kravich"` - вернёт `false`.
* `0 ?? 1` - вернёт `0`.


Вся разница между оператором `||` (или) в том, что он  отбрасывает все значения, которые преобразуются к `false`:

* `false || "kravich` - вернёт `"kravich"`.
* `0 || 1` - вернёт `1`.
***

## Оператор ?.

Этот оператор нужен для избавления от кучи вложенностей `if`. 

К примеру, нужно проверить объект, в котором лежит поле, в котором лежит поле, в котором лежит поле и в этом поле лежат нужные данные: 

```javascript
const obj = {
  age: 23,
  kravich: {
      vlad: {
          money: 13000
      }
  }
}

// Обычная запись выглядела бы так
let moneys
if ("money" in obj.kravich.vlad) {
    moneys = obj.kravich.vlad.money
}
console.log(moneys) // 13000



const age = obj?.age // если не null и не undefined 
console.log(age) // 23

const money = obj.kravich.vlad?.money
console.log(money) // 13000
```
К этому всему добавляется одна проверка `if (!moneys) return` и всё.
