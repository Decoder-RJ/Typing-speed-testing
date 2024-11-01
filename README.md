<h1>Typing Speed Tester</h1>

<p>A web-based application to test typing speed and accuracy. This application allows users to practice their typing skills by providing a random paragraph and measuring the user's words per minute (WPM) and error count as they type. It also highlights correct and incorrect words in real-time, making it an interactive and educational tool for improving typing skills.</p>

<h2>Features</h2>
<ul>
    <li><strong>Real-Time Typing Speed Measurement:</strong> Displays the words per minute (WPM) as the user types.</li>
    <li><strong>Error Tracking:</strong> Counts typing errors and displays them, with incorrect words highlighted in red and correct words in green.</li>
    <li><strong>Randomized Texts:</strong> Provides random text samples to type, ensuring a fresh challenge each time.</li>
    <li><strong>Timer:</strong> A countdown timer set to 60 seconds, which can be reset as needed.</li>
    <li><strong>Auto-Submit on Completion:</strong> Automatically submits the test when the user types the entire text correctly.</li>
    <li><strong>Reset Functionality:</strong> Resets the timer, text, WPM, and error count to restart the typing test.</li>
</ul>

<h2>How It Works</h2>
<ol>
    <li><strong>Start Test:</strong> Click the "Start" button to begin the typing test.</li>
    <li><strong>Typing and Feedback:</strong> As the user types, the application:
        <ul>
            <li>Tracks WPM by dividing the number of correctly typed words by the elapsed time.</li>
            <li>Highlights correct words in green and incorrect words in red.</li>
            <li>Updates the error count as incorrect words are typed.</li>
        </ul>
    </li>
    <li><strong>End Test:</strong> The test ends either when the time runs out or when the user completes the text accurately. The final WPM and error count are displayed.</li>
    <li><strong>Reset Test:</strong> Click the "Reset" button to reset all fields and start a new test.</li>
</ol>

<h2>Code Structure</h2>
<h3>HTML</h3>
<ul>
    <li><strong>Buttons:</strong> "Start" and "Reset" buttons control the typing test.</li>
    <li><strong>Display Area:</strong> Shows the random text to be typed and highlights it as the user progresses.</li>
    <li><strong>Input Area:</strong> Where the user types the text.</li>
    <li><strong>Statistics Display:</strong> Shows the timer, WPM, and error count.</li>
</ul>

<h3>JavaScript</h3>
<ul>
    <li><strong>Timer Management:</strong> A countdown timer runs for 60 seconds.</li>
    <li><strong>Text Comparison:</strong> Compares the user’s input with the target text word-by-word, case-sensitively.</li>
    <li><strong>WPM Calculation:</strong> Calculates WPM by dividing the number of correctly typed words by the elapsed time.</li>
    <li><strong>Error Highlighting:</strong> Updates the display with color-coded words based on correct or incorrect input.</li>
    <li><strong>Random Text Selection:</strong> Selects a random text sample for each new test.</li>
    <li><strong>Auto-Submit on Completion:</strong> Automatically ends the test if the user types the text correctly before the timer runs out.</li>
</ul>

<h3>CSS</h3>
<ul>
    <li>Basic styling for buttons, text display, and error highlights.</li>
    <li>Color-coding for correct and incorrect words.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li><strong>Clone or Download:</strong> Clone the repository or download it as a ZIP file.</li>
    <li><strong>Open in Browser:</strong> Simply open the <code>index.html</code> file in a web browser to run the typing speed test.</li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Open <code>index.html</code> in your browser.</li>
    <li>Click <strong>Start</strong> to begin the test.</li>
    <li>Type the displayed text as accurately and quickly as possible.</li>
    <li>When done, review your <strong>WPM</strong> and <strong>Error</strong> count.</li>
    <li>Click <strong>Reset</strong> to try again.</li>
</ol>

<h2>Customization</h2>
<ul>
    <li><strong>Text Samples:</strong> To add or change the text samples, modify the <code>sampleTexts</code> array in the <code>script.js</code> file.</li>
    <li><strong>Timer Duration:</strong> To adjust the time limit, change the <code>timeLeft</code> variable's value in <code>script.js</code>.</li>
    <li><strong>CSS Styling:</strong> Customize styles in <code>styles.css</code> to change colors, fonts, or layout.</li>
</ul>

<h2>Example Screenshot</h2>
<img src="Typing speed.png" alt="Typing Speed Tester Screenshot" width="100%">

<h2>Contributing</h2>
<p>Feel free to submit issues or make pull requests for additional features or improvements.</p>

<h2>License</h2>
<p>This project is open-source and available for use under the MIT License.</p>