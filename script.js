let pageData = {
    bgcolor: {
        red: '#e01414',
        green: '#9dde71'
    },
    dog: {
        smile: 'green.png',
        boring: 'red.png',
        static: 'none.png'
    }
} 
document.getElementById('red').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = pageData.bgcolor.red
    localStorage.setItem('bgcolor', JSON.stringify(pageData.bgcolor.red))
    document.querySelector('img').setAttribute('src',pageData.dog.boring)
    localStorage.setItem('dog', JSON.stringify(pageData.dog.boring))
})
document.getElementById('green').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = pageData.bgcolor.green
    localStorage.setItem('bgcolor', JSON.stringify(pageData.bgcolor.green))
    document.querySelector('img').setAttribute('src',pageData.dog.smile)
    localStorage.setItem('dog', JSON.stringify(pageData.dog.smile))
})
document.getElementById('clear').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#fff'
    localStorage.clear()
    document.querySelector('h1').textContent = 'Set your text below :)'
    delete pageData.text
    document.querySelector('img').setAttribute('src',pageData.dog.static)
})
document.getElementById('settext').addEventListener('click', function() {  
    let mes = document.querySelector('input').value
    if(mes && mes.trim()){
        document.querySelector('h1').textContent = mes
        pageData.text = mes
        localStorage.setItem('text', JSON.stringify(pageData.text))
    }
})
document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('bgcolor')!=='null'){
        document.querySelector('body').style.backgroundColor = JSON.parse(localStorage.getItem('bgcolor'))
    }
    if(localStorage.getItem('text')){
        document.querySelector('h1').textContent = JSON.parse(localStorage.getItem('text'))
    }
    if(localStorage.getItem('dog')){
        document.querySelector('img').setAttribute('src', JSON.parse(localStorage.getItem('dog')))
    }
})