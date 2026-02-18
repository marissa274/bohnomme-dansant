const dancerBoy = document.getElementById("dancerBoy");
const dancerGirl = document.getElementById("dancerGirl");

let running = true;
let start = performance.now();

function animate(time) {
  if (running) {
    const t = (time - start) / 1000;

    // BOY
    dancerBoy.style.transform = `rotate(${Math.sin(t * 4) * 10}deg)`;
    dancerBoy.querySelector(".arm.left").style.transform = `rotate(${Math.sin(t * 8) * 50}deg)`;
    dancerBoy.querySelector(".arm.right").style.transform = `rotate(${Math.cos(t * 8) * 50}deg)`;
    dancerBoy.querySelector(".leg.left").style.transform = `rotate(${Math.sin(t * 6) * 20}deg)`;
    dancerBoy.querySelector(".leg.right").style.transform = `rotate(${Math.cos(t * 6) * 20}deg)`;

    // GIRL (petit style différent)
    dancerGirl.style.transform = `rotate(${Math.cos(t * 4) * 8}deg)`;
    dancerGirl.querySelector(".arm.left").style.transform = `rotate(${Math.cos(t * 8) * 55}deg)`;
    dancerGirl.querySelector(".arm.right").style.transform = `rotate(${Math.sin(t * 8) * 55}deg)`;
    dancerGirl.querySelector(".leg.left").style.transform = `rotate(${Math.cos(t * 6) * 18}deg)`;
    dancerGirl.querySelector(".leg.right").style.transform = `rotate(${Math.sin(t * 6) * 18}deg)`;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function toggleDance() {
  running = !running;
}
