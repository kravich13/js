// Cookie - сохраненные данные пользователя в оперативной памяти браузера

// Записываются в виде объекта строкой: key=value; key=value; key=value
// Если перезаписать key - то он изменится, а не добавится новый

console.log(document.cookie) // vblastvisit=1582967604; vblastactivity=0; __utmc=216415245; user=John

document.cookie = "user=Vlad"  
console.log(document.cookie) // vblastvisit=1582967604; vblastactivity=0; __utmc=216415245; user=Vlad



// Есть ряд настрек, которые важны и должны быть установлены

const date = new Date()
document.cookie = `user=Kravich; path=/; expires=Tue; ${date.getDay()} ${date.getFullYear()} GMT`
// "user=Kravich; path=/; expires=True; 1 2020 GMT"



// path - URL-префикс пути, куда куки будут доступны для станиц под этим путём.

// Если куки установлено с path=/admin, то оно будет доступно на страницах /admin и /admin/something
// Как правило, указывают в качестве пути корень path=/, чтобы наше куки было доступно на всех страницах сайта

// К примеру, если поставить path=/, то страница kravich.com будет доступна для куки
// Если поставить path=/admin, то страница kravich.com/admin будет недоступна для куки