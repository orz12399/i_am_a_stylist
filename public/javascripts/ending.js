let setupshouter = 0;
let police = null;
let caught =null;
function ending(){
    this.setup = function(){
        me=this;

    }
this.draw = function(){
    if (setupshouter == 0) {
        failedframe=frameCount;
        this.sceneManager.jingle1.play();
        me = this;
        image(this.sceneManager.police, 0, 0, windowWidth * 0.9, windowHeight * 0.85);
        startframe = frameCount;
        setupshouter = 1;

    }
    if(!caught){
        caught = loadImg("images/caught.png");
        caught.size(512,340);
        caught.position(windowWidth*0.9,windowHeight*0.4);
    }else if(caught.x>=windowWidth*0.4){
        caught.position(caught.x-=(frameCount-failedframe),caught.y);

    }
}


function gamereset(){
    me.p1passed=false;
    me.p2passed=false;
    me.p3passed=false;
    me.p4passed=false;
    me.p5passed=false;

}


}