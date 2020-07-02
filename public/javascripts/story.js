let playbutton;
let setupsignal = 0;
let storyread=0;
let startgame_button;
let i =0;
let storyline1 = '最近疫情關係，我變成無業遊民了...\n某天，看到Uber有新的賺錢方案...Uber painting...' +
    '設計師\n創作畫作再提供送畫到府的服務...';
let storyline2 = '所以我想嘗試看看這個新興的賺錢方式！\n' +
    '但想到自己沒有美術背景和天份，然後又是商學院畢業的...';
let storyline3 = '於是，我開始到設計師們蒐集靈感的網站，尋找相關風格畫家們\n的原創作品...';


function story()
{
    this.setup = function(){
        me=this;
        this.sceneManager.music1.play();

    }
    function startgame_button_pressed()
    {
        storyread=0;
        startgame_button.remove();
        me.sceneManager.showScene(choose);
        setupsignal=0;
    }

    this.draw = function()
    {
        if(setupsignal==0){
            startgame_button = createImg('images/startgame_button.png');
            startgame_button.size(200,55);
            startgame_button.position(windowWidth*0.43,0.82*windowHeight);
            startgame_button.hide();
            startgame_button.mousePressed(startgame_button_pressed);
            setupsignal=1;
        }
        textAlign(LEFT, BASELINE);
        textSize(25);
        fill(255);
        //this.sceneManager.jingle4.play();
        if(storyread==0){
            image( this.sceneManager.story1, 0, 0,windowWidth*0.9,windowHeight*0.85);
            storyread=1;
        }else if(storyread==1){
            //if(frameCount%20==0&&i<storylineary1_1.length){
            //    text(storylineary1_1[i],50+i*30,500);
            //    i+=1;
            //    console.log(i);

            //}else if (frameCount%20==0&&(i-16)<storylineary1_2.length){
            //    text(storylineary1_2[i-16],50+(i-16)*30,550);
            //    i+=1;
            //}
            text(storyline1,0.03*windowWidth,0.64*windowHeight);
        }
        else if(storyread==2){
            image( this.sceneManager.story2, 0, 0,windowWidth*0.9,windowHeight*0.85);
            text(storyline2,0.03*windowWidth,0.64*windowHeight);

        }else if (storyread==3){
            image( this.sceneManager.story3, 0, 0,windowWidth*0.9,windowHeight*0.85);
            text(storyline3,0.03*windowWidth,0.64*windowHeight);
            startgame_button.show();


        }
    }

    this.mousePressed = function()
    {
        this.sceneManager.jingle4.stop();
        this.sceneManager.jingle4.play();
        if(storyread==1){
            image( this.sceneManager.story2, 0, 0,windowWidth*0.9,windowHeight*0.85);
            storyread=2;
            console.log(1);
        }else
        if(storyread==2){
            image( this.sceneManager.story3, 0, 0,windowWidth*0.9,windowHeight*0.85);
            storyread=3;
            console.log(2);
        }
    }


    this.windowResized = function() {
        resizeCanvas(windowWidth, windowHeight);
    }

}