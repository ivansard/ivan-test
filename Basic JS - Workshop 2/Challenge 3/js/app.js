let corgi = document.querySelector("img");
let hat = document.querySelectorAll("img")[1];
console.log(hat);
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
    }
    corgi.style.top = (Math.sin(angle) * 40 + 200) + "px";
    corgi.style.left = (Math.cos(angle) * 230 + 600) + "px";

    hat.style.top = (Math.sin(angle) * (-40) - 40) + "px";
    hat.style.left = (Math.cos(angle) * 230 + 600) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);