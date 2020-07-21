console.log('hello world');
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

name.addEventListener('blur',()=>{
    console.log('name is blurred');
    let regex = /[^0-9][a-zA-Z]/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log('it matched');
        name.classList.remove('is-invalid')
    }
    else{
        console.log('does not matched')
        name.classList.add('is-invalid')
    }
})
email.addEventListener('blur',()=>{
    console.log('email is blurred')
})
phone.addEventListener('blur',()=>{
    console.log('phone is blurred')
})