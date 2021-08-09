var comScore=0;
var userScore=0;
var isComputerTurn = true;
var shotsLeft = 15;

function showText(s) {
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function disableComBtn(flag) {
    var computerBtns = document.getElementsByClassName('btn-computer');
    for(var i=0;i<computerBtns.length;i++) {
        computerBtns[i].disabled = flag;
    }
}

function disableUserBtn(flag) {
    var userBtns = document.getElementsByClassName('btn-user');
    for(var i=0;i<userBtns.length;i++) {
        userBtns[i].disabled = flag;
    }
}

function onComputerShoot() {
    if(!isComputerTurn)
        return;
    //var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score');
    var shootType = Math.random() <0.5 ? 2:3;
    if(shootType===2) {
        if(Math.random()<0.5) {
            showText('컴퓨터가 2점슛을 성공시켰습니다!');
            comScore+=2;
        }
        else {
            showText('컴퓨터가 2점슛을 실패했습니다.');
        }
    }
    else {
        if(Math.random()<0.33) {
            showText('컴퓨터가 3점슛을 성공시켰습니다!');
            comScore+=3;
        }
        else {
            showText('컴퓨터가 3점슛을 실패했습니다.');
        }
    }
    comScoreElem.innerHTML = comScore;
    isComputerTurn = false;

    disableComBtn(true);
    disableUserBtn(false);
}

function onUserShoot(shootType) {
    if(isComputerTurn)
        return;
    //var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');
    if(shootType===2) {
        if(Math.random()<0.5) {
            showText(' 2점슛을 성공했습니다!');
            userScore+=2;
        }
        else {
            showText('2점슛을 실패했습니다.');
        }
    }
    else {
        if(Math.random()<0.33) {
            showText('3점슛을 성공했습니다!');
            userScore+=3;
        }
        else {
            showText('3점슛을 실패했습니다.');
        }
    }
    userScoreElem.innerHTML = userScore;
    isComputerTurn = true;

    disableComBtn(false);
    disableUserBtn(true);

    shotsLeft--;
    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if(shotsLeft===0) {
        if(userScore>comScore) {
            showText('승리했습니다!');
        }
        else if(userScore<comScore) {
            showText('아쉽게도 졌습니다...');
        }
        else {
            showText('비겼습니다.');
        }
        disableComBtn(true);
        disableUserBtn(true);
    }
}