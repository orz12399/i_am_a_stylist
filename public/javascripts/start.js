
var bkImage;
var story1,story2,story3;

function preload()
{
    bkImage = loadImage("images/homepage.png");
    story1 = loadImage("images/story1.png");
    story2 = loadImage("images/story2.png");
    story3 = loadImage("images/story3.png");
    paint_background = loadImage("images/paint_background.png");
    music1 = createAudio("bgm/1_startgame.mp4");
    music2 = createAudio("bgm/2_conversation.mp4");
    music3 = createAudio("bgm/3_painting.mp4");
    choosepic = loadImage('images/choosepic.png');
    loading_picture = loadImage('images/loading.png');
    QA_picture = loadImage('images/QA.png');
    buyer1=loadImage('images/buyer1.png');
    buyer2=loadImage('images/buyer2.png');
    buyer3=loadImage('images/buyer3.png');
    buyer4=loadImage('images/buyer4.png');
    police = loadImage('images/police.png');
    jingle1 = createAudio("bgm/4_police.wav");
    jingle2 = createAudio("bgm/5_sad.wav");
    jingle3 = createAudio("bgm/6_hurray.wav");
    jingle4 = createAudio("bgm/7_buttonpressed.mp3");
    nowplaying=0;
    paint_lines = [];
}

function setup()
{
    createCanvas(windowWidth*0.9, windowHeight*0.85);

    var mgr = new SceneManager();
    mgr.bkImage = bkImage; // inject bkImage property
    mgr.story1=story1;
    mgr.story2=story2;
    mgr.story3=story3;
    mgr.paint_background=paint_background;
    mgr.music1 = music1;
    mgr.music2=music2;
    mgr.music3=music3;
    mgr.choosepic = choosepic;
    mgr.loading_picture = loading_picture;
    mgr.QA_picture = QA_picture;
    mgr.buyer01 = buyer1;
    mgr.buyer02 = buyer2;
    mgr.buyer03 = buyer3;
    mgr.buyer04 = buyer4;
    mgr.police=police;

    mgr.jingle1=jingle1;
    mgr.jingle2=jingle2;
    mgr.jingle3=jingle3;
    mgr.jingle4=jingle4;
    mgr.p1passed=false;
    mgr.p2passed=false;
    mgr.p3passed=false;
    mgr.p4passed=false;
    mgr.p5passed=false;
    mgr.nowplaying = nowplaying;
    mgr.paintlines = paint_lines;
    mgr.wire();
    mgr.showScene( maingame );

}