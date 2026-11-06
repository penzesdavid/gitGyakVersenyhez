let clickCount = 0;

function incrementCounter() {
    clickCount++;
    document.getElementById('click-count').innerText = clickCount;
}

function koszones() {
    incrementCounter();
    const box = document.getElementById('status-card');
    box.className = 'status-box active';
    document.getElementById('status-icon').innerText = '🎉';
    document.getElementById('szoveg').innerText = 'Szia! Legyen szép napod!';
}

function veletlenSzam() {
    incrementCounter();
    const szam = Math.floor(Math.random() * 100) + 1;
    const box = document.getElementById('status-card');
    box.className = 'status-box random';
    document.getElementById('status-icon').innerText = '🎲';
    document.getElementById('szoveg').innerText = `Szerencseszámod: ${szam}`;
}

function torles() {
    clickCount = 0;
    document.getElementById('click-count').innerText = clickCount;
    const box = document.getElementById('status-card');
    box.className = 'status-box default';
    document.getElementById('status-icon').innerText = '💡';
    document.getElementById('szoveg').innerText = 'Kattints egy gombra lent!';
}
