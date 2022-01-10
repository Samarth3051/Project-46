class Game{
    constructor(){

    }
    

    start(){
        form=new Form();
        form.display();

        player=new player();
        for(var plr in allContestants){
            debugger;
            var correctAns = "2";
    
            // if (correctAns !== allContestants[plr].answer){
            //   fill("Green")
            // }
            // else{
            //   fill("red");
            // }
    
             if (correctAns === allContestants[plr].answer){
               fill("Green")
             }
           else{
               fill("red");
            }
        }

        

       
         
            
    }

}