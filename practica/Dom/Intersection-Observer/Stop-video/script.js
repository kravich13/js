window.onload = () => {
    const iframe = document.querySelector('iframe')
    
    const observer = new IntersectionObserver(() => {
        // если видео запущено
        console.log(iframe)

        // if (iframe.autoplay === 1) {
        //     // приостанавливаем проигрывание
        //     console.log("тут")
        // }
    }, { threshold: 0.4 })

    observer.observe(iframe)
}