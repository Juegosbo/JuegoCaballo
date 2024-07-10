document.addEventListener('DOMContentLoaded', (event) => {
    const raceTrack = document.getElementById('raceTrack');
    for (let i = 1; i <= 40; i++) {
        let horseDiv = document.createElement('div');
        horseDiv.classList.add('horse');
        horseDiv.id = `horse${i}`;
        horseDiv.style.top = `${i * 20}px`; // Espaciado entre caballos
        horseDiv.innerHTML = `<img src="horse.png" alt="Caballo ${i}"> Caballo ${i}`;
        raceTrack.appendChild(horseDiv);
    }
});

function startRace() {
    const horses = document.querySelectorAll('.horse');
    let winners = [];
    const raceLength = raceTrack.clientWidth - 100; // Ajuste del ancho según el tamaño de la imagen

    horses.forEach((horse, index) => {
        let horsePosition = 0;
        let horseInterval = setInterval(() => {
            if (horsePosition >= raceLength) {
                clearInterval(horseInterval);
                if (!winners.includes(index + 1)) {
                    winners.push(index + 1);
                    updateWinners(winners);
                }
                if (winners.length === 4) {
                    clearInterval(horseInterval);
                }
            } else {
                horsePosition += Math.random() * 10;
                horse.style.transform = `translateX(${horsePosition}px)`;
            }
        }, 100);
    });
}

function updateWinners(winners) {
    if (winners.length >= 1) {
        document.getElementById('first').textContent = `1er lugar: Caballo ${winners[0]}`;
    }
    if (winners.length >= 2) {
        document.getElementById('second').textContent = `2do lugar: Caballo ${winners[1]}`;
    }
    if (winners.length >= 3) {
        document.getElementById('third').textContent = `3er lugar: Caballo ${winners[2]}`;
    }
    if (winners.length >= 4) {
        document.getElementById('fourth').textContent = `4to lugar: Caballo ${winners[3]}`;
    }
}
