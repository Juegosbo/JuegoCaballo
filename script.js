document.addEventListener('DOMContentLoaded', (event) => {
    const raceTrack = document.getElementById('raceTrack');
    for (let i = 1; i <= 40; i++) {
        let horseDiv = document.createElement('div');
        horseDiv.classList.add('horse');
        horseDiv.id = `horse${i}`;
        horseDiv.innerHTML = `<span></span> Caballo ${i}`;
        raceTrack.appendChild(horseDiv);
    }
});

function startRace() {
    const horses = document.querySelectorAll('.horse');
    let winners = [];
    const raceLength = raceTrack.clientWidth - 50;

    horses.forEach((horse, index) => {
        let horsePosition = 0;
        let horseInterval = setInterval(() => {
            if (horsePosition >= raceLength) {
                clearInterval(horseInterval);
                if (!winners.includes(index + 1)) {
                    winners.push(index + 1);
                    updateWinners(winners);
                }
            } else {
                horsePosition += Math.random() * 10;
                horse.style.transform = `translateX(${horsePosition}px)`;
            }
        }, 100);
    });
}

function updateWinners(winners) {
    if (winners.length === 1) {
        document.getElementById('first').textContent = `1er lugar: Caballo ${winners[0]}`;
    } else if (winners.length === 2) {
        document.getElementById('second').textContent = `2do lugar: Caballo ${winners[1]}`;
    } else if (winners.length === 3) {
        document.getElementById('third').textContent = `3er lugar: Caballo ${winners[2]}`;
    } else if (winners.length === 4) {
        document.getElementById('fourth').textContent = `4to lugar: Caballo ${winners[3]}`;
    }
}
