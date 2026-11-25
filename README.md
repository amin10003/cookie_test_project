# Cookie Registration & Personalized Dashboard

A beginner JavaScript project that demonstrates how to:

- Create a registration form
- Capture user input
- Store user data using cookies
- Redirect users to another page after registration
- Read cookie data on a different page
- Display a personalized dashboard using the registered username

## Features

- User Registration Form
- Cookie-based Data Storage
- Automatic Page Redirection
- Personalized Welcome Message
- Cookie Retrieval and Parsing
- Basic Form Handling with JavaScript

## Technologies Used

- HTML5
- JavaScript (Vanilla JS)
- Browser Cookies

## Project Structure

```text
project-folder/
│
├── index.html
├── register.js
├── dashboard.html
├── dashboard.js
├── README.md
└── notes.md
```

## How It Works

### Registration Page

1. User enters:
   - Username
   - Email
   - Password

2. The form:
   - Creates a user object
   - Converts it into a JSON string
   - Stores it inside a cookie

3. After registration:
   - User is redirected to the dashboard page

### Dashboard Page

1. Reads the saved cookie
2. Decodes the cookie value
3. Converts the stored JSON string back into an object
4. Extracts the username
5. Displays a personalized welcome message

## Example Output

```text
Dashboard

Welcome moha
```

## Key Concepts Learned

- DOM Manipulation
- Event Listeners
- Form Handling
- Cookies
- JSON.stringify()
- JSON.parse()
- encodeURIComponent()
- decodeURIComponent()
- Page Redirection
- Data Persistence Between Pages

## Lessons Learned

During this project I learned:

- Cookies store strings, not objects.
- Objects must be converted using `JSON.stringify()`.
- Stored JSON must be converted back using `JSON.parse()`.
- Cookie data should be encoded and decoded properly.
- The cookie key used for saving must match the key used for retrieval.
- JavaScript template literals cannot be used directly in HTML.
- Debugging with `console.log()` helps identify issues quickly.
- Splitting responsibilities across multiple files improves code organization.

## Future Improvements

- Add form validation
- Add login functionality
- Add logout functionality
- Use Local Storage instead of cookies
- Hide sensitive information such as passwords
- Add CSS styling
- Add authentication checks before accessing the dashboard

## Author

Created as part of a JavaScript learning exercise focused on cookies, page navigation, and DOM manipulation.
