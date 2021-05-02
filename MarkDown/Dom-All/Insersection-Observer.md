- [Основы](#основы)
- [Единоразовый вызов:](#единоразовый-вызов)
- [Прокрутка туда сюда](#прокрутка-туда-сюда)

## Основы
Interseption Observer API позволяет приложению асинхронно наблюдать за пересечением элемента `target` с его родителем `root` или областью просмотра `viewport`. В краце говоря, этот API вызывает вызов определенной функции каждый раз при пересечении целевого элемента с `root` или `viewport`.

**Д**ля начала работы необходимо с помощью конструктора создать объект наблюдатель с двумя параметрами - функцией обратного вызова и двумя настройками:

```javascript
const options = { // объект с параметрами и к чему применять
    root: document.querySelector('.scroll-list'),
    rootMargin: '5px',
    threshold: 0.5
}

// функция обратного вызова
const callback = function(entries, observer){
    ...
}

// наблюдатель
const observer = new IntersectionObserver(callback, options)
```

* `root` - элемент, который выступает в роли области просмотра для `target`;
* `rootMargin` - отступы вокруг `root`;
* `threhold` - число или массив чисел, указывающий допустимый процент пересечения `target` и `root`.

***

## Единоразовый вызов:


Пример с единоразовой покраской блока при его попадании в область видимости

```javascript
window.onload = () => {

    const options = {
        root: null,
        rootMargin: "0px", // без отступов
        threshold: 0.5 // 50%
    }

    // наблюдатель

    const observer = new IntersectionObserver (function (entries, observer) {
        entries.forEach(function (elem) {
            const img = elem.target

            if (elem.isIntersecting) { // если в зоне видимости

                img.style.backgroundColor = "grey" // покрасить в серый

            }
        })
    }, options)


    // слежка за всеми элементами с помощью цикла
    const arr = document.querySelectorAll("img")
    arr.forEach (elem => {
        observer.observe(elem)
    })
}
```

В этом примере все блоки `img` покрашены в чёрный, как только каждый блок попадает в область видимости пользователя - он подгружается и меняет свой цвет на серый. 

Таким образом, можно сделать подгрузку множества изображений без существенной нагрузки на сайт (так и делают).

***

## Прокрутка туда сюда

Пример с прокруткой и откруткой обратно:

```javascript

window.addEventListener('load', event => { // ивент на загрузку

    const box = document.getElementById('block3') // элемент, к которому применяется ленивая загрузка
    const prevRatio = 0.4 // 40% от высоты блока для изменений


    const observer = new IntersectionObserver((entries, observer) => { // конструктор, который принимает два параметра: первый - массив, второй - экспемпляр IntersectionObserver

        entries.forEach(entry => { 
            const curRatio = entry.intersectionRatio
           
            if (curRatio > prevRatio) { // если текущее положение больше, чем 40% высоты блока - применить покраску
                entry.target.style.backgroundColor = "grey"
            }
            else { // если нет, то вернуть
                entry.target.style.backgroundColor = ""
            }
        })
    }, {
        threshold: buildThresholdList()
    })

    observer.observe(box)
    
    // функция построения шкалы пересечения
    // шкала представляет собой массив из 20 элементов, определяющих цвет контейнера
    function buildThresholdList() {
        const thresholds = []
        const steps = 20

        for (let i = 1.0; i <= steps; i++) {
            const ratio = i / steps
            thresholds.push(ratio)
        }
        return thresholds
    }
})
```

В данном примере при прокрутке третьего блока на 40% его видимости он меняет свой цвет на серый, а при прокрутке обратно на те же 39% - меняет свой цвет обратно на красный.

