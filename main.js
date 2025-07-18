

  window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor");
  const imagenZoom = contenedor.querySelector(".imagen2");

  const factorZoom = 2; // imagen2 es el doble
  const radio = 60;     // tamaño del círculo

  contenedor.addEventListener("mousemove", (e) => {
    const rect = contenedor.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const porcentajeX = offsetX / rect.width;
    const porcentajeY = offsetY / rect.height;

    const imgWidth = rect.width * factorZoom;
    const imgHeight = rect.height * factorZoom;

    const newLeft = -(porcentajeX * imgWidth - offsetX);
    const newTop = -(porcentajeY * imgHeight - offsetY);

    imagenZoom.style.display = "inline";
    imagenZoom.style.left = `${newLeft}px`;
    imagenZoom.style.top = `${newTop}px`;

    imagenZoom.style.clipPath = `circle(${radio}px at ${offsetX}px ${offsetY}px)`;
  });

  contenedor.addEventListener("mouseleave", () => {
    imagenZoom.style.display = "none";
  });
});

