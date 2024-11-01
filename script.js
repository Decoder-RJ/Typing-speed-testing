// script.js
let timer;
let timeLeft = 60;
let isTestRunning = false;
let wordsTyped = 0;
let errorCount = 0;

const displayTextElement = document.getElementById("display-text");
const inputTextElement = document.getElementById("input-text");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const errorsElement = document.getElementById("errors");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const sampleTexts = ["The journey to success often begins with a single step. Every achievement, no matter how small, is a milestone worth celebrating. Persistence, patience, and hard work are the keys that unlock doors to new opportunities. In life, challenges will always be present, but it's how we choose to face them that defines our character. Embracing failures as lessons rather than setbacks can shift our perspective. Surrounding ourselves with positive influences can motivate us to keep pushing forward. The path may be difficult, but every effort brings us closer to our goals. Keep striving, and success will surely follow.",

    "Technology has transformed the way we live, work, and communicate. From smartphones to smart homes, advancements continue to make our lives easier and more connected. The internet has bridged gaps, allowing people from different parts of the world to interact seamlessly. Artificial intelligence and machine learning are now playing significant roles in various industries, enhancing productivity and efficiency. However, with rapid development comes the need for responsible use. Cybersecurity, data privacy, and ethical concerns must be addressed to ensure a safe digital environment. As technology evolves, it’s essential to adapt, learn, and innovate to stay ahead in this ever-changing landscape.",

    "Healthy living is about more than just diet and exercise; it's a lifestyle choice that encompasses mental, physical, and emotional well-being. Eating nutritious meals, staying active, and getting enough sleep are fundamental aspects. Additionally, managing stress and maintaining a positive mindset are equally important. Regular check-ups can help detect any health issues early, making them easier to manage. Hydration, balanced meals, and mindful eating habits contribute to overall wellness. Small changes, like taking the stairs instead of the elevator or choosing water over sugary drinks, can lead to significant improvements. Consistency is the key to a healthier, happier life.",

    "Traveling opens the mind to new experiences and broadens one's perspective. Exploring different cultures, tasting new foods, and learning about diverse traditions can be life-changing. Traveling doesn't always mean visiting far-off places; it can also be about discovering hidden gems in your own country or city. Each journey offers an opportunity to grow, learn, and reflect. It encourages adaptability, improves communication skills, and builds confidence. Whether it's a solo trip or a vacation with friends, the memories created are invaluable. Travel can be a way to escape routine, find inspiration, and return with a refreshed outlook on life.",

    "The world of books is vast and varied, offering something for everyone. From fiction to non-fiction, fantasy to biographies, each genre has its own charm. Reading helps expand vocabulary, improve comprehension, and stimulate the imagination. It can be a form of escapism, allowing readers to immerse themselves in different worlds. Books also serve as a source of knowledge, providing insights into history, science, and culture. In today's digital age, e-books and audiobooks have made reading more accessible than ever. Whether you prefer holding a physical book or reading on a tablet, the benefits of reading remain the same.",

    "Climate change is one of the most pressing issues of our time. Rising temperatures, melting glaciers, and unpredictable weather patterns are signs that the planet is under stress. Human activities, such as deforestation and the burning of fossil fuels, have accelerated this problem. It’s important for individuals, communities, and governments to take action. Reducing carbon footprints, supporting renewable energy, and conserving natural resources are steps in the right direction. Awareness and education can lead to more sustainable practices. The planet's future depends on how we act today, and every small effort counts toward preserving it for future generations.",

    "Education is the cornerstone of personal and societal development. It empowers individuals with knowledge, skills, and critical thinking abilities. Schools and universities provide a structured environment for learning, but education goes beyond formal institutions. Lifelong learning, through reading, online courses, and practical experiences, is equally valuable. The ability to adapt, solve problems, and communicate effectively is cultivated through continuous education. In a rapidly changing world, staying updated with new information and technologies is crucial. Investing in education not only benefits individuals but also contributes to the progress of communities and nations, fostering innovation, understanding, and growth.",

    "Music has the power to evoke emotions and bring people together. Different genres resonate with different moods, making music a universal language that transcends borders. Whether it's a soothing classical piece or an energetic rock song, music can influence emotions, inspire creativity, and even aid in relaxation. For many, playing an instrument or singing is a way of expressing themselves. Live concerts and music festivals are events where fans can connect and share their love for music. With streaming platforms, discovering new artists and genres has never been easier. Music is a constant companion, offering comfort and joy.",

    "Cooking is both an art and a science. It involves creativity, precision, and a deep understanding of flavors. Preparing meals at home allows people to control the ingredients, ensuring healthier and more nutritious dishes. Experimenting with new recipes can be a fun and rewarding experience. Whether it’s baking bread, grilling meat, or making a simple salad, cooking brings a sense of accomplishment. Sharing meals with family and friends strengthens bonds and creates lasting memories. Food is not just sustenance; it’s a way to celebrate culture, tradition, and diversity. Every dish tells a story, and every cook adds their touch.",

    "Sports teach valuable life lessons such as discipline, teamwork, and resilience. Participating in sports keeps the body active and the mind sharp. Whether it's team sports like soccer or individual activities like running, each sport offers unique benefits. Athletes learn to set goals, face challenges, and work hard to achieve success. Even for non-professional players, sports can be a great way to relieve stress and improve overall health. Watching sports brings communities together, fostering a sense of unity and pride. The thrill of competition, the joy of victory, and the lessons from defeat make sports an integral part of life.",

    "Mindfulness is about being present in the moment, aware of thoughts, feelings, and surroundings. It's a practice that can reduce stress, enhance focus, and improve mental health. Mindfulness can be integrated into daily activities, from eating to walking, by simply paying attention to the experience. Meditation is a popular way to cultivate mindfulness, helping individuals connect with themselves on a deeper level. In a world full of distractions, practicing mindfulness can lead to greater clarity and peace. It’s not about clearing the mind but rather acknowledging thoughts without judgment, allowing one to respond to situations with calm and patience.",

    "Gardening is a rewarding hobby that brings people closer to nature. Tending to plants, whether in a backyard or on a balcony, can be therapeutic. It requires patience, care, and an understanding of how different plants grow. Gardening can range from growing vegetables and herbs to cultivating flowers and ornamental plants. It’s a way to create a green space that offers a sense of tranquility. The satisfaction of watching a plant grow from a seed to a flourishing bloom is unmatched. Gardening also promotes sustainability by encouraging people to grow their food, reducing dependence on store-bought produce.",

    "Volunteering is a noble act that helps communities and individuals alike. It's an opportunity to give back, make a difference, and bring about positive change. Volunteering can take many forms, from helping at a local shelter to participating in environmental clean-up drives. It fosters empathy, understanding, and a sense of belonging. People who volunteer often report feeling more fulfilled, as they see the impact of their efforts firsthand. Moreover, it’s a way to acquire new skills, meet people, and broaden one’s perspective. The time and effort spent on volunteering can leave a lasting positive effect on society.",

    "Art has been a form of expression for centuries, capturing the essence of human emotions and experiences. It can take many forms, including painting, sculpture, photography, and digital media. Through art, people communicate ideas, tell stories, and express their innermost thoughts. For artists, creating is a way to explore their imagination and share their perspective with the world. Art galleries and exhibitions allow the public to experience and interpret these works in their way. In education, art encourages creativity and critical thinking. Supporting local artists can help preserve culture and promote diversity in the creative community.",

    "Writing is a powerful tool for communication. Whether it's fiction, poetry, essays, or articles, writing allows individuals to articulate their thoughts clearly and creatively. It’s an essential skill for academic and professional success, but it also offers personal fulfillment. Journaling, for instance, can help people process emotions and reflect on their experiences. In the digital age, blogs and social media platforms have given writers new avenues to share their work. Writing takes practice, and the more one writes, the better they become at conveying messages. For many, writing is not just a skill but a passion.",

    "Animals have always been an integral part of the ecosystem, playing vital roles in maintaining balance. From pollinators like bees to predators that control pest populations, each species contributes to the health of the environment. Domesticated animals, such as dogs and cats, offer companionship and unconditional love. Wildlife conservation efforts aim to protect endangered species from extinction and preserve biodiversity. Human activities have disrupted natural habitats, leading to the decline of many species. Protecting animals requires global cooperation and awareness. By supporting conservation programs, we can help ensure that future generations inherit a world rich in wildlife.",

    "JavaScript is a versatile language. It can be used for web development. Learning it opens new opportunities. Practice coding daily to improve skills. Keep pushing yourself to learn more."
];

function startTest() {
    if (isTestRunning) return;

    resetTest();
    isTestRunning = true;
    inputTextElement.disabled = false;
    inputTextElement.focus();
    displayTextElement.textContent = getRandomText();

    startBtn.disabled = true;
    resetBtn.disabled = false;
    startTimer();
}

function resetTest() {
    clearInterval(timer);
    timeLeft = 60;
    wordsTyped = 0;
    errorCount = 0;
    timerElement.textContent = `Remaining Time: ${timeLeft}s`;
    wpmElement.textContent = `WPM: 0`;
    errorsElement.textContent = `Errors: 0`;
    inputTextElement.value = "";
    inputTextElement.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    displayTextElement.innerHTML = "<p id='display-text' class='not-selectable'>Click 'Start Test' to begin typing...</p>";
    isTestRunning = false;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Remaining Time: ${timeLeft}s`;
        //calculateWPM();

        if (timeLeft === 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    isTestRunning = false;
    clearInterval(timer);
    inputTextElement.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
    calculateWPM();
}

function calculateWPM() {
    const inputText = inputTextElement.value.trim();
    const wordCount = inputText.split(/\s+/).filter(word => word).length - errorCount;
    const wpm = Math.round(wordCount / ((60 - timeLeft) / 60));
    wpmElement.textContent = `WPM: ${wpm < 0 ? 0 : wpm}`;
}

function getRandomText() {
    return sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
}

inputTextElement.oninput = function () {
    if (!isTestRunning) return;

    const targetText = displayTextElement.textContent.replace(/\n/g, " ").trim();
    const typedText = inputTextElement.value;

    errorCount = 0;
    let highlightedText = "";

    // Check each character
    for (let i = 0; i < targetText.length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === targetText[i]) {
                highlightedText += `<span style="color: green;">${targetText[i]}</span>`;
            } else {
                highlightedText += `<span style="color: red;">${targetText[i]}</span>`;
                errorCount++;
            }
        } else {
            highlightedText += targetText[i];
        }
    }

    errorsElement.textContent = `Errors: ${errorCount}`;
    displayTextElement.innerHTML = highlightedText;

    if (typedText === targetText) {
        endTest();
    }
};

startBtn.onclick = startTest;
resetBtn.onclick = resetTest;