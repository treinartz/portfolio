var word1;
var word2;
var num;
var ele;
var canvas;
var s1;
var s2;
var myFont;

var result;

function preload() {
    result = loadStrings('data/words.txt');
    //myFont = loadFont('http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Playfair+Display:400italic');
    textFont("Verdana");
    //textFont(myFont);

}

function setup() {
    //canvas=createCanvas(windowWidth, windowHeight);
    canvas = createCanvas(450, 300);
    canvas.parent('sketch-holder');
    //canvas.position(445, 350);
    canvas.style('z-index', '1');
    cursor(HAND);


    var word = "hello";
    if (isPalindrome(word)) {
        print(word + " is a palindrome.");
    } else {
        print(word + " is not a palindrome.");
    }
    word = "racecar"
    if (isPalindrome(word)) {
        print(word + " is a palindrome.");
    } else {
        print(word + " is not a palindrome.");
    }


    word1 = new Word("house", 90, 80);
    word2 = new Word("mouse", 440, 30);

    s1 = new Stack();
    s1.push1(word1);
    s1.push1(word2);

    console.log(s1.length());
    console.log("pop " + s1.pop1().word);
    console.log(s1.length());
    console.log(s1.toString());
    noLoop();
}

function draw() {
    background(46, 9, 39);
    fill(255, 140, 0);
    textSize(20);
    text("Palindrome with a Stack!", 180, 35);

    word1.update();
    word1.display();
    word2.update();
    word2.display();

    s1.toString();

    var ind = floor(random(result.length));
    isPalindrome(result[ind]);
    //text(isPalindrome(result[ind]), 10, 10, 80, 80);
}

function mousePressed() {
    redraw();

}


////isPalin function
function isPalindrome(word) {
    s2 = new Stack();
    for (var i = 0; i < word.length; ++i) {
        fill(255, 255, 255);
        textSize(20);
        text(word[i], 40, 20 + (i * 25));
        console.log(word[i]);
        s2.push1(word[i]);
    }
    var rword = "";
    while (s2.length() > 0) {
        rword += s2.pop1();
    }
    textSize(20);
    text(rword, 100, 30 + (i * 20));

    if (word == rword) {
        fill(4, 117, 111);
        textSize(40);
        text("yes!", 270, 270);
        return true;
    } else {
        fill(255, 45, 0);
        textSize(40);
        text("no!", 270, 270);
        //return false;
    }
}

//////////word object
function Word(w, tempX, tempY) {
    // Set initial values for properties
    this.dataStore = [];
    this.xpos = tempX;
    this.ypos = tempY;
    this.angle = random(0, TWO_PI);
    this.yoffset = 0.0;
    this.word = w;

    // Update the properties
    this.update = function() {
            this.angle += 0.05;
            this.yoffset = sin(this.angle) * 20;
        }
        // Draw the word to the screen
    this.display = function() {
        fill(0, 0, 255);
        //text(this.word, this.xpos, this.ypos + this.yoffset)
    }
}

////////Stack
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push1 = push1;
    this.pop1 = pop1;
    this.peek = peek;
    this.clear1 = clear1;
    this.length = length;
    this.toString = toString;
}

function push1(element) {
    ele = element;
    num = num + 30;
    //text(ele, 300, num);
    this.dataStore[this.top++] = ele;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop1() {
    var test = --this.top;
    return this.dataStore[test];
}

function clear1() {
    this.top = 0;
    this.dataStore.length = 0;
}

function length() {
    return this.top;
}

function toString() {
    var s = "jim ";

    for (var i = 0; i < this.dataStore.length; i++) {
        // text(this.dataStore[i].word, 100, 100*i+200)//prints words to screen
        s += this.dataStore[i].word + " " + i + "\n"; //prints the words behind
    }
    //this.dataStore[0].display();//prints house behind background
    return s;
}