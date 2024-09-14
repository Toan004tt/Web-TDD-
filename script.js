const adressbtn = document.querySelector('#adress-form')
const adressclosefffff = document.querySelector('#adress-close')
console.log(adressclose)
adressbtn.addEventListener("click",function() {
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click",function() {
    document.querySelector('.adress-form').style.display = "none"
})