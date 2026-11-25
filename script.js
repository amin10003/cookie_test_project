console.log("Let's start ..")

const form = document.getElementById("form_registration")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        name: username,
        email: email,
        password: password,
    }
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))

    document.cookie = `name=${encodeURIComponent(JSON.stringify(userData))}; path=/; expires=${date.toUTCString()}`
    
    // if ('submit') {
    //     window.location.href='/dashboard.html'
    // } this is my errror

    //solution
     window.location.href='/dashboard.html'
})


/*
the below code was taken to dashboard.js for it to be used with dashboard.html file
*/

// function getCookies(name) {
//     const allCookies = document.cookie

// for (let cookie of allCookies) {
//     // console.log(cookie)
//     let multipleCookie = cookie
//     // console.log(singleCookie)
//     console.log(multipleCookie)
//     for (let singleCookie of multipleCookie) {
//         // let [key, value] = singleCookie //wrong
//          let [key, value] = singleCookie.split('=')
//         if (key == name) {
//             return value
//         }

//     }
//     return
// }
// }

// let result = getCookies("name")
// console.log(result)