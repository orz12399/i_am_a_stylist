let motormove = true;
let smoke1=false;
   let smoke2=false;
function motorcycle(){

this.setup = function(){
    console.log("scene changed");
    image( this.sceneManager.loading_picture, 0, 0,1280,720);
    motor = createImg('images/motorcycle.png');
    motor.size(318,300);
    motor.position(windowWidth*0,400);
}
this.draw = function(){
    if(motormove) {
        motor.position(motor.x += frameCount * 0.02, motor.y);
        if(smoke1==false){
            birth_framecount = frameCount;

            smoke_1 =createImg('images/smoke1.png');
            smoke_1.position(motor.x,motor.y+230);
            smoke1=true;
            console.log('startpoint:'+smoke_1.y);
        }else if(smoke1==true){
            local_framecount = frameCount-birth_framecount;
            smoke_1.position(smoke_1.x -= local_framecount * 0.3,smoke_1.y-= local_framecount  * 0.3);
            if(local_framecount>=30){
                smoke_1.remove();
                smoke1=false;
            }
        }

        if(smoke2==false){
            birth_framecount2 = frameCount;

            smoke_2 =createImg('images/smoke2.png');
            smoke_2.position(motor.x,motor.y+250);
            smoke2=true;
            console.log('startpoint:'+smoke_2.y);
        }else if(smoke2==true){
            local_framecount2 = frameCount-birth_framecount2;
            smoke_2.position(smoke_2.x -= local_framecount2 * 0.2,smoke_2.y-= local_framecount2  * 0.2);
            if(local_framecount2>=40){
                local_framecount2=0;
                smoke_2.remove();
                smoke2=false;
            }
        }


    }
    if(motor.x>1300){
     motormove=false;
     motor.remove();
     smoke_1.remove();
     smoke_2.remove();
    this.sceneManager.showScene(QA);
    }
}

    function getRandom(min,max){
        return Math.floor(Math.random()*max)+min;
    }
}