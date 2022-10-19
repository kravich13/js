# LinkedList

- [LinkedList](#linkedlist)

Это структура данных по типу массива, только каждый элемент хранит в себе данные о следующем элементе, а следующий элемент - о следующем.

Отличие этой структуры от обычного массива в том, что в обычном массиве для того, чтобы добавить/удалить элемент в начале/середине списка - нужно изменить все следующие элементы по индексу. Проблема в том, что это целая итерация по массиву для изменения всех последующих индексов.

Как выглядит LinkedList:

![](images/2022-10-19%2009.52.48.jpg)

---

Состоит из объекта, в котором есть всего 2 поля:

- `head` - первый элемент
- `tail` - последний элемент

При этом они хранят в себе всю цепочку и каждый элемент знает, перед чем он находится.

Поскольку объекты - ссылочный тип данных, то никакой проблемы с памятью нет, потому что во всей цепочке хранится не конкретный объект, а ссылка на него.

Как выглядит LinkedList:

```ts
const list = new LinkedList();

list.append(2); // добавить 2 в конец
list.append(4); // добавить 4 в конец
list.prepend(1); // добавить 1 в начало
list.insertAfter(2, 3); // после 2 вставить 3
list.remove(4); // удалить 3

console.log(list);
```

![](images/2022-10-19%2010.07.59.jpg)

---

Для вывода в виде массива достаточно вызвать `toArray`. Каждый элемент массива хранит в себе инфу о всех последующих элементах:

![](images/2022-10-19%2010.12.41.jpg)