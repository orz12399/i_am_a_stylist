let buyerpool = [];
let pickbuyer;
let buyer_move = true;
let now_framecount;
let questionpool;
let qlist1,qlist2,qlist3,qlist4,qlist5;
let qlist1_1=['你的作畫靈感來自什麼動物呢？','a.藍腹鷴','b.小雞','c.鸚鵡'];
let qlist1_2=['那這個動物通常出現在哪裡呢？','a.國立政治大學','b.貓空女子大學','c.我偉大的黨校'];
let qlist1_3=['哇！那你是如何創作出這幅畫的呢？','a.毛筆還有墨水呀','b.當然是靠我的意志','c.彩色筆跟麥克筆'];
let alist1 = [1,1,3];
let qlist2_1=['你的作畫靈感來自？','a.下雨','b.綠豆糕','c.稿紙'];
let qlist2_2=['畫的當下下雨了嗎？你人在哪？','a.宜蘭礁溪','b.基隆夜市','c.台北市文山區指南路二段64號'];
let qlist2_3=['哇那你當下有傘嗎？沒事吧？','a.有的，我撐著一把小雨傘','b.沒有，我的傘被幹走了','c.我淋雨一直走一直走一直走'];
let alist2 = [1,3,2];
let qlist3_1=['你畫的是什麼啊？',' a.薯條','b.恐龍','c.山'];
let qlist3_2=['哇！是山呀！那你一定很常吃後山的料理吧？','a.對啊，人間美味','b.沒有，誰想吃','c.我都吃麥側'];
let qlist3_3=['那你知道山的另一邊通常星期幾公休呢？','a.藍色星期一誰想上班','b.通常是星期二啦','c.當然是星期三'];
let alist3 = [3,1,3];
let qlist4_1=['咦？怎麼好像在哪裡看過？這是... ','a.我的創作','b.一幅複製畫','c.我家的鳥'];
let qlist4_2=['啊！原來是你的創作啊，那你的創作理念是?','a.我們一起學貓叫','b.土窯雞好吃讚讚','c.唉呀愛鴨鴨'];
let qlist4_3=['原來如此，那你知道這隻鴨都生活在哪嗎？','a.達賢圖書館的池塘邊','b.當然是在樹上的鳥巢啊','c.山的另一邊吧？'];
let alist4 = [1,3,1];
let qlist5_1=['這看起來...好像食物？','a.去鹽會很好吃','b.麥側唯一能吃的食物','c.這就是薯條'];
let qlist5_2=['哇！政大附近有賣嗎？','a.有啊，學餐有賣','b.有啊，指南路上走出去就有','c.沒有欸，政大是美食沙漠'];
let qlist5_3=['那身為這幅畫的作者你，知道這一派畫風的畫家吃雞塊都沾什麼醬嗎？','a.一定是熱情如火的番茄醬','b.糖醋醬才是王道其他是邪教','c.不加醬健康又養生（但你在吃速食？）'];
let alist5 = [3,2,0];
let this_scene_qlist;
let this_scene_alist;
let passedpicture_moved=true;
let script_order=0;
let main_script = ['我：您好！這是您要的畫作...','買家：我想了解您畫作背後的故事...請容許我問一些問題...'
    ,'我：沒問題！'];
let wrong_script=['買家：哈哈，被我抓到了，其實我認識原作的阿姨的姊姊的鄰居的姪子','買家：他當初回答的根本不是這樣','買家：不好意思我打個電話...'];
let right_script=['買家：謝謝您的畫作！','買家：您真是風格大師呢！'];
let q1answered=false;
let q2answered=false;
let q3answered=false;
let playerans1,playerans2,playerans3,playerans4,playerans5,playerans6,playerans7,playerans8,playerans9;
let continue_button;
let waitforme;
let setupshouter = 0 ;


function QA(){
    this.setup = function() {


    }
    this.draw = function(){

        if(setupshouter==0){

            me=this;
            questionpool = [qlist1, qlist2, qlist3, qlist4, qlist5];
            qlist1 = [qlist1_1, qlist1_2, qlist1_3];
            qlist2 = [qlist2_1, qlist2_2, qlist2_3];
            qlist3 = [qlist3_1, qlist3_2, qlist3_3];
            qlist4 = [qlist4_1, qlist4_2, qlist4_3];
            qlist5 = [qlist5_1, qlist5_2, qlist5_3];
            if(this.sceneManager.nowplaying==1){
                this_scene_qlist = qlist1;
                this_scene_alist = alist1;
            }else if(this.sceneManager.nowplaying==2){
                this_scene_qlist = qlist2;
                this_scene_alist = alist2;
            }else if(this.sceneManager.nowplaying==3){
                this_scene_qlist = qlist3;
                this_scene_alist = alist3;
            }else if(this.sceneManager.nowplaying==4){
                this_scene_qlist = qlist4;
                this_scene_alist = alist4;
            }else if(this.sceneManager.nowplaying==5){
                this_scene_qlist = qlist5;
                this_scene_alist = alist5;
            }

            now_framecount=frameCount;
            buyerpool = ['images/buyer1.png', 'images/buyer2.png', 'images/buyer3.png', 'images/buyer4.png'];
            pickbuyer = buyerpool[Math.floor(Math.random() * buyerpool.length)];



            this.sceneManager.music2.stop();
            this.sceneManager.music3.play();
            passedpicture = createImg('images/passed.png');
            passedpicture.size(445,235);
            passedpicture.position(0.35*windowWidth,-1*windowHeight);

            buyer_picture = createImg(pickbuyer);
            buyer_picture.position(windowWidth * 1, windowHeight * 0.23);
            buyer_picture.size( 330, 300);
            stroke(3);

            setupshouter=1;
        }


        image(this.sceneManager.QA_picture, 0, 0, 1280, 720);
        local_framecount = frameCount-now_framecount;
        this.sceneManager.paintlines.forEach(element=>
            line(map(element.mX,787,1155,555,726)
                ,map(element.mY,95,565,102,330)
                ,map(element.pmX,787,1155,555,726)
                ,map(element.pmY,95,565,102,330))
        );
        //買家移動
        if(buyer_move){
            buyer_picture.position(buyer_picture.x-local_framecount*0.04,buyer_picture.y);
        }
        if(buyer_picture.x<(windowWidth * 0.57)){
            buyer_move=false;
        }
        if(script_order==0){
            maintext = text(main_script[0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==1){
            maintext = text(main_script[1],0.03*windowWidth,0.64*windowHeight);
        }if(script_order==2){
            maintext = text(main_script[2],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==3){
            maintext = text(this_scene_qlist[0][0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==4){

            if(!playerans1) {
                playerans1 = createButton(this_scene_qlist[0][1]);
                playerans1.position(0.07 * windowWidth, 0.64 * windowHeight);
                playerans1.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans1.style("font-size", "25px");
                playerans1.mousePressed(answer1);
                console.log('player1made');
            }
            if(!playerans2) {
                playerans2 = createButton(this_scene_qlist[0][2]);
                playerans2.position(0.07 * windowWidth, 0.74 * windowHeight);
                playerans2.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans2.style("font-size", "25px");
                playerans2.mousePressed(answer2);
            }
            if(!playerans3) {
                playerans3 = createButton(this_scene_qlist[0][3]);
                playerans3.position(0.07 * windowWidth, 0.84 * windowHeight);
                playerans3.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans3.style("font-size", "25px");
                playerans3.mousePressed(answer3);
            }
            //playerans2=text(this_scene_qlist[0][2],0.07*windowWidth,0.74*windowHeight);
            //playerans3=text(this_scene_qlist[0][3],0.07*windowWidth,0.84*windowHeight);

        }
        if(script_order==6){
            playerans1.position(2000,2000);
            playerans2.position(2000,2000);
            playerans3.position(2000,2000);
            maintext = text(this_scene_qlist[1][0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==7){
            if(!playerans4) {
                playerans4 = createButton(this_scene_qlist[1][1]);
                playerans4.position(0.07 * windowWidth, 0.64 * windowHeight);
                playerans4.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans4.style("font-size", "25px");
                playerans4.mousePressed(answer1);
            }
            if(!playerans5) {
                playerans5 = createButton(this_scene_qlist[1][2]);
                playerans5.position(0.07 * windowWidth, 0.74 * windowHeight);
                playerans5.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans5.style("font-size", "25px");
                playerans5.mousePressed(answer2);
            }
            if(!playerans6) {
                playerans6 = createButton(this_scene_qlist[1][3]);
                playerans6.position(0.07 * windowWidth, 0.84 * windowHeight);
                playerans6.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans6.style("font-size", "25px");
                playerans6.mousePressed(answer3);
            }
        }
        if(script_order==9){
            playerans4.position(2000,2000);
            playerans5.position(2000,2000);
            playerans6.position(2000,2000);
            maintext = text(this_scene_qlist[2][0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==10){
            if(!playerans7) {
                playerans7 = createButton(this_scene_qlist[2][1]);
                playerans7.position(0.07 * windowWidth, 0.64 * windowHeight);
                playerans7.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans7.style("font-size", "25px");
                playerans7.mousePressed(answer1);
            }
            if(!playerans8) {
                playerans8 = createButton(this_scene_qlist[2][2]);
                playerans8.position(0.07 * windowWidth, 0.74 * windowHeight);
                playerans8.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans8.style("font-size", "25px");
                playerans8.mousePressed(answer2);
            }
            if(!playerans9) {
                playerans9 = createButton(this_scene_qlist[2][3]);
                playerans9.position(0.07 * windowWidth, 0.84 * windowHeight);
                playerans9.size = (0.1 * windowWidth, 0.08 * windowHeight);
                playerans9.style("font-size", "25px");
                playerans9.mousePressed(answer3);
            }
        }
        if(script_order==12){
            playerans7.position(2000,2000);
            playerans8.position(2000,2000);
            playerans9.position(2000,2000);
            maintext = text(right_script[0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==13){
            maintext = text(right_script[1],0.03*windowWidth,0.64*windowHeight);
            playerans1=null;
            playerans2=null;
            playerans3=null;
            playerans4=null;
            playerans5=null;
            playerans6=null;
            playerans7=null;
            playerans8=null;
            playerans9=null;
        }
        if(script_order==14){
            if(passedpicture_moved) {
                passedpicture.position(passedpicture.x, passedpicture.y + local_framecount * 0.04);
            }
            if(passedpicture.y>0.3*windowHeight){
                passedpicture_moved=false;
            }
            if(!passedpicture_moved&&!continue_button){
                me.sceneManager.jingle3.play();
                continue_button = createImg('images/continue.png');
                continue_button.position(0.44*windowWidth,0.85*windowHeight);
                continue_button.size(135,31);
                continue_button.mousePressed(continue_scene);
                if(this.sceneManager.nowplaying==1){
                    this.sceneManager.p1passed=true;
                }else if(this.sceneManager.nowplaying==2){
                    this.sceneManager.p2passed=true;
                }else if(this.sceneManager.nowplaying==3){
                    this.sceneManager.p3passed=true;
                }else if(this.sceneManager.nowplaying==4){
                    this.sceneManager.p4passed=true;
                }else if(this.sceneManager.nowplaying==5){
                    this.sceneManager.p5passed=true;
                }
            }


        }
        if(script_order==101){
            if(playerans1)playerans1.position(2000,2000);
            if(playerans2) playerans2.position(2000,2000);
            if(playerans3)playerans3.position(2000,2000);
            if(playerans4)playerans4.position(2000,2000);
            if(playerans5)playerans5.position(2000,2000);
            if(playerans6)playerans6.position(2000,2000);
            if(playerans7)playerans7.position(2000,2000);
            if(playerans8)playerans8.position(2000,2000);
            if(playerans9)playerans9.position(2000,2000);
            playerans1=null;
            playerans2=null;
            playerans3=null;
            playerans4=null;
            playerans5=null;
            playerans6=null;
            playerans7=null;
            playerans8=null;
            playerans9=null;
            maintext = text(wrong_script[0],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==102){
            maintext = text(wrong_script[1],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==103){
            endgameframe = frameCount;
            maintext = text(wrong_script[2],0.03*windowWidth,0.64*windowHeight);
        }
        if(script_order==104){

            if(!waitforme){
                waitforme = createImg('images/waitforme.png');
                waitforme.size(1*windowWidth,1*windowHeight);
                waitforme.position(1*windowWidth,0*windowHeight);
                me.sceneManager.jingle1.play();

            }else if(waitforme.x>=0*windowWidth){
                waitforme.position(waitforme.x-=(frameCount-endgameframe)*0.1,waitforme.y);
            }
        }
        if(script_order>=105){
            fail_scene();
        }




    }

    function continue_scene(){
        me.sceneManager.jingle3.stop();
        buyer_picture.remove();
        passedpicture.remove();
        continue_button.remove();
        me.sceneManager.paintlines = [];
        continue_button=null;
        me.sceneManager.showScene(choose);
        buyer_move = true;
        script_order=0;
        setupshouter=0;
        passedpicture_moved=true;
    }
    function fail_scene(){
        me.sceneManager.paintlines = [];
        buyer_picture.remove();
        passedpicture.remove();
        continue_button=null;
        waitforme.remove();
        me.sceneManager.showScene(final);
        buyer_move = true;
        script_order=0;
        setupshouter=0;
        passedpicture_moved=true;
    }
    this.mousePressed = function(){
    if(script_order!=4&&script_order!=7&&script_order!=10&&script_order!=14){script_order+=1};
    }

    function answer1(){
        if(script_order==4&&this_scene_alist[0]==1){
        script_order+=1;

        }else if(script_order==4&&this_scene_alist[0]!=1){
            script_order=100;

        }
        if(script_order==7&&this_scene_alist[1]==1){
            script_order+=1;

        }else if(script_order==7&&this_scene_alist[1]!=1){
            script_order=100;

        }
        if(script_order==10&&this_scene_alist[2]==1){
            script_order+=1;

        }else if(script_order==10&&this_scene_alist[2]!=1){
            script_order=100;

        }
    }
    function answer2(){
        if(script_order==4&&this_scene_alist[0]==2){
            script_order+=1;

        }else if(script_order==4&&this_scene_alist[0]!=2){
            script_order=100;

        }
        if(script_order==7&&this_scene_alist[1]==2){
            script_order+=1;

        }else if(script_order==7&&this_scene_alist[1]!=2){
            script_order=100;

        }
        if(script_order==10&&this_scene_alist[2]==2){
            script_order+=1;

        }else if(script_order==10&&this_scene_alist[2]!=2){
            script_order=100;

        }
    }
    function answer3(){
        if(script_order==4&&this_scene_alist[0]==3){
            script_order+=1;

        }else if(script_order==4&&this_scene_alist[0]!=3){
            script_order=100;

        }
        if(script_order==7&&this_scene_alist[1]==3){
            script_order+=1;

        }else if(script_order==7&&this_scene_alist[1]!=3){
            script_order=100;

        }
        if(script_order==10&&this_scene_alist[2]==3){
            script_order+=1;

        }else if(script_order==10&&this_scene_alist[2]!=3){
            script_order=100;

        }
    }


}