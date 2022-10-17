// Загружать картинки по мере прокрутки страницы пользователем.

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

                img.style.backgroundColor = "grey"

            }
        })
    }, options)


    // слежка за всеми элементами с помощью цикла
    const arr = document.querySelectorAll("img")
    arr.forEach (elem => {
        observer.observe(elem)
    })
}