
 class Form{
 constructor(){

  this.input = createInput("name")
  this.button= createButton('play')
  this.greeting= createElement('h2')
 }

 hide(){

  this.greeting.hide();
  this.button.hide();
  this.input.hide(); 
 }

 display(){

  var title= createElement('h2')
  title.html("car racing game");
  title.position( 120, 70);
  this.input.position(50,30);
  this.button.position(50,50);
  this.button.mousePressed(()=>{
  this.input.hide();   
  this.button.hide();
  player.name = this.input.value();
  playerCount= playerCount+1;
  player.update();
  player.updateCount(playerCount);
  this.greeting.html("HELLO: "+ name);
  this.greeting.position(200,200);
 })
 }
 }