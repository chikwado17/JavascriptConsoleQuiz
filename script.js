

var Question = function(question, answers = [], correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


Question.prototype.displayQuestions = function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ": " + this.answers[i]);
    }

  var userAnswer = parseInt(prompt('Enter the correct answer to the question'));

      if(userAnswer === this.correctAnswer) {
          console.log(': Correct answer');
      }else {
          console.log(': Wrong answer');
      }
}



var question1 = new Question('What is your name? ', ['Emma', 'Eze'], 0);
var question2 = new Question('Where are you working? ', ['psis', 'store'], 0);
var question3 = new Question('Are you a programmer? ', ['No', 'Yes'], 1);

var questionsArray = [question1, question2, question3];

var randomQuestions = Math.floor(Math.random() * questionsArray.length);
    
questionsArray[randomQuestions].displayQuestions();

