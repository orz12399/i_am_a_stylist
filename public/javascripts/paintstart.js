let line_index_in_array=0;

let setup_shouter = 0;
function paintstart() {

    this.setup = function () {

    }

    function complete_painting(){
        copypicture.remove();
        complete_painting_button.remove();
        me.sceneManager.showScene(motorcycle);
        setup_shouter=0;
    }

    class paintline{
        constructor(x,y,px,py){
            this.mX=x;
            this.mY=y;
            this.pmX=px;
            this.pmY=py;

        }
    }
    this.draw = function () {


        if(setup_shouter==0){
            this.sceneManager.music1.stop();
            this.sceneManager.music2.play();
            me = this;
            if (this.sceneManager.nowplaying == 1) {
                copypicture = createImg('images/picture1.png');
            } else if (this.sceneManager.nowplaying == 2) {
                copypicture = createImg('images/picture2.png');
            } else if (this.sceneManager.nowplaying == 3) {
                copypicture = createImg('images/picture3.png');
            } else if (this.sceneManager.nowplaying == 4) {
                copypicture = createImg('images/picture4.png');
            } else if (this.sceneManager.nowplaying == 5) {
                copypicture = createImg('images/picture5.png');
            }

            copypicture.size(480, 660);
            copypicture.position(windowWidth * 0.1, 50);

            complete_painting_button = createImg('images/complete_painting.png');
            complete_painting_button.position(windowWidth*0.62,windowHeight*0.8);
            complete_painting_button.mousePressed(complete_painting);
            image(this.sceneManager.paint_background, 0, 0, windowWidth * 0.9, windowHeight * 0.85);
            setup_shouter=1;
        }



        stroke(0);
        strokeWeight(4);

        if(mouseIsPressed&&mouseX<1155&&mouseX>787&&mouseY>95&&mouseY<565){
            this.sceneManager.paintlines[line_index_in_array] = new paintline(mouseX, mouseY, pmouseX, pmouseY);
                line(mouseX, mouseY, pmouseX, pmouseY);
                line_index_in_array+=1;
        }
    }
    this.mousePressed=function()
    {
    }
}