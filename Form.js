class Form {
    constructor() {
     // this.q1=[]
     // this.q1[1]="Question:-What year was the very first model of the iPhone released? "
      
     // this.q1[2]="Question:-Which Football Club was designated as the FIFA Club of the Century in 2000?"
     // this.o1=[]
     // this.o2=[]
      //this.o3=[]
     // this.o4=[]
     // this.o1[1]=" 1: 2005"
     // this.o2[1]=" 2: 2006"
    //  this.o3[1]=" 3: 2007"
     // this.o4[1]=" 4: 2008"

     // this.o1[2]=" 1: Manchester United"
     // this.o2[2]=" 2: Liverpool"
     // this.o3[2]=" 3: Real Madrid"
     // this.o4[2]=" 4: Arsenal"
      this.title = createElement('h1')
      this.input = createInput("").attribute("placeholder", "Enter your name");
     this.playButton = createButton("Play");
     this.greeting = createElement("h2");
      this.correct= createElement("h2")
      this.question = createElement('h1');
    //  this.question2 = createElement('h1');
      this.option1 = createElement('h1');
     this.option2 = createElement('h1');
      this.option3 = createElement('h1');
      this.option4 = createElement('h1');
      this.question2 = createElement('h1');
    //  this.question2 = createElement('h1');
      this.Option1 = createElement('h1');
     this.Option2 = createElement('h1');
      this.Option3 = createElement('h1');
      this.Option4 = createElement('h1');
    
      
      this.playButton2= createButton("Next");
      this.answer1= createInput("").attribute("placeholder","Type your answer");
    
      
    }
  
    setElementsStyle() {
    
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");


      this.playButton2.class("customButton");
      this.answer1.class("customInput");
      this.correct.class("greeting");
    }
  
    hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
      
      
    }
    
    display() {
      this.title.html("Quiz Game");
      this.title.position(580, 20);
      
    
    this.question.html("Question:- Question:-What year was the very first model of the iPhone released? " );
    this.question.position(150, 80);
    this.option1.html("1: 2005" );
    this.option1.position(150, 140);
    this.option2.html("2: 2006" );
    this.option2.position(150, 200);
    this.option3.html("3: 2007 " );
    this.option3.position(150, 260);
    this.option4.html("4: 2008" );
    this.option4.position(150, 320);


     
    this.playButton2.mousePressed(() => {

       
      var correctAnswer=3;
      if(this.answer1.value()==correctAnswer){
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        
        this.correct.html(`Correct Answer!`);
        
        

          this.question2.html("Question:-Which Football Club was designated as the FIFA Club of the Century in 2000?" );
          this.question2.position(150, 80);
          this.Option1.html("1:Manchester United " );
          this.Option1.position(150, 160);
          this.Option2.html("2:Liverpool" );
          this.Option2.position(150, 240);
          this.Option3.html("3:Real Madrid " );
          this.Option3.position(150, 320);
          this.Option4.html("4:Arsenal" );
          this.Option4.position(150, 400);
  
       

       
      

        
       
        
         
        
        
      }
      else{
        this.correct.html('Sorry,Wrong Answer!');


      }
    
       
    });
      
        

       

 
    

      
     
      
  
     
  
      this.input.position(width / 2 +300, height / 2 - 160);
      this.playButton.position(width / 2 + 300, height / 2 - 120);
      this.greeting.position(width / 2 - 600, height / 2 - -200);
  
      this.playButton2.position(width / 2 +300, height / 2 - 30);
      this.answer1.position(width / 2 +300, height / 2 - 70);
      this.correct.position(width/2+300,height/2+ 200);

      this.playButton.mousePressed(() => {
        this.playButton.hide();
        this.input.hide();

        var message = `
        Hello ${this.input.value()}
        </br>Welcome`;
        this.greeting.html(message);

     });


     
    }
      

       
}