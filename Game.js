class Game {
    constructor(){
    }

    getState(){
       var getstate = database.ref('gameState');
        getstate.on("value",function(data){
            gameState=data.val();
        });
    }
    updateState(state){
        var update = database.ref('/').update({
            gameState:state});
        
    }


display(){
    form.hide();
    train.display();
    carriage.display();
    chain.display();
  
    

    
}

}