document.addEventListener("DOMContentLoaded", function(){
     function getBooks(){
           fetch('https://dog.ceo/api/breeds/list/all')
             .then(res => res.json())
             .then(console.log)
}

getBooks()
