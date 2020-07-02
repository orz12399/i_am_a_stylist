
let picture1,picture2,picture3,picture4,picture5;
function choose()
{
    this.setup = function(){
        me=this;

    }

    function picture_mouse_interaction(){

        //if(frameCount%2==0&&this.sizeX<=240){
          //  this.sizeX+=1;
          //  this.sizeY+=1.38;
        //}
    }

    function picture_mouse_off_interaction(){
        //if(frameCount%2==0&&this.sizeX>=160){
          //  this.sizeX-=1;
            //this.sizeY-=1.38;

    }
    function picture1_pressed() {
        me.sceneManager.nowplaying=1;
        me.sceneManager.showScene(paintstart);
        console.log(me.sceneManager.nowplaying);
        picture1.remove();picture2.remove();picture3.remove();picture4.remove();picture5.remove();
        picture1=null;picture2=null;picture3=null;picture4=null;picture5=null;
    }

    function picture2_pressed() {
        me.sceneManager.nowplaying=2;
        me.sceneManager.showScene(paintstart);
        console.log(me.sceneManager.nowplaying);
        picture1.remove();picture2.remove();picture3.remove();picture4.remove();picture5.remove();
        picture1=null;picture2=null;picture3=null;picture4=null;picture5=null;
    }
    function picture3_pressed() {
        me.sceneManager.nowplaying=3;
        me.sceneManager.showScene(paintstart);
        console.log(me.sceneManager.nowplaying);
        picture1.remove();picture2.remove();picture3.remove();picture4.remove();picture5.remove();
        picture1=null;picture2=null;picture3=null;picture4=null;picture5=null;
    }
    function picture4_pressed() {
        me.sceneManager.nowplaying=4;
        me.sceneManager.showScene(paintstart);
        console.log(me.sceneManager.nowplaying);
        picture1.remove();picture2.remove();picture3.remove();picture4.remove();picture5.remove();
        picture1=null;picture2=null;picture3=null;picture4=null;picture5=null;
    }
    function picture5_pressed() {
        me.sceneManager.nowplaying=5;
        me.sceneManager.showScene(paintstart);
        console.log(me.sceneManager.nowplaying);
        picture1.remove();picture2.remove();picture3.remove();picture4.remove();picture5.remove();
        picture1=null;picture2=null;picture3=null;picture4=null;picture5=null;
    }
    this.draw = function()
    {
        image( this.sceneManager.choosepic, 0, 0,windowWidth*0.9,windowHeight*0.85);
        if(!this.sceneManager.p1passed&&!picture1) {
            picture1 = createImg('images/picture1.png');
            picture1.size(160, 220);
            picture1.position(windowWidth * 0.05, 150);
            picture1.mousePressed(picture1_pressed);
            picture1.mouseOver(picture_mouse_interaction);
            picture1.mouseOut(picture_mouse_off_interaction);
        }else if(this.sceneManager.p1passed&&!picture1){
            picture1 = createImg('images/picture1_played.png');
            picture1.size(160, 220);
            picture1.position(windowWidth * 0.05, 150);console.log("state2");
        }
        if(!this.sceneManager.p2passed&&!picture2) {
            picture2 = createImg('images/picture2.png');
            picture2.size(160, 220);
            picture2.position(windowWidth * 0.25, 150);
            picture2.mousePressed(picture2_pressed);
        }else if(this.sceneManager.p2passed&&!picture2){
            picture2 = createImg('images/picture2_played.png');
            picture2.size(160, 220);
            picture2.position(windowWidth * 0.25, 150);
        }
        if(!this.sceneManager.p3passed&&!picture3) {
            picture3 = createImg('images/picture3.png');
            picture3.size(160, 220);
            picture3.position(windowWidth * 0.45, 150);
            picture3.mousePressed(picture3_pressed);
        }else if (this.sceneManager.p3passed&&!picture3){
            picture3 = createImg('images/picture3_played.png');
            picture3.size(160, 220);
            picture3.position(windowWidth * 0.45, 150);
        }
        if(!this.sceneManager.p4passed&&!picture4) {
            picture4 = createImg('images/picture4.png');
            picture4.size(160, 220);
            picture4.position(windowWidth * 0.65, 150);
            picture4.mousePressed(picture4_pressed);
        }else if(this.sceneManager.p4passed&&!picture4){
            picture4 = createImg('images/picture4_played.png');
            picture4.size(160, 220);
            picture4.position(windowWidth * 0.65, 150);
        }
        if(!this.sceneManager.p5passed&&!picture5) {
            picture5 = createImg('images/picture5.png');
            picture5.size(160, 220);
            picture5.position(windowWidth * 0.85, 150);
            picture5.mousePressed(picture5_pressed);
        }else if(this.sceneManager.p5passed&&!picture5){
            picture5 = createImg('images/picture5_played.png');
            picture5.size(160, 220);
            picture5.position(windowWidth * 0.85, 150);
        }
    }

    this.mousePressed = function()
    {
        this.sceneManager.jingle4.stop();
        this.sceneManager.jingle4.play();





    }


    this.windowResized = function() {
        resizeCanvas(windowWidth, windowHeight);
    }

}