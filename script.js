const grid = document.getElementById("squareGrid");

function generateSquares() {
    let rows = 12; 
    let cols = 30; 
    let squareSize = 15; 
    let startX = 80; 
    let startY = 25;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            let x = startX + j * squareSize;
            let y = startY + i * squareSize;
            let shade = `rgba(255, 192, 203, ${Math.random() * 0.8+ 0.4})`;

            square.setAttribute("x", x);
            square.setAttribute("y", y);
            square.setAttribute("width", squareSize);
            square.setAttribute("height", squareSize);
            square.setAttribute("fill", shade);
            square.classList.add("tiny-square");

            grid.appendChild(square);
        }
    }
}

function fadeSquares() {
    const squares = document.querySelectorAll(".tiny-square");
    squares.forEach(square => {
        square.style.opacity = Math.random(); // Random fading
    });

    setTimeout(fadeSquares, 800); 
}

generateSquares();
fadeSquares();

function fadeSquares() {
    const squares = document.querySelectorAll(".tiny-square");
    squares.forEach(square => {
        square.style.opacity = Math.random(); 
    });

    setTimeout(fadeSquares, 500); 
}

generateSquares();
fadeSquares();
