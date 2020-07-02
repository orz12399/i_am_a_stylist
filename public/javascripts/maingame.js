let start_button=null;
let next_scene;
function maingame()
{
    this.setup = function(){
        console.log(windowWidth);
        console.log(windowHeight);
        this.sceneManager.music1.play();
        me = this;
        start_button = createImg('images/start_button.png');
        start_button.size(190,70);
        start_button.position(0.43*windowWidth,0.41*windowHeight);
        start_button.mousePressed(start_button_pressed);
        console.log(windowWidth);
        console.log(windowHeight);
    }
    this.draw = function()
    {
        image( this.sceneManager.bkImage, 0, 0,windowWidth*0.9,windowHeight*0.85);
        if(!start_button) {
            start_button = createImg('images/start_button.png');
            start_button.size(190, 70);
            start_button.position(0.43 * windowWidth, 0.41 * windowHeight);
            start_button.mousePressed(start_button_pressed);
        }
        //image( this.sceneManager.startbutton, 550,250,200,70);
        drawIntroScreen();
    }

    function start_button_pressed()
    {
            start_button.remove();
            start_button=null;
            me.sceneManager.showScene(story);
    }

    function drawIntroScreen()
    {

    }
    this.windowResized = function() {
        resizeCanvas(windowWidth, windowHeight);
    }

}