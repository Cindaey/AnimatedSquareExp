
squareSize;
            let y = startY + i * squareSize;
            let shade = `rgba(255, 192, 203, ${Math.random() * 0.9 + 0.5})`; // Varying pink shades

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
        square.style.opacity = Math.random(); 
    });

    setTimeout(fadeSquares, 500); 
}

generateSquares();
fadeSquares();
