//再来一次
function zailai() {
    for (var i = 0; i < 2; i++) {
        click(1840, 1000);
        sleep(500);
    }
}

//对话
function duihua() {
    for (var j = 0; j < 20; j++) {
        click(1000, 500);
        sleep(1000);
    }
}

//闯关
function chuangguan() {
    for (var k = 0; k < 2; k++) {
        click(1555, 880);
        sleep(500);
    }
}


function run(hour) {

    var loop = 55 * hour;
    for (var n = 0; n < loop; n++) {
        toastLog("第"+n+"次冒险");
        zailai();
        sleep(1000);

        chuangguan();
        toastLog("闯关");
        sleep(10000);

        //duihua();
        sleep(1000 * 25);
        toastLog("对话");
        duihua();
        sleep(1000);
        //小妲己提醒
        if(n>45){
            click(1400,725);
            sleep(1000);}
            
    }
}

//关闭广告
function closeAD(t) {
    for (var i = 0; i < t; i++) {
        click(1900, 190);
        sleep(800);
    }
}

//退出王者荣耀
function exitApp() {
    back();
    sleep(500);
    back();
    sleep(1000);
    click(1200, 750);
}

function click2(x, y, t) {
    for (var j = 0; j < t; j++) {
        click(x, y);
        sleep(500);
    }
}

function runtime(times) {
    launchApp("王者荣耀");
    toastLog("打开王者荣耀");
    sleep(30 * 1000);
    closeAD(2);
    toastLog("关闭弹窗");
    click2(1065, 850,2); // 开始游戏
    toastLog("开始游戏");
    sleep(10000);
    closeAD(8);
    toastLog("关闭弹窗2");
    click(1600, 800); //万象天工
    toastLog("万象天工");
    sleep(2000);
    click(134, 268); //快捷入口 冒险
    toastLog("冒险模式");
    sleep(2000);
    click(1000, 500); // 冒险
    toastLog("进入冒险");
    sleep(2000);
    click(1600, 900); // 下一步
    toastLog("开始冒险");
    run(times);
    exitApp();
    toastLog("退出王者荣耀");
}

runtime(3); // 3小时
sleep(60 * 15 * 1000); //休息15分钟
runtime(3); // 3小时
sleep(60 * 15 * 1000); //休息15分钟
while (1) {
    runtime(1);
    sleep(60 * 15 * 1000); //休息15分钟
}
