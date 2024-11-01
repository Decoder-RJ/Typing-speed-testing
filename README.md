# Typing Speed Tester
A web-based application to test typing speed and accuracy. This application allows users to practice their typing skills by providing a random paragraph and measuring the user's words per minute (WPM) and error count as they type. It also highlights correct and incorrect words in real-time, making it an interactive and educational tool for improving typing skills.

<h2>Features</h2>
Real-Time Typing Speed Measurement: Displays the words per minute (WPM) as the user types.
Error Tracking: Counts typing errors and displays them, with incorrect words highlighted in red and correct words in green.
Randomized Texts: Provides random text samples to type, ensuring a fresh challenge each time.
Timer: A countdown timer set to 60 seconds, which can be reset as needed.
Auto-Submit on Completion: Automatically submits the test when the user types the entire text correctly.
Reset Functionality: Resets the timer, text, WPM, and error count to restart the typing test.
<h2>How It Works</h2>
Start Test: Click the "Start" button to begin the typing test.
Typing and Feedback: As the user types, the application:
Tracks WPM by dividing the number of correctly typed words by the elapsed time.
Highlights correct words in green and incorrect words in red.
Updates the error count as incorrect words are typed.
End Test: The test ends either when the time runs out or when the user completes the text accurately. The final WPM and error count are displayed.
Reset Test: Click the "Reset" button to reset all fields and start a new test.
<h2>Code Structure</h2>
<h3>HTML</h3>
Buttons: Start and Reset buttons control the typing test.
Display Area: Shows the random text to be typed and highlights it as the user progresses.
Input Area: Where the user types the text.
Statistics Display: Shows the timer, WPM, and error count.
<h3>JavaScript</h3>
Timer Management: A countdown timer runs for 60 seconds.
Text Comparison: Compares the user’s input with the target text word-by-word, case-sensitively.
WPM Calculation: Calculates WPM by dividing the number of correctly typed words by the elapsed time.
Error Highlighting: Updates the display with color-coded words based on correct or incorrect input.
Random Text Selection: Selects a random text sample for each new test.
Auto-Submit on Completion: Automatically ends the test if the user types the text correctly before the timer runs out.
<h3>CSS</h3>
Basic styling for buttons, text display, and error highlights.
Color-coding for correct and incorrect words.
Installation
Clone or Download: Clone the repository or download it as a ZIP file.
Open in Browser: Simply open the index.html file in a web browser to run the typing speed test.
Usage
Open index.html in your browser.
Click Start to begin the test.
Type the displayed text as accurately and quickly as possible.
When done, review your WPM and Error count.
Click Reset to try again.
Customization
Text Samples: To add or change the text samples, modify the sampleTexts array in the script.js file.
Timer Duration: To adjust the time limit, change the timeLeft variable's value in script.js.
CSS Styling: Customize styles in styles.css to change colors, fonts, or layout.
Example Screenshots

Contributing
Feel free to submit issues or make pull requests for additional features or improvements.

License
This project is open-source and available for use under the MIT License