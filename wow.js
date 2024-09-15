let btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((json) => userkorinishi(json.results[0]));
});
function userkorinishi(odam) {
    const user = document.getElementById('user')
    const ism = document.getElementById('h1')
    const tele = document.getElementById('h2')
    const tel = document.getElementById('h2')
    const adress = document.getElementById('h3')
    const email = document.getElementById('h3')
    const rasm = document.getElementById('img')
    user.innerHTML = ''
    rasm.src = odam.picture.large;
    h1.textContent = `${odam.name.title} ${odam.name.first} ${odam.name.last}`
    age.textContent = 'age: ' + odam.dob.age;
    tel.textContent - 'phone: ' + odam.phone;
    adress.textContent - 'addres: ' + odam.location.country + '' + odam.location.city;
    email.textContent - 'email: ' + odam.email;
    user.appendChild(rasm)
    user.appendChild(h1)
    user.appendChild(age)
    user.appendChild(tel)
    user.appendChild(adress)
    user.appendChild(email)
}