console.log("dashboard script file")
const h2 = document.getElementById("show_username")

// console.log(h2)


function getCookies(cookieName) {
    const cookies = document.cookie.split('; ')

// for (let cookie of allCookies) {
//     // // console.log(cookie)
//     // let multipleCookie = cookie
//     // // console.log(singleCookie)
//     // console.log(multipleCookie)
//     for (let cookie of ) {
//         // let [key, value] = singleCookie //wrong
//          let [key, value] = singleCookie.split('=')
//         if (key == name) {
//             return value
//         }

//     }
//     return
    // }
    
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=')
        if (key === cookieName) {
            return decodeURIComponent(value)
        }
    }
    return null
}

// let result = getCookies("name")
// console.log(result)

const cookieData = getCookies('name');
if (cookieData) {
    const user = JSON.parse(cookieData);
    h2.textContent = `welcome ${user.name}`
}