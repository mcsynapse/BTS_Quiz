/* -----------------------------------------------------------------------------
ॐ नमो भगवते वासुदेवाय नमः|ॐ श्री महा कालिकायै नमः|ॐ नमः शिवाय
With the blessings of Almighty.
With the blessing of my mom and dad.
Thanks to my sister.
Project: [BTS Quiz]
File: [style.css]

Author: Mayukh Choudhury
Date Created: 08/07/2024 [MM/DD/YYYY]
Last Modified: 09/29/2024 [MM/DD/YYYY]
Copyright © 2024 Mayukh Choudhury

Special thanks to my ARMY friends: Rimila Ghosh and Rudraggi Singha.

This code is the property of Mayukh Choudhury.
Licensed under: [License Type MIT]
----------------------------------------------------------------------------- */

// Array of 100 questions
const questions = [
    {
        question: "What year did BTS debut?",
        options: ["2012", "2013", "2014", "2015"],
        correct: 1
        },
        
        {
        question: "Which entertainment company formed BTS?",
        options: ["SM Entertainment", "YG Entertainment", "Big Hit Entertainment", "JYP Entertainment"],
        correct: 2
        },
        
        {
        question: "Who is the leader of BTS?",
        options: ["Jin", "V", "RM", "Suga"],
        correct: 2
        },
        
        {
        question: "Which member is known as the \"Golden Maknae\"?",
        options: ["Jungkook", "Jimin", "V", "Suga"],
        correct: 0
        },
        
        {
        question: "Which BTS member is the oldest?",
        options: ["J-Hope", "Suga", "Jin", "RM"],
        correct: 2
        },
        
        {
        question: "What was BTS's debut song?",
        options: ["I Need U", "No More Dream", "Boy In Luv", "Fire"],
        correct: 1
        },
        
        {
        question: "Which BTS album won them their first Daesang (Grand Prize)?",
        options: ["Wings", "The Most Beautiful Moment in Life: Young Forever", "Love Yourself: Tear", "Map of the Soul: Persona"],
        correct: 1
        },
        
        {
        question: "What is BTS's official fan club name?",
        options: ["Carat", "Once", "EXO-L", "ARMY"],
        correct: 3
        },
        
        {
        question: "Which member released the mixtape \"Agust D\"?",
        options: ["RM", "Suga", "J-Hope", "Jungkook"],
        correct: 1
        },
        
        {
        question: "In which year did BTS win their first Billboard Music Award?",
        options: ["2016", "2017", "2018", "2019"],
        correct: 1
        },
        
        {
        question: "Which member is known for their deep voice and \"boxy smile\"?",
        options: ["J-Hope", "RM", "V", "Jin"],
        correct: 2
        },
        
        {
        question: "What is BTS's official lightstick called?",
        options: ["Bomb", "Bong", "Army Bomb", "Bang Bong"],
        correct: 2
        },
        
        {
        question: "Which member of BTS was a street dancer before joining the group?",
        options: ["Jimin", "J-Hope", "RM", "Jin"],
        correct: 1
        },
        
        {
        question: "Which song gave BTS their first number 1 on the Billboard Hot 100 chart?",
        options: ["Fake Love", "DNA", "Boy With Luv", "Dynamite"],
        correct: 3
        },
        
        {
        question: "What is the name of BTS's 2021 single with Coldplay?",
        options: ["Butter", "Permission to Dance", "My Universe", "Life Goes On"],
        correct: 2
        },
        
        {
        question: "Which BTS member is the main vocalist?",
        options: ["Jin", "Jungkook", "V", "Jimin"],
        correct: 1
        },
        
        {
        question: "Which album contains the song \"Spring Day\"?",
        options: ["Love Yourself: Her", "Wings", "You Never Walk Alone", "Map of the Soul: 7"],
        correct: 2
        },
        
        {
        question: "BTS's first Grammy nomination was for which category?",
        options: ["Best Pop Duo/Group Performance", "Best New Artist", "Album of the Year", "Song of the Year"],
        correct: 0
        },
        
        {
        question: "Which BTS member is known for his love of snowboarding?",
        options: ["RM", "Jin", "Suga", "V"],
        correct: 3
        },
        
        {
        question: "Who is the shortest member of BTS?",
        options: ["Suga", "Jimin", "V", "Jungkook"],
        correct: 1
        },
        
        {
        question: "Which song marked BTS's collaboration with American singer Halsey?",
        options: ["Idol", "Fake Love", "Boy With Luv", "Mic Drop"],
        correct: 2
        },
        
        {
        question: "Which member once worked at a cafe before joining BTS?",
        options: ["RM", "Jin", "Suga", "J-Hope"],
        correct: 1
        },
        
        {
        question: "Which of these songs is not a title track of BTS?",
        options: ["Idol", "Boy In Luv", "Black Swan", "Just One Day"],
        correct: 3
        },
        
        {
        question: "What does BTS stand for in English?",
        options: ["Beyond the Scene", "Born to Shine", "Behind the Screen", "Best of the South"],
        correct: 0
        },
        
        {
        question: "Who is known as the \"worldwide handsome\"?",
        options: ["Jungkook", "RM", "Jin", "Suga"],
        correct: 2
        },
        
        {
        question: "Which BTS song has the lyrics \"I'm so sick of this fake love\"?",
        options: ["Fake Love", "DNA", "Fire", "Blood Sweat & Tears"],
        correct: 0
        },
        
        {
        question: "Which member studied contemporary dance in high school?",
        options: ["V", "Jimin", "Jungkook", "Suga"],
        correct: 1
        },
        
        {
        question: "Which song did BTS perform at the 2021 Grammy Awards?",
        options: ["Dynamite", "Butter", "ON", "Boy With Luv"],
        correct: 0
        },
        
        {
        question: "Which BTS member has acted in a K-drama called \"Hwarang\"?",
        options: ["Jin", "RM", "J-Hope", "V"],
        correct: 3
        },
        
        {
        question: "Which of these songs was a BTS Japanese release?",
        options: ["Lights", "Boy With Luv", "Black Swan", "Fire"],
        correct: 0
        },
        
        {
        question: "Which member is known for his love of cooking?",
        options: ["Jin", "J-Hope", "RM", "Suga"],
        correct: 0
        },
        
        {
        question: "Which song did BTS release to mark the end of 2020?",
        options: ["Life Goes On", "Dynamite", "Fly To My Room", "Stay"],
        correct: 0
        },
        
        {
        question: "Which member of BTS has a pet dog named Yeontan?",
        options: ["V", "Jimin", "Jungkook", "RM"],
        correct: 0
        },
        
        {
        question: "What is the title of BTS's first English-language single?",
        options: ["DNA", "Mic Drop", "Dynamite", "Boy With Luv"],
        correct: 2
        },
        
        {
        question: "What is the color of BTS's official fandom?",
        options: ["Blue", "Purple", "Black", "Pink"],
        correct: 1
        },
        
        {
        question: "Which BTS album features the song \"Blood Sweat & Tears\"?",
        options: ["Wings", "Love Yourself: Tear", "Map of the Soul: Persona", "BE"],
        correct: 0
        },
        
        {
        question: "Who is the rapper in BTS who learned English by watching the TV show \"Friends\"?",
        options: ["RM", "Suga", "J-Hope", "Jungkook"],
        correct: 0
        },
        
        {
        question: "What year did BTS receive their first Grammy nomination?",
        options: ["2019", "2020", "2021", "2022"],
        correct: 1
        },
        
        {
        question: "Which BTS music video was the first to hit 1 billion views on YouTube?",
        options: ["DNA", "Boy With Luv", "Mic Drop", "Idol"],
        correct: 0
        },
        
        {
        question: "Which BTS member is known for being the \"mood-maker\" of the group?",
        options: ["J-Hope", "V", "Jin", "Suga"],
        correct: 0
        },
        
        {
        question: "In 2020, which song became BTS's first to be nominated for a Grammy Award?",
        options: ["Butter", "Dynamite", "On", "Life Goes On"],
        correct: 1
        },
        
        {
        question: "Which member has the BT21 character named \"Tata\"?",
        options: ["RM", "Jin", "J-Hope", "V"],
        correct: 3
        },
        
        {
        question: "Which BTS song is featured on the soundtrack of the 2017 movie Justice League?",
        options: ["Mic Drop", "Save Me", "Fire", "Not Today"],
        correct: 0
        },
        
        {
        question: "Which BTS album introduced the \"Love Yourself\" series?",
        options: ["Love Yourself: Tear", "Love Yourself: Her", "Love Yourself: Answer", "Love Yourself: Wonder"],
        correct: 1
        },
        
        {
        question: "Which member is often referred to as \"Kookie\"?",
        options: ["Jimin", "Jungkook", "Jin", "RM"],
        correct: 1
        },
        
        {
        question: "In which year did BTS become ambassadors for UNICEF's #ENDviolence campaign?",
        options: ["2016", "2017", "2018", "2019"],
        correct: 1
        },
        
        {
        question: "What was the name of BTS's 2020 global online concert?",
        options: ["Map of the Soul ON", "Speak Yourself", "Permission to Dance", "Bang Bang Con"],
        correct: 0
        },
        
        {
        question: "Which BTS song has the line \"La la la la la la\"?",
        options: ["Boy With Luv", "Dynamite", "Idol", "Butter"],
        correct: 1
        },
        
        {
        question: "Which BTS member's real name is Kim Nam-joon?",
        options: ["Jin", "RM", "Suga", "J-Hope"],
        correct: 1
        },
        
        {
        question: "Which member of BTS is known for his passion for photography?",
        options: ["J-Hope", "RM", "V", "Jin"],
        correct: 2
        },
        
        {
        question: "Which BTS song was released as a special single for ARMY on their 2021 FESTA?",
        options: ["Stay", "Butter", "We Are Bulletproof: The Eternal", "Still With You"],
        correct: 3
        },
        
        {
        question: "Which BTS album contains the song \"Airplane Pt. 2\"?",
        options: ["Love Yourself: Tear", "Love Yourself: Answer", "Wings", "Map of the Soul: Persona"],
        correct: 0
        },
        
        {
        question: "Which BTS song features the lyrics \"Shining through the city with a little funk and soul\"?",
        options: ["Fire", "Idol", "Butter", "Dynamite"],
        correct: 3
        },
        
        {
        question: "Which BTS member was the first to release a solo mixtape?",
        options: ["RM", "J-Hope", "Suga", "Jungkook"],
        correct: 0
        },
        
        {
        question: "What was BTS’s first Korean song to hit number 1 on the Billboard Hot 100?",
        options: ["Life Goes On", "DNA", "Idol", "On"],
        correct: 0
        },
        
        {
        question: "Which BTS song was inspired by Greek mythology?",
        options: ["ON", "Blood Sweat & Tears", "Dionysus", "Run"],
        correct: 2
        },
        
        {
        question: "Which BTS member said they would have become a farmer if not in the group?",
        options: ["RM", "Jin", "J-Hope", "V"],
        correct: 3
        },
        
        {
        question: "Which BTS song contains the iconic phrase \"I’m diamond, you know I glow up\"?",
        options: ["Idol", "Butter", "DNA", "Dynamite"],
        correct: 1
        },
        
        {
        question: "In 2021, BTS performed which Coldplay cover at the Global Citizen Live concert?",
        options: ["Yellow", "Fix You", "Paradise", "Viva La Vida"],
        correct: 1
        },
        
        {
        question: "Which member of BTS had a part-time job delivering newspapers as a kid?",
        options: ["Suga", "J-Hope", "RM", "Jin"],
        correct: 0
        },
        
        {
        question: "Which member is known for having an interest in art and fine arts?",
        options: ["RM", "Jimin", "Suga", "Jungkook"],
        correct: 0
        },
        
        {
        question: "Which BTS album includes the song \"Go Go\"?",
        options: ["Map of the Soul: 7", "Love Yourself: Her", "Love Yourself: Answer", "Wings"],
        correct: 1
        },
        
        {
        question: "What is the name of Jungkook's dog?",
        options: ["Yeontan", "Holly", "Bam", "Gureum"],
        correct: 2
        },
        
        {
        question: "Which song did BTS perform on The Late Late Show with James Corden in 2020?",
        options: ["Boy With Luv", "ON", "Dynamite", "Black Swan"],
        correct: 3
        },
        
        {
        question: "Which member was a trainee for the longest period before debuting with BTS?",
        options: ["Suga", "J-Hope", "RM", "Jungkook"],
        correct: 2
        },
        
        {
        question: "Which BTS song is known for its \"euphoria\"-themed music video?",
        options: ["Save Me", "Run", "Euphoria", "I Need U"],
        correct: 2
        },
        
        {
        question: "Which BTS member was born in Daegu, South Korea?",
        options: ["Jimin", "V", "RM", "Suga"],
        correct: 3
        },
        
        {
        question: "Which BTS album is known for starting the \"Map of the Soul\" series?",
        options: ["Map of the Soul: 7", "Map of the Soul: Persona", "Love Yourself: Tear", "Map of the Soul: Shadow"],
        correct: 1
        },
        
        {
        question: "Who was the first BTS member to release a full-length solo album?",
        options: ["J-Hope", "RM", "Suga", "Jungkook"],
        correct: 0
        },
        
        {
        question: "Which member has a studio called \"Hope World\"?",
        options: ["RM", "J-Hope", "Suga", "Jungkook"],
        correct: 1
        },
        
        {
        question: "Which song was part of the BTS World OST?",
        options: ["All Night", "Butterfly", "Anpanman", "Mic Drop"],
        correct: 0
        },
        
        {
        question: "What is the full name of BTS member V?",
        options: ["Kim Taehyung", "Kim Seokjin", "Min Yoongi", "Jung Hoseok"],
        correct: 0
        },
        
        {
        question: "Which BTS song includes the lyrics \"My hands carry ‘em\"?",
        options: ["Mic Drop", "Fire", "Idol", "Run"],
        correct: 0
        },
        
        {
        question: "Which BTS song has a traditional Korean instrumental break in its performance version?",
        options: ["Boy In Luv", "Blood Sweat & Tears", "Idol", "Fire"],
        correct: 2
        },
        
        {
        question: "Which BTS member is often nicknamed “Worldwide Dancer”?",
        options: ["Jimin", "J-Hope", "Jungkook", "RM"],
        correct: 1
        },
        
        {
        question: "Which member once mentioned that their dream as a child was to become a saxophonist?",
        options: ["Jin", "J-Hope", "V", "Suga"],
        correct: 2
        },
        
        {
        question: "Which BTS song won them their first Daesang (Grand Prize) at the Mnet Asian Music Awards (MAMA)?",
        options: ["I Need U", "Dope", "Fire", "Run"],
        correct: 0
        },
        
        {
        question: "Which BTS member is referred to as \"Lil Meow Meow\" by fans?",
        options: ["Suga", "Jimin", "V", "RM"],
        correct: 0
        },
        
        {
        question: "Which member produced the track \"Tomorrow\" from the Skool Luv Affair album?",
        options: ["Suga", "RM", "J-Hope", "Jungkook"],
        correct: 0
        },
        
        {
        question: "Which BTS member had the first solo stage at the Billboard Music Awards?",
        options: ["RM", "V", "Jungkook", "Jimin"],
        correct: 2
        },
        
        {
        question: "What is the name of BTS’s online variety show?",
        options: ["BTS House", "Run BTS!", "Bon Voyage", "BTS Live"],
        correct: 1
        },
        
        {
        question: "Which BTS song is about chasing dreams and rising to the top?",
        options: ["Run", "No More Dream", "Anpanman", "Save Me"],
        correct: 1
        },
        
        {
        question: "Which member was in charge of the choreography for the dance break in \"Blood Sweat & Tears\"?",
        options: ["RM", "J-Hope", "Jimin", "Jungkook"],
        correct: 1
        },
        
        {
        question: "In which year did BTS launch their first official YouTube series?",
        options: ["2015", "2016", "2017", "2018"],
        correct: 0
        },
        
        {
        question: "Which song was part of BTS’s first full Japanese album Wake Up?",
        options: ["Danger", "No More Dream", "Wake Up", "Fire"],
        correct: 0
        },
        
        {
        question: "What was the name of BTS’s world tour that started in 2019?",
        options: ["Love Yourself: Speak Yourself", "Wings Tour", "Map of the Soul Tour", "BTS World Tour"],
        correct: 0
        },
        
        {
        question: "Which BTS member composed the song \"Spring Day\"?",
        options: ["J-Hope", "Suga", "RM", "V"],
        correct: 1
        },
        
        {
        question: "Which BTS member is often referred to as “God of Destruction” due to clumsiness?",
        options: ["J-Hope", "V", "Jungkook", "RM"],
        correct: 3
        },
        
        {
        question: "What was BTS’s first song to surpass 300 million streams on Spotify?",
        options: ["Blood Sweat & Tears", "DNA", "Fake Love", "Boy With Luv"],
        correct: 1
        },
        
        {
        question: "Which BTS member participated in producing the track \"Outro: Tear\"?",
        options: ["RM", "Suga", "J-Hope", "Jungkook"],
        correct: 0
        },
        
        {
        question: "Which member’s signature color is blue?",
        options: ["Jin", "V", "RM", "Jimin"],
        correct: 2
        },
        
        {
        question: "Which BTS song was inspired by Carl Jung's theory of psychology?",
        options: ["ON", "Blood Sweat & Tears", "Interlude: Shadow", "Persona"],
        correct: 3
        },
        
        {
        question: "Which BTS song was featured in the Samsung Galaxy S20 advertisement?",
        options: ["ON", "DNA", "Fake Love", "Idol"],
        correct: 0
        },
        
        {
        question: "Which BTS song includes the lyrics \"I’m diamond, you know I glow up\"?",
        options: ["Dynamite", "Fire", "Idol", "Boy With Luv"],
        correct: 0
        },
        
        {
        question: "Which member of BTS has the BT21 character “Shooky”?",
        options: ["Suga", "RM", "J-Hope", "Jin"],
        correct: 0
        },
        
        {
        question: "In 2020, which BTS song became the first Korean song to debut at No.1 on Billboard Hot 100?",
        options: ["Dynamite", "Life Goes On", "Butter", "Fake Love"],
        correct: 1
        },
        
        {
        question: "What is the main theme of BTS’s \"Blood Sweat & Tears\"?",
        options: ["Youth", "Love and Temptation", "Friendship", "Success"],
        correct: 1
        },
        
        {
        question: "Which BTS song was part of their partnership with Hyundai for the \"Global Goal Live\" campaign?",
        options: ["Idol", "Dionysus", "A Brand New Day", "MIC Drop"],
        correct: 1
        },
        
        {
        question: "Which member has released a mixtape called \“D-2\”?",
        options: ["Suga", "RM", "Jungkook", "Jin"],
        correct: 0
        },
        
        {
        question: "Which BTS song includes the lyric \"Like an echo in the forest\"?",
        options: ["Life Goes On", "Spring Day", "ON", "Stay"],
        correct: 0
        }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let score = 0;

// Shuffle questions and select 25
function selectRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 25);
}

// Load the question into the HTML
function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.onclick = () => selectOption(index);

        // Highlight the selected option
        if (selectedAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }

        optionsContainer.appendChild(button);
    });

    // Enable or disable navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;

    // Update the "Next" button text and functionality
    const nextButton = document.getElementById('next-btn');
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextButton.textContent = "Finish";
        nextButton.onclick = showResults;
    } else {
        nextButton.textContent = "Next";
        nextButton.onclick = nextQuestion;
    }
}

// Handle option selection
function selectOption(index) {
    selectedAnswers[currentQuestionIndex] = index;
    loadQuestion();
}

// Navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Calculate score and show results
function showResults() {
    let calculatedScore = 0;  // Use a local variable for score calculation
    let resultHtml = `
        <div class="result-container">
            <h2>Your Results</h2>
            <ul class="result-list">`;

    selectedQuestions.forEach((question, index) => {
        const isCorrect = selectedAnswers[index] === question.correct;
        if (isCorrect) {
            calculatedScore++;
        }
        resultHtml += `
            <li class="${isCorrect ? 'correct' : 'wrong'}">
                <span class="question-text">${question.question}</span>
                <span class="answer-text">${isCorrect ? 'Correct' : `Wrong (Correct: ${question.options[question.correct]})`}</span>
            </li>`;
    });

    // Adding the final score message and the image based on score
    let scoreMessage = '';
    let imageUrl = '';

    if (calculatedScore > 15) {
        scoreMessage = "You have excellent knowledge.";
        imageUrl = "godd.jpg";
    } else if (calculatedScore > 7) {
        scoreMessage = "You have a decent knowledge.";
        imageUrl = "decent.webp";
    } else {
        scoreMessage = "You have poor knowledge. Better luck Next time.";
        imageUrl = "poor.webp"; 
    }

    resultHtml += `
            </ul>
            <p class="final-score">Your Score: ${calculatedScore} / 25</p>
            <p class="final-message" style="font-family: 'Quicksand', sans-serif;">${scoreMessage}</p>
            <img src="${imageUrl}" alt="Score Image" class="score-image">
        </div>`;
    
    document.getElementById('quiz-container').innerHTML = resultHtml;
}




// Initialize the quiz
function initQuiz() {
    selectRandomQuestions();
    loadQuestion();
    document.getElementById('prev-btn').onclick = prevQuestion;
}

initQuiz();
