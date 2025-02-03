# Google-Cloud-x-MLB-TM-Hackathon-Building-with-Gemini-Models
``This is a DEVPOST hackathon project built by me on feb 1 2025. winter break.``

- The challenge that i have been working on: **Build a system that allows fans to select team(s), player(s), and other parts of the baseball experience and subsequently receive relevant summary audio, video and/or text digests on a regular cadence to stay up on the latest highlights and commentary related to the fan’s selection. Ensure your solution supports fans who speak English, Spanish, and Japanese. MLB information, including audio, video and text for a project in this category can be found here: https://github.com/MajorLeagueBaseball/google-cloud-mlb-hackathon.***

## Tools & technologies used in this project:

<div style="display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/11a76217-be59-45dc-9af2-002e7a4a1133" alt="Image 1" style="max-width: 200px; height: 200px;">
  <img src="https://github.com/user-attachments/assets/8e64bf1e-9a73-4b27-b663-87c22af1e161" alt="Image 2" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/f58db321-3855-4d8f-acf1-75a1539002a5" alt="Image 3" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/91f30d9b-0ec6-4129-9099-f5bc322a5a70" alt="Image 4" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/2ef31bdb-6250-4f23-98a3-709341f3f762" alt="Image 5" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/76f7b85d-c6a3-4332-bfbf-395dbf4422be" alt="Image 6" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/ce15c17b-650b-4e10-9c78-b5129eae3b4b" alt="Image 7" style="max-width: 200px; height: auto;">
  <img src="https://github.com/user-attachments/assets/93d92dc4-6649-468d-a62f-4ea49874164d" alt="Image 8" style="max-width: 200px; height: auto;">
</div>

## Firebase auth setup:
### Registration:

![Image](https://github.com/user-attachments/assets/203ce778-8ab4-4de5-9bf8-3d2ca16a1b6d)

### Login: 


## Learnings:

### 1. *OnChange={}*, *value={}* prop for html elements such as input, buttons etc: 

```javaScript 
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```
- `value={email}`: This is the crucial part that makes the input controlled.  It binds the value of the input field to the `email` variable in your component's state.  This means:
- The input field will always display the value that is stored in the `email` state variable.
- If you change the `email` state (using `setEmail`), the input field will automatically update to reflect the new value.

- Whenever the user types something into the input field, the `onChange` event is triggered.  The arrow function is executed, which takes the current value of the input field (`e.target.value`) and uses the `setEmail` function to update the `email` state variable in your React component.  This, in turn, causes React to re-render the component, reflecting the updated value in the input field (and anywhere else you might be using the `email` state).

### 2. <Link/> tag: 

```javaScript
<Link to="/register">
  Sign up
</Link>
```

- `<Link ... >`: This is the JSX syntax for a link component, specifically the `Link` component from `react-router-dom`.  It's used for navigation within your React application.  It's preferred over regular `<a>`tags for internal links because it prevents a **full page reload** , making navigation faster and smoother.

### 3. *onSubmit* prop:

```javaScript
  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
```

- `onSubmit={handleSubmit}`: This is the most important part for form handling in React.  It's an event handler that's called when the form is submitted (e.g., when the user clicks a submit button).

- `onSubmit`: This is a standard React event handler for forms.

- `{handleSubmit}`: This is a reference to a function in your React component.  When the form is submitted, this function will be executed.

### 4. async await asynchronous operations: 

```javaScript
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      // Redirect after successful login
      navigate("/"); // Or whatever route you want to redirect to
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error);
    }
  };
```

- `const handleSubmit = async (e) => { ... };`: This defines an asynchronous function called `handleSubmit`. The `async` keyword allows you to use `await` inside the function, which makes asynchronous code easier to read and write. The function takes an event object `e` as an argument (common for form submissions).

- `e.preventDefault();`: This line prevents the default form submission behavior.  In HTML forms, clicking the submit button typically causes a *full page reload*.  `e.preventDefault()` stops this from happening, allowing you to handle the form submission with JavaScript (in this case, Firebase authentication).

- `setError(null);`: This line sets the error state variable to `null`.  This is likely used to clear any previous `error` messages that might be displayed to the user.  It's a good practice to clear errors before attempting a new submission.

- `try { ... } catch (error) { ... }`: This is a `try...catch` block.  It's used for error handling.  The code inside the `try` block is the code that might throw an error (in this case, the Firebase sign-in).  If an error occurs, the code inside the catch block is executed.

- `await signInWithEmailAndPassword(auth, email, password);`: This is the core of the login process.
`signInWithEmailAndPassword()` is a function provided by the Firebase Authentication library. It attempts to sign in a user using their email and password.

- `auth` is your Firebase authentication instance. `email` and `password` are the user's email and password, respectively. These are likely stored in state variables in your React component and updated as the user types in the input fields.

- `await` is used because `signInWithEmailAndPassword()` returns a Promise (an object that represents the eventual result of an asynchronous operation.). `await` pauses the execution of the `handleSubmit` function until the Promise resolves (either the sign-in is successful or it fails).

- `console.log("User logged in successfully!");`: If the sign-in is successful, this line logs a success message to the console.

- `navigate("/");`: This line uses the navigate function (likely from `react-router-dom`) to redirect the user to the root path `("/")` after a successful login.  You can replace `"/"` with any route you want to redirect to.

- `catch (error) { ... }`: If `signInWithEmailAndPassword()` throws an `error` (e.g., incorrect email or password), the code inside the catch block is executed.

- `setError(error.message);`: This line sets the error state variable to the error message from the Firebase error object.  This allows you to display the error message to the user in your UI.

- `console.error("Error logging in:", error);`: This line logs the error to the console for debugging purposes.

### 5. Proises in javaScript:

- It is an object that represents the eventual result of an asynchronous operation.

- **States of a Promise:**

- A Promise can be in one of three states:

- `Pending`: The initial state.  The asynchronous operation is still in progress.  You don't know the result yet.

- `Fulfilled (Resolved)`: The operation completed successfully.  The Promise has a value (the result of the operation).

- `Rejected`: The operation failed.  The Promise has a reason for the failure (an error).

### 6. onClick (React):

```javaScript
  <button onClick={myFunction}>Click Me</button>  // myFunction is a function
```

- Executes the `myFunction` when clicked

### 7. 