score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        Cat = document.querySelector('.Cat');
        Cat.classList.add('animateCat');
        setTimeout(() => {
            Cat.classList.remove('animateCat')
        }, 700);
    }
    if (e.keyCode == 39) {
        Cat = document.querySelector('.Cat');
        CatX = parseInt(window.getComputedStyle(Cat, null).getPropertyValue('left'));
        Cat.style.left = CatX + 112 + "px";
    }
    if (e.keyCode == 37) {
        Cat = document.querySelector('.Cat');
        CatX = parseInt(window.getComputedStyle(Cat, null).getPropertyValue('left'));
        Cat.style.left = (CatX - 112) + "px";
    }
}

setInterval(() => {
    Cat = document.querySelector('.Cat');
    gameOver = document.querySelector('.gameOver');
    Dog = document.querySelector('.Dog');

    dx = parseInt(window.getComputedStyle(Cat, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(Cat, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(Dog, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(Dog, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        Dog.classList.remove('DogAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(Dog, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            Dog.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}