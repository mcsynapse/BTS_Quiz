# BTS Quiz

Welcome to the BTS Quiz project! This quiz will test your knowledge about BTS with 25 random questions selected from a pool of 100. The quiz is designed to be engaging and visually appealing, with a light purple theme and interactive elements.

## Features

- **Dynamic Quiz**: Displays 25 random questions out of a pool of 100.
- **Interactive Options**: Clickable buttons to select answers and proceed to the next question.
- **Score Display**: Shows your final score at the end of the quiz.
- **Responsive Design**: Adjusts to different screen sizes with a clean, modern look.
- **Visual Appeal**: Floating question windows and beautiful buttons with a light purple theme.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/bts-quiz.git
    cd bts-quiz
    ```

2. **Set Up GitHub Pages**:

    - Go to the repository settings on GitHub.
    - Scroll down to the "GitHub Pages" section.
    - Select the `main` branch (or whichever branch contains your HTML file) and save.

3. **Edit the Quiz**:

    - Open `index.html` in your code editor.
    - Modify the `questions` array in the JavaScript section to include your 100 questions.
    - Update the paths for the BTS logo and your brand logo.

## Customization

- **Change the Theme**: Modify the CSS to adjust colors, fonts, and button styles.
- **Update Questions**: Edit the `allQuestions` array in the JavaScript code to add or change questions.
- **Logo Adjustment**: Ensure that your PNG logos are transparent and correctly referenced.

## Example Questions Format

Here’s how you should format each question in the `allQuestions` array:

```javascript
const allQuestions = [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0 // Index of the correct option
    },
    // Add more questions...
];
