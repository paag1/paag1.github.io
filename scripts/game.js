let player = findStartPosition();
let revealed = {};
let visitedEvents = {};
let visitedCells = {};

const game = document.getElementById("game");
const music = document.getElementById("bg-music");
music.volume = 0.4; // base

function findStartPosition() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === "start") {
                return { x, y };
            }
        }
    }
    return { x: 0, y: 0 }; // fallback por seguridad
}

function markVisited(x, y) {
    visitedCells[`${x},${y}`] = true;
}

function createParticles() {

    const container = document.getElementById("particles");

    const symbols = ["💜", "✨", "🌷"];

    for (let i = 0; i < 60; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.fontSize =
            (18 + Math.random() * 18) + "px";

        container.appendChild(particle);
    }
}

function startGame() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");

    const music = document.getElementById("bg-music");
    if (music) music.play();

    // Revelar zona inicial
    revealAround(player.x, player.y);

    // Marcar celda inicial como visitada
    markVisited(player.x, player.y);

    render();
}

// Render principal
function render() {
    game.innerHTML = "";

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {

            const cell = document.createElement("div");
            cell.classList.add("cell");

            const key = `${x},${y}`;
            const cellType = map[y][x];
            const isRevealed = revealed[key];
            const isEventVisited = visitedEvents[key];
            const isPathVisited = visitedCells[key];

            // Niebla
            if (!isRevealed) {
                cell.classList.add("hidden-cell");
            }

            if (isPathVisited) {
                cell.classList.add("visited-path");
            }

            // Detectar si es celda clickeable
            const dx = x - player.x;
            const dy = y - player.y;

            const isAdjacent =
                (Math.abs(dx) === 1 && dy === 0) ||
                (Math.abs(dy) === 1 && dx === 0);

            if (isAdjacent && cellType !== "wall" && !isPathVisited) {
                cell.classList.add("clickable");
            }

            // Click handler
            cell.addEventListener("click", () => {
                handleCellClick(x, y);
            });

            // PRIORIDAD 1: Jugador
            if (player.x === x && player.y === y) {
                const playerIcon = document.createElement("div");
                playerIcon.textContent = "🌷";
                playerIcon.classList.add("player");
                cell.appendChild(playerIcon);

                // PRIORIDAD 2: Eventos
            } else if (isRevealed && events[cellType] && !isEventVisited) {
                const icon = document.createElement("img");
                icon.classList.add("event-icon");

                if (events[cellType].final) {
                    icon.src = "assets/icons/orchid.png";
                } else {
                    icon.src = "assets/icons/orchid_color.png";
                }

                cell.appendChild(icon);
            }

            game.appendChild(cell);
        }
    }
}

// Movimiento general
function move(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    const key = `${newX},${newY}`;

    // Validar límites
    if (!map[newY] || !map[newY][newX]) return;

    // No paredes
    if (map[newY][newX] === "wall") return;

    // NO permitir retroceso
    if (visitedCells[key]) return;

    player.x = newX;
    player.y = newY;

    revealAround(newX, newY);
    markVisited(newX, newY);

    checkCell(map[newY][newX]);
    render();
}

// Click en celda
function handleCellClick(x, y) {
    const dx = x - player.x;
    const dy = y - player.y;

    const isAdjacent =
        (Math.abs(dx) === 1 && dy === 0) ||
        (Math.abs(dy) === 1 && dx === 0);

    if (!isAdjacent) return;
    if (map[y][x] === "wall") return;

    move(dx, dy);
}

// Revelar zona
function revealAround(x, y) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            revealed[`${x + i},${y + j}`] = true;
        }
    }
}

// Eventos
function checkCell(cell) {
    if (events[cell]) {

        // Marcar evento como visitado
        const key = `${player.x},${player.y}`;
        visitedEvents[key] = true;

        if (events[cell].final) {
            showFinal();
        } else {
            showModal(events[cell]);
        }
    }
}

// Bajar volumen (cuando se muestra modal)
function lowerVolume() {
    let v = music.volume;

    const interval = setInterval(() => {
        if (v > 0.15) {
            v -= 0.02;
            music.volume = v;
        } else {
            clearInterval(interval);
        }
    }, 50);
}


// Restaurar volumen (cuando se cierra modal)
function restoreVolume() {
    let v = music.volume;

    const interval = setInterval(() => {
        if (v < 0.4) {
            v += 0.02;
            music.volume = v;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Modal
function showModal(event) {
    const modal = document.getElementById("modal");
    const mediaContainer = document.getElementById("modal-media");
    const modalText = document.getElementById("modal-text");

    modal.classList.remove("hidden");

    // Limpiar contenido previo
    mediaContainer.innerHTML = "";

    const file = event.image;

    // Detectar tipo de archivo
    const extension = file.split(".").pop().toLowerCase();

    //Video
    if (["mp4", "webm", "ogg"].includes(extension)) {
        const video = document.createElement("video");
        video.src = file;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;

        video.classList.add("modal-video");

        mediaContainer.appendChild(video);
    } else {
        // Imagen
        const img = document.createElement("img");
        img.src = file;
        img.classList.add("modal-image");
        mediaContainer.appendChild(img);
    }

    modalText.textContent = event.text;

    lowerVolume();
}

function closeModal() {
    const modal = document.getElementById("modal");

    const video = modal.querySelector("video");

    if (video) {
        video.pause();
    }

    modal.classList.add("hidden");

    restoreVolume();
}

// Final
function showFinal() {
    const modal = document.getElementById("modal");

    modal.classList.remove("hidden");
    modal.innerHTML = `
    <div class="modal-content">
      <h2>💜</h2>
      <p>Después de todo este camino...</p>
      <p><strong>¿Quieres ser mi novia?</strong></p>
      <video controls>
        <source src="assets/video/final.mp4" type="video/mp4">
      </video>
    </div>
  `;
    lowerVolume();
}


createParticles();