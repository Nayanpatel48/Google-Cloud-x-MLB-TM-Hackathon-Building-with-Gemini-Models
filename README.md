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

### 1. OnChange, value prop : 

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

### 2. 