# Project instarctions
1. create a registration form and save data using cookies
2. research on page redirection , so once you register , it redirects you to a dashboard that is personalisedbwith username.



# Cookie Registration & Dashboard Project - Mistakes and Lessons Learned

## 1. Incorrect Cookie Syntax

### Mistake
Used incorrect cookie formatting when saving data.

```js
document.cookie = `name=${JSON.stringify(userData)}; path'/' expires='${date.toUTCString()}'`
```

# Solution

```js
document.cookie = `name=${encodeURIComponent(JSON.stringify(userData))}; path=/; expires=${date.toUTCString()}`
```

- Use `path=/`
- Use `expires=`
- Separate properties using semicolons (`;`)
- Encode data before storing it

---

## 2. Using a Condition That Is Always True

### Mistake

```js
if ('submit') {
    window.location.href='/dashboard.html'
}
```

- `'submit'` is a non-empty string.
- Non-empty strings are always truthy.

# Solution

```js
window.location.href = "dashboard.html";
```

or

```js
if (formSubmitted) {
    window.location.href = "dashboard.html";
}
```

---

## 3. Looping Through document.cookie Incorrectly

### Mistake

```js
for (let cookie of allCookies)
```

- `document.cookie` returns a string.
- This loop iterates character by character instead of cookie by cookie.

# Solution

```js
const cookies = document.cookie.split('; ');

for (let cookie of cookies) {
    // work with each cookie
}
```

---

## 4. Splitting the Wrong Variable

### Mistake

```js
let multipleCookie = cookie.split('; ');
```

- Happened while `cookie` contained a single character from the previous incorrect loop.

# Solution

```js
const cookies = document.cookie.split('; ');
```

Split the cookie string before starting the loop.

---

## 5. Incorrect Cookie Destructuring

### Mistake

```js
let [key, value] = singleCookie
```

- This doesn't separate the key and value.

# Solution

```js
let [key, value] = singleCookie.split('=')
```

---

## 6. Comparing the Wrong Values

### Mistake

```js
if (key == value)
```

- Compared cookie key against cookie value.

# Solution

```js
if (key === cookieName)
```

Compare the cookie key against the parameter being searched.

---

## 7. Trying to Use Template Literals Directly in HTML

### Mistake

```html
<h2>${username}</h2>
```

- HTML cannot interpret JavaScript template literals.

# Solution

```html
<h2 id="show_username"></h2>
```

```js
document.getElementById("show_username").textContent =
`Welcome ${user.name}`;
```

---

## 8. Using the Same Script for Different Pages

### Mistake

Loaded the form script on pages that did not contain the form.

```html
<script src="script.js"></script>
```

- Dashboard page does not contain the registration form.

# Solution

Use separate script files.

```html
<script src="register.js"></script>
```

```html
<script src="dashboard.js"></script>
```

---

## 9. Cookie Name Mismatch

### Mistake

Saved cookie as:

```js
document.cookie = `name=...`
```

But tried to read:

```js
getCookies("user")
```

# Solution

Use the same key name everywhere.

```js
document.cookie = `user=...`
```

```js
getCookies("user")
```

OR

```js
document.cookie = `name=...`
```

```js
getCookies("name")
```

---

## 10. Not Understanding Why JSON.parse() Was Needed

### Mistake

Assumed cookie data remains an object after being stored.

# Solution

Cookies store strings only.

Before storing:

```js
JSON.stringify(userData)
```

After retrieving:

```js
JSON.parse(cookieData)
```

Flow:

```text
Object
↓
JSON.stringify()
↓
Cookie Storage
↓
JSON.parse()
↓
Object
```

---

## 11. Not Understanding Why encodeURIComponent() Was Needed

### Mistake

Stored raw JSON directly inside cookies.

# Solution

Use:

```js
encodeURIComponent()
```

when storing.

Use:

```js
decodeURIComponent()
```

when retrieving.

Flow:

```text
Object
↓
JSON.stringify()
↓
encodeURIComponent()
↓
Cookie

Cookie
↓
decodeURIComponent()
↓
JSON.parse()
↓
Object
```

---

##