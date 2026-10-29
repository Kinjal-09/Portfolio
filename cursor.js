const cursor = document.querySelector(".journey-cursor");

if (cursor) {
    document.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });
}