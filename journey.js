
const journeyCursor = document.querySelector(".journey-cursor");

// Make the ring follow the mouse
if (journeyCursor) {
    document.addEventListener("mousemove", (event) => {
        journeyCursor.style.left = `${event.clientX}px`;
        journeyCursor.style.top = `${event.clientY}px`;
        journeyCursor.style.opacity = "1";
    });

    // Hide the ring when the mouse leaves the page
    document.addEventListener("mouseleave", () => {
        journeyCursor.style.opacity = "0";
    });
}
