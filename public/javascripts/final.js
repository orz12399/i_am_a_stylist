let setupshouter33 = 0;
let caught =null;
let fail_logo=null;
function final(){
    this.setup = function(){
        me=this;
        console.log("final");
    }
    this.draw = function(){
        if (setupshouter33 == 0) {
            failedframe=frameCount;
            this.sceneManager.jingle1.stop();
            this.sceneManager.jingle2.play();
            me = this;
            image(this.sceneManager.police, 0, 0, windowWidth * 0.9, windowHeight * 0.85);
            startframe = frameCount;
            setupshouter33 = 1;
        }

        if(!caught){
            caught = createImg("images/caught.png");
            caught.size(512,340);
            caught.position(windowWidth*0.9,windowHeight*0.4);
        }else if(caught.x>=windowWidth*0.4){
            caught.position(caught.x-=(frameCount-failedframe)*0.2,caught.y);
        }
        if(!fail_logo){
            fail_logo = createImg("images/fail_logo.png");
            fail_logo.size(445,235);
            fail_logo.position(windowWidth*0.4,-300);
        }else if(fail_logo.y<=windowHeight*0.1){
            fail_logo.position(fail_logo.x,fail_logo.y+=(frameCount-failedframe)*0.2);
        }
    }

    this.mousePressed = function(){
        gamereset();
    }

    function gamereset(){
        setupshouter33=0;
        me.sceneManager.jingle2.stop();
        me.sceneManager.music3.stop();
        me.sceneManager.music1.play();
        caught.remove();
        fail_logo.remove();
        caught=null;
        fail_logo=null;
        me.p1passed=false;
        me.p2passed=false;
        me.p3passed=false;
        me.p4passed=false;
        me.p5passed=false;
        me.sceneManager.showScene(maingame);

    }


}