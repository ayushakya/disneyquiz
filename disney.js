var myQuestions = [
    {
        question: "1. What does Hakuna Matata mean?",
        answers: {
            a: 'No worries',
            b: 'Enjoy life',
            c: 'Safe Journey',
            d: 'God Bless'
        },
        correctAnswer: 'a'
    },
    {
        question: "2. How many fingers does Mickey Mouse have?",
        answers: {
            a: '3',
            b: '5',
            c: '4',
            d: '6'
        },
        correctAnswer: 'c'
    },
    {
        question: '3. What was the first Pixar movie?',
        answers: {
            a: 'Incredibles',
            b: 'Toy Story',
            c: 'Fantasia',
            d: 'Cars'
        },
        correctAnswer: 'b'
    },
    {
        question: '4. What was Nemo\'s mother\'s name?',
        answers: {
            a: 'Neymar',
            b: 'Cecilia',
            c: 'Coral',
            d: 'Karen'
        },
        correctAnswer: 'c'
    },
    {
        question: '5. Who was Experiment 626?',
        answers: {
            a: 'Stitch',
            b: 'Woody',
            c: 'Donald Duck',
            d: 'Tarzan'
        },
        correctAnswer: 'a'
    },
    {
        question: '6. What is the name of Sleeping Beauty\'s Prince?',
        answers: {
            a: 'Prince William',
            b: 'Prince Harry',
            c: 'Prince Charles',
            d: 'Prince Phillip'
        },
        correctAnswer: 'd'
    },
    {
        question: '7. What is the name of Simba and Nala\'s daughter?',
        answers: {
            a: 'Simon',
            b: 'Carly',
            c: 'Jane',
            d: 'Kiara'
        },
        correctAnswer: 'd'
    },
    {
        question: '8. Mowgli was raised by what animals in The Jungle Book?',
        answers: {
            a: 'Bears',
            b: 'Wolves',
            c: 'Lions',
            d: 'Deer'
        },
        correctAnswer: 'b'
    },
    {
        question: '9. What is the name of Prince Eric\'s dog in The Little Mermaid?',
        answers: {
            a: 'Max',
            b: 'Nick',
            c: 'Tom',
            d: 'Bolt'
        },
        correctAnswer: 'a'
    },
    {
        question: '10. What is the name of Belle\'s father in Beauty and the Beast?',
        answers: {
            a: 'Thomas',
            b: 'Oswald',
            c: 'Maurice',
            d: 'Pascal'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length + ' correct';
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}