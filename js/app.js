function smoothscroll(target, duration) {
    var target = document.querySelector(target) //this will target our last li tag where we want to go

    var targetPosition = target.getBoundingClientRect().left; //this will give us the position of the target
    var startPosition = window.pageXOffset; //this will give us the position of x axis with refrence of window

    var distance = startPosition - targetPosition;

    console.log(targetPosition);
    console.log(startPosition);
}

smoothscroll('#last-li')