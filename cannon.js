class Cannon{

constructor(x,y,w,h){

this.x=x;
this.y=y;
this.w=w;
this.h=h;

this.cannon_baseImg=loadImage("./assets/cannonBase.png");

this.cannon_TopImg=loadImage("./assets/canon.png"); 



}


show(){

    push(); 

translate(this.x,this.y);

    imageMode(CENTER)
    image(this.cannon_TopImg,0,0,this.w,this.h); 
        pop();
        
        image(this.cannon_baseImg,70,20,200,200); 
}











}