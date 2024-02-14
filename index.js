window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const heartContainer = document.getElementById("heartContainer");

  document.addEventListener("click", function (event) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = 100 + "px";
    heart.style.width = size;
    heart.style.height = size;

    const x = event.clientX - 50 + "px"; // Ajustamos la posición para centrar el corazón
    const y = event.clientY - 50 + "px";
    heart.style.left = x;
    heart.style.top = y;

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  });
};