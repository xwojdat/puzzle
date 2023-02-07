let w, h;
let cols = 4;
let rows = 4;
let tiles = []; 
let board = [];

function preload(){
    source = loadImage("./strawberry.jpg");
}

function setup(){
    createCanvas(400, 400);
    w = width / cols;
    h = height / rows;

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let x = i * w;
            let y = j * h;
            let img = createImage(w, h);
            img.copy(source, x, y, w, h, 0, 0, w, h);
            let index = i+j*cols;
            board.push(index);
            let tile = new Tile(index, img);
            tiles.push(tile);
        }
    }
}

function draw(){
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let index = i + j * cols;
            let x = i * w;
            let y = j * h;
            let tileIndex = board[index];
            let img = tiles[tileIndex].img;
            image(img, x, y);
        }
    }
}