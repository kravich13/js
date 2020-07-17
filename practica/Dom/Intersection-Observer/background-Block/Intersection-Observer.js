// изменение цвета блока при прокрутке и открутке обратно

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