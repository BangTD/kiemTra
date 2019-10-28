//bai1
function findMinScore() {
    var araay = [10,5,2,8,-1,6,8];
    var min = araay[0];
    for(i = 1; i < araay.length; i++){
        if (min > araay[i]){
            min = araay[i];
        }
    }
    alert("So thap nhat trong mang la : " + min);
}
findMinScore();
//bai2
function tryRemoveFromArray() {
    var array = [12, 6, 3, 7, 21, 5, 7];
    var index = 2;
    for (index; index < array.length; index++) {
        array[index] = array[index + 1];
    }
    array.pop();
    alert(array);
}

tryRemoveFromArray();
//bai3
function isPrime() {
    let number = 17;
    let a = true;
    let i;
    if (number < 2) {
        a = false;
    } else {
        if (number === 2) {
            a = true;
        } else {
            if (number % 2 === 0) {
                a = false
            } else {
                for (i = 3; i <= number/2; i = i +2) {
                    if (number % i == 0) {
                        a = false;
                        break;
                    }
                }
            }
        }
    }
    alert(a)
}
isPrime();

// bai4
function Rectangle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = getRandomColor();
}

Rectangle.prototype.render = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

function onClick() {
    let q = new Rectangle(10, 10, 200, 100);
    q.render();
}
// -----------------
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

// color = rgb(200,200,200);