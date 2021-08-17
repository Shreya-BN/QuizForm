class Question {

    constructor() {
      this.title = createElement('h1')
      
      this.input1 = createInput("Enter Your Name Here...");
     //Create a input box to enter the number
      this.input2 = createInput("Enter The Option Number...")
  
      this.button = createButton('Submit');
      //Create elements for One question (h3) and 4 options (h4)
      this.question = createElement('h3')
      this.option1 = createElement('h4')
      this.option2 = createElement('h4')
      this.option3 = createElement('h4')
      this.option4 = createElement('h4')
  
      this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.message.hide();
      //Add hide() for questions, options & input box
      this.input2.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
  
      //Create html() and position() for each question, input and answers.
      this.question.html("Solve this riddle:- I come once in a year, and twice in a week");
      this.question.position(200, 100);
  
      this.option1.html("1: New Year");
      this.option1.position(200, 130);
      this.option2.html("2: Alphabet C");
      this.option2.position(200, 150);
      this.option3.html("3: Alphabet E");
      this.option3.position(200, 170);
      this.option4.html("4: Month");
      this.option4.position(200, 190);
  
      this.input1.position(150, 250);
      this.input2.position(400, 250);
      this.button.position(290, 300);
  
      // Add a mousepressed action when the button is clicked Display the this.message
     this.button.mousePressed(()=>{
        this.message.html("Thank You, Your Answer Has Been Submitted.");
        this.message.position(200, 330);
      })
  
  
    }
  }
  