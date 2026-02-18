const dancer = document.getElementById("dancer");

let running = true;
let start = performance.now();

function animate(time) {

    if (running) {
        let t = (time - start) / 1000;

        dancer.style.transform = `rotate(${Math.sin(t * 4) * 10}deg)`;

        document.querySelector(".arm.left").style.transform =
            `rotate(${Math.sin(t * 8) * 50}deg)`;

        document.querySelector(".arm.right").style.transform =
            `rotate(${Math.cos(t * 8) * 50}deg)`;

        document.querySelector(".leg.left").style.transform =
            `rotate(${Math.sin(t * 6) * 20}deg)`;

        document.querySelector(".leg.right").style.transform =
            `rotate(${Math.cos(t * 6) * 20}deg)`;
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function toggleDance() {
    running = !running;
}
