const ul = document.querySelector('ul')
let n = 1

function createLi(){ // функция с созданием li 
    li = document.createElement('li')
    li.innerHTML = `${++n} item`
    ul.append(li)
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // если в зоне видимости, создать li
            createLi()
        }

        observer.unobserve(entry.target)
        observer.observe(document.querySelector('li:last-child'))
    })
}, {
    threshold: 1
})

// наблюдатель
observer.observe(document.querySelector('li'))