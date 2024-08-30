    let level = 1
  
    const question = document.getElementById("question")
    const feedback = document.getElementsByClassName("feedback")
    const doors = document.getElementById("doors")
    let health = document.querySelector('.health')
    let healthVal = 100

    const dooropened = "<div id='openedoor'><svg width=\'120\' height=\'153\' viewBox=\'0 0 120 153\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'>\n" +
        "<path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M107.333 146.625H119.167V153H0.833252V146.625H12.6666V0H107.333V146.625ZM100.594 6.375H18.5833V146.625H101.21L36.3333 133.875V19.125L100.594 6.375ZM42.2499 24.4354V128.558L101.417 140.186V12.6926L42.2499 24.4354ZM59.9999 82.875H48.1666V76.5H59.9999V82.875Z\' fill=\'#01BAEF\'/>\n" +
        "</svg></div>\n";
    const dooropenedred = "<div id='openedoored'><svg width=\'120\' height=\'153\' viewBox=\'0 0 120 153\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'>\n" +
        "<path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M107.333 146.625H119.167V153H0.833252V146.625H12.6666V0H107.333V146.625ZM100.594 6.375H18.5833V146.625H101.21L36.3333 133.875V19.125L100.594 6.375ZM42.2499 24.4354V128.558L101.417 140.186V12.6926L42.2499 24.4354ZM59.9999 82.875H48.1666V76.5H59.9999V82.875Z\' fill=\'#B80C09\'/>\n" +
        "</svg></div>\n";
      //localStorage.removeItem('webDevQuiz')
(localStorage.getItem('webDevQuiz') === null)
    {
        const webDevQuiz = {
            
            theme: localStorage.getItem('theme') || 'light',
            questions: [

                // Level 1 - Beginner
                {
                    question: "What does HTML stand for?",
                    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinking Text Management Language"],
                    answer: "Hyper Text Markup Language",
                    wrongans: "Did you even try?",
                    level: 1,
                    index: 1
                },
                {
                    question: "Which HTML tag is used to create a paragraph?",
                    options: ["&lt;div&gt;", "&lt;p&gt;", "&lt;span&gt;", "&lt;paragraph&gt;"],
                    answer: "<p>",
                    wrongans: "You’ve set a new low.",
                    level: 1,
                    index: 2
                },
                {
                    question: "Which tag is used to display an image in HTML?",
                    options: ["&lt;picture&gt;", "&lt;img&gt;", "&lt;src&gt;", "&lt;media&gt;"],
                    answer: "<img>",
                    wrongans: "Even a dummy variable would’ve known this one.",
                    level: 1,
                    index: 3
                },
                {
                    question: "Which CSS property is used to set the text color of an element?",
                    options: ["font-color", "text-color", "color", "text-style"],
                    answer: "color",
                    wrongans: "If this were a life-or-death scenario, you’d be in a grave by now",
                    level: 1,
                    index: 4
                },
                // Level 2 - Easy
                {
                    question: "Which of the following is a correct way to include an external CSS file in HTML?",
                    options: ["&lt;style src='styles.css'&gt;", "&lt;link rel='stylesheet' href='styles.css'&gt;", "&lt;stylesheet link='styles.css'&gt;", "&lt;css href='styles.css'&gt;"],
                    answer: "<link rel=\'stylesheet\' href=\'styles.css\'>",
                    wrongans: "Oh Come On, Really?",
                    level: 2,
                    index: 1
                },
                {
                    question: "Which CSS property is used to make text bold?",
                    options: ["font-weight", "font-style", "font-bold", "text-weight"],
                    answer: "font-weight",
                    wrongans: "Your answer is so off, it might as well be a fatal error in your code of life.",
                    level: 2,
                    index: 2
                },
                {
                    question: "What is the purpose of the <head> tag in HTML?",
                    options: ["To display content on the page", "To link JavaScript files", "To store metadata and links to stylesheets", "To create navigation elements"],
                    answer: "To store metadata and links to stylesheets",
                    wrongans: "your answer is as useful as a syntax error.",
                    level: 2,
                    index: 3
                },
                {
                    question: "Which of the following units is relative to the font-size of the root element in CSS?",
                    options: ["em", "px", "rem", "%"],
                    answer: "rem",
                    wrongans: "Wrong answer. Did you forget to refresh your brain?",
                    level: 2,
                    index: 4
                },
                // Level 3 - Intermediate
                {
                    question: "Which CSS property is used to control the layout of elements on a webpage using a grid system?",
                    options: ["display: flex;", "display: grid;", "position: grid;", "layout: grid;"],
                    answer: "display: grid;",
                    wrongans: "You’ve failed harder than your last attempt at centering a div.",
                    level: 3,
                    index: 1
                },
                {
                    question: "In JavaScript, how do you declare a constant variable?",
                    options: ["var", "let", "const", "static"],
                    answer: "const",
                    wrongans: "Looks like your skill level is as undefined as your last variable.",
                    wrongdoor: "Bingo! You found the trap door. You might want to consider a new hobby, like knitting.",
                    level: 3,
                    index: 2
                },
                {
                    question: "Which CSS pseudo-class is used to apply styles when a user hovers over an element?",
                    options: [":focus", ":hover", ":active", ":visited"],
                    answer: ":hover",
                    wrongans: "Wrong answer. Did you forget to refresh your brain?",
                    wrongdoor: "Bingo! You found the trap door. You might want to consider a new hobby, like knitting.",
                    level: 3,
                    index: 3
                },
                {
                    question: "Which of the following is a valid way to select an element by its class in JavaScript?",
                    options: ["document.getElementById('.className')", "document.getElementsByClassName('className')", "document.SelectoByClassr('.className')", "document.select('.className')"],
                    answer: "document.getElementsByClassName('className')",
                    wrongans: "If wrong answers were an achievement, you'd be MVP.",
                    wrongdoor: "Bingo! You found the trap door. You might want to consider a new hobby, like knitting.",

                    level: 3,
                    index: 4
                },
                // Level 4 - Advanced
                {
                    question: "What does the `position: sticky;` CSS property do?",
                    options: ["Keeps the element fixed at the top of the viewport", "Keeps the element in the same position within its container", "Makes the element switch between `relative` and `fixed` positioning based on scroll", "Fixes the element to a specific part of the screen"],
                    answer: "Makes the element switch between `relative` and `fixed` positioning based on scroll",
                    wrongans: "Nice try! Just kidding, that was painful to watch.",
                    wrongdoor: "Well, that was as expected. You're really mastering the art of wrong choices.",
                    level: 4,
                    index: 1
                },
                {
                    question: "How do you prevent an event from bubbling up the DOM tree in JavaScript?",
                    options: ["event.preventDefault()", "event.stopPropagation()", "event.cancelBubble = true", "event.stopImmediatePropagation()"],
                    answer: "event.stopPropagation()",
                    wrongans: "That was as painful as debugging without a console",
                    level: 4,
                    index: 2
                },
                {
                    question: "What is the difference between `visibility: hidden;` and `display: none;` in CSS?",
                    options: ["visibility: hidden; hides the element and frees up space, display: none; hides the element but keeps its space", "Both hide the element but do not affect layout", "visibility: hidden; hides the element but keeps its space, display: none; removes the element from the layout", "They are identical; both hide the element and remove it from the layout"],
                    answer: "visibility: hidden; hides the element but keeps its space, display: none; removes the element from the layout",
                    wrongans: "That attempt was as useful as a semicolon in Python.",
                    wrongdoor: "Bingo! You found the trap door. You might want to consider a new hobby, like knitting.",
                    level: 4,
                    index: 3
                },
                {
                    question: "Which JavaScript function is used to parse a JSON string into an object?",
                    options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.objectify()"],
                    answer: "JSON.parse()",
                    wrongans: "Wrong answer. Did you forget to refresh your brain?",
                    wrongdoor: "You picked the loser door.",

                    level: 4,
                    index: 4
                },
                // Level 5 - Expert
                {
                    question: "In JavaScript, what will `console.log([] + {})` output?",
                    options: ["[]", "[object Object]", "NaN", "undefined"],
                    answer: "[object Object]",
                    wrongans: "Wrong answer. Did you forget to refresh your brain?",
                    wrongdoor: "Amazing job! You fell straight through the trap door. It’s like you have a built-in radar for disaster.",
                    level: 5,
                    win: "Amazing work! If only writing code was this easy, right?",
                    index: 1
                },
                {
                    question: "What does the `z-index` property control in CSS?",
                    options: ["The horizontal stacking order of elements", "The vertical stacking order of elements", "The rotation of elements on the Z-axis", "The opacity of elements based on their layer"],
                    answer: "The vertical stacking order of elements",
                    wrongans: "You almost won. Almost is for losers",
                    wrongdoor: "Brilliant move! The trap door was just waiting for someone with your talent to find it.",
                    win: "You’ve won! And with this newfound glory comes... absolutely nothing. Enjoy!",
                    level: 5,
                    index: 2
                },
                {
                    question: "Which HTTP header is used to prevent clickjacking attacks?",
                    options: ["X-Frame-Options", "Content-Security-Policy", "Strict-Transport-Security", "X-XSS-Protection"],
                    answer: "X-Frame-Options",
                    wrongans: "Congratulations on almost succeeding. The key word is ‘almost’",
                    wrongdoor: "Nice pick! The trap door is exactly what you wanted, right? Such an overachiever.",
                    win: "Well done! If only your code could compile as flawlessly as your answers.",
                    level: 5,
                    index: 3
                },
                {
                    question: "In the CSS Grid layout, what does `grid-template-areas` do?",
                    options: ["Defines the size of grid items", "Specifies named grid areas for layout", "Aligns items within grid cells", "Controls the spacing between grid items"],
                    answer: "Specifies named grid areas for layout",
                    wrongans: "Near victory. Total failure.",
                    wrongdoor: "Nice work! You’ve chosen the door of doom.",
                    win: "Good Job! Now return to that CSS grid that refuses to center anything.",
                    level: 5,
                    index: 4
                }
            ]
        }

// Step 2: Save to Local Storage

        localStorage.setItem('webDevQuiz', JSON.stringify(webDevQuiz));
    }
// Retrieve quiz data from localStorage
    const webDevQuiz2 = JSON.parse(localStorage.getItem('webDevQuiz'));


// Function to set and change the theme
    function setTheme(theme) {
        webDevQuiz2.theme = theme;  // Update the theme in the quiz object
        localStorage.setItem('theme', theme);  // Save the theme to localStorage
        document.body.className = theme;  // Apply the theme to the body element

        // Apply the theme change to the logo
        changetheme();
    }

// Load and apply the theme when the game starts
 
    document.body.className = webDevQuiz2.theme;  // Apply the saved or default theme
    changetheme();  // Ensure the logo reflects the initial theme
 

// Function to toggle themes and update logo style
    function toggleTheme() {
        const newTheme = webDevQuiz2.theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);  // Update the theme and apply changes
        return newTheme;
    }

// Function to change the logo style based on the current theme
    function changetheme() {
        const logo = document.getElementById('logo');
        const body = document.body;


        // Apply different styles based on the current theme
        if (webDevQuiz2.theme === 'light') {
            logo.style.transform = 'rotate(-90deg)';
            logo.style.fill = '#080808';  // Light theme color
            body.className = 'light-theme'
        } else {
            logo.style.transform = 'rotate(90deg)';
            logo.style.fill = '#FFD700';  // Dark theme color
            body.className = 'dark-theme'

        }

        // Add smooth transition effect
        logo.style.transition = 'transform 0.5s ease, fill 0.5s ease';
    }


    if (!webDevQuiz2) {
        console.error('No quiz data found in localStorage');
    }
    let currentLevel = 1;
    let currentQuestionIndex = -1;

// Function to get questions by level
    function getQuestionsByLevel(level) {

        const randomIndex = Math.ceil(Math.random() * 4);

        return questionsAtLevel = webDevQuiz2.questions.filter(question => question.level === level && question.index == randomIndex);
    }

// Function to display a question
    function displayQuestion(question) {

        $("#options-list").empty()
        $('#question-text').empty()

        $('#question-text').text(question.question);
        $('#options-list').html(
            question.options.map(option => `<li><input type="radio" name="option" value="${option}"> ${option}</li>`).join('')
        );
        currq = question
        $('input[type="radio"][name="option"]').on('change', function () {
            // Get the value of the selected radio button
            var selectedValue = $(this).val();

            // Optionally, you could trigger other functions here
            if (selectedValue === question.answer) {
                $('#feedback').text('Choose a door').css('color', 'green');
                checkdoors()
            } else if (selectedValue != question.answer) {
                $('#life').text(`Life:${0}`)

                gameover(question.wrongans, document.getElementById('timer').value)

            }
        });

    }

    let trapdoorClicks = 5; // Global variable to keep track of the number of trapdoor clicks

    function checkdoors() {
        $('.door').off('click').on('click', function () {
            const clickedDoor = $(this).attr('id');

            if (clickedDoor.startsWith('trapdoor')) {
                trapdoorClicks--;// decrement the trapdoor click count
                $('#life').text(`Life:${trapdoorClicks}`)

                if (trapdoorClicks === 0) {
                    // End the game after the second trapdoor
                    $(this).html(dooropenedred);
                    gameover(currq.wrongdoor, document.getElementById('timer').value);
                } else {
                    // Show the trapdoor as opened but continue the game
                    $(this).html(dooropenedred);
                    $('#feedback').text(currq.wrongdoor).css('color', 'red');
                }
            } else {
                // Handle correct door: proceed to next level or question
                $('#feedback').empty(); // Clear feedback (if needed)
                level++;
                currentLevel++;

                if (level > 5) {
                    youWin(currq.win); // Trigger win condition
                } else {
                    showNextQuestion(); // Show the next question
                }
            }
        });
    }

    var currq;

    function gameover(message, timeup) {

        $('.questionpage').hide(100)
        $('.doors').empty()
        $('.question-text').empty()
        $('#options-list').empty()
        $('.gameresult').empty();
      
        clearInterval(countdown)
     
       
        if (timeup === 0) {
            alert("game overt")
            $('.gameresult').append('<h2>Too slow! Did you forget to optimize... your thinking?</h2>')

        } else {
           
            var messageElement = $('<h2 style="margin-left: 0%; text-align: center" id="h2">').text(message);
            $('.gameresult').append(messageElement)
            $('.gameresult').append(" <h2 id='gameover' style=' font-size: 12vh; text-align: center;margin-left: 0%; color: red'>Game Over</h2>")
        }
        $('.gameresult').append("<br><br><br><button id='mmenu' style='background-color: rgba(255,69,0,0.66)' onclick='showmenu()'>Main Menu</button>")
        $('.gameresult').show()


    }

    function youWin(message) {
        // Create the message and winner elements with adjusted styles for reduced gaps
        let messagelem = $('<h2 style="margin-left: 20vw; ;text-align: center; font-size: 2vw; margin: 0;" id="h2"> <br>').text(message);
        let winner = $('<h2 style="margin-left: 28vw; text-align: center; font-size: 5vw;; margin: 0;" id="h2"> ').text('😒');

        // Hide the question page and clear the current question
        $('.questionpage').hide(100);
        clearInterval(countdown);
        $('.question').empty();

        // Append the new elements and the button to the game result container
        $('.gameresult').append(winner).append(messagelem);
        $('.gameresult').append("<button id='mmenu' style='margin-left: 35vw; height: 10%; font-size: 1.5vw;' onclick='showmenu()'>Main Menu</button>");
    }

   

    function showNextQuestion() {
        $('#life').text(`Life:${trapdoorClicks}`)

        if (level > 5) {
        
            youWin()
        } else {
            createDoors()
            const questions = getQuestionsByLevel(currentLevel);

            if (questions.length === 0) {
                console.log('No more questions available for this level.');
                return;
            }

            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            const question = questions[currentQuestionIndex];
            displayQuestion(question);
        }
    }


    function startGame() {

        $("#menu").hide(300, function () {
            $('#life').show()
           

            // setTimeout()
            startQuizTimer(80, document.getElementById('timer'))

            addquestions()

// Show doors after 2 seconds


        });


    }

    var countdown;

    function startQuizTimer(duration, display) {
        var timer = duration;
        var minutes;
        var seconds;

        // Update the countdown every second
        countdown = setInterval(function () {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            // Add leading zero if the value is less than 10
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            // Timer stops when it reaches zero
            if (--timer < 0) {
                clearInterval(countdown);
                //alert("Time's up!");
                // Add code here to handle what happens when the timer runs out (e.g., submit quiz automatically)
                gameover(currq, 0)
                return;
            }
        }, 1000); // Interval should be 1000 ms (1 second)
    }


    function addquestions() {

        $(".questionpage").show(300, 'zoom')

        showNextQuestion();
    }

    function createDoors() {
        $('.doors').empty(); // Clear previous doors

        let totalDoors = level;
        let trapDoorsCount = 0;
        let trapDoorsIndices = [];

        // Only create trap doors for levels higher than 1
        if (level > 2) {
            trapDoorsCount = Math.ceil(totalDoors * 0.75); // 75% of the doors should be traps

            // Randomly select unique indices for trap doors
            while (trapDoorsIndices.length < trapDoorsCount) {
                const randomIndex = Math.floor(Math.random() * totalDoors);
                if (!trapDoorsIndices.includes(randomIndex)) {
                    trapDoorsIndices.push(randomIndex);
                }
            }

            // Ensure at least one door is not a trap door
            if (trapDoorsIndices.length === totalDoors) {
                // Remove one random trap door to ensure there's at least one normal door
                const indexToRemove = Math.floor(Math.random() * trapDoorsIndices.length);
                trapDoorsIndices.splice(indexToRemove, 1);
            }
        }

        for (let i = 0; i < totalDoors; i++) {
            // Check if this door is a trap door
            const doorId = trapDoorsIndices.includes(i) ? `trapdoor${i}` : `closedoor${i}`;

            // Create the door element using template literals
            const doorHtml = `
            <div id="${doorId}" class="door">
                <svg width="120" height="153" viewBox="0 0 120 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M107.333 146.625H119.167V153H0.833252V146.625H12.6666V0H107.333V146.625ZM101.417 6.375H18.5833V146.625H101.417V6.375ZM42.2499 76.5V82.875H24.4999V76.5H42.2499Z" fill="#01BAEF"/>
                </svg>
            </div>`;

            // Append the door to the container
            $('.doors').append(doorHtml);
        }
    }

    function aboutThisGame() {
        // Hide the main menu and show the About section
        $("#menu").hide(1);
        $('#head').hide()
        $("#aboutGame").show(100);
    }

    function showmenu() {

        location.reload(true);
    }

    function showConfirmation() {
        $("#menu").hide(300)
        $('#head').hide()
        document.getElementById('confirmationDialog').style.display = 'block';
    }

// Function to handle the "Yes" button click
    function confirmQuit() {
        // Implement your quitting logic here, for now, we'll just log a message
        window.close()
    }

// Function to handle the "No" button click
    function cancelQuit() {
        location.reload(true)
        document.getElementById('confirmationDialog').style.display = 'none';

    }
