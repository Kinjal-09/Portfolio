
const journeyCursor = document.querySelector(".journey-cursor");

// Make the ring follow the mouse
document.addEventListener("mousemove", (event) => {
    journeyCursor.style.left = `${event.clientX}px`;
    journeyCursor.style.top = `${event.clientY}px`;
    journeyCursor.style.opacity = "1";
});

// Hide the ring when the mouse leaves the page
document.addEventListener("mouseleave", () => {
    journeyCursor.style.opacity = "0";
});

// Change the cursor style and label for each learning topic
const timelineItems = document.querySelectorAll(".timeline-item");

const labels = {
    terminal: "PY",
    data: "DATA",
    ml: "LEARNING"
};

timelineItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        journeyCursor.classList.remove(
            "cursor-terminal",
            "cursor-data",
            "cursor-ml"
        );

        journeyCursor.classList.add(`cursor-${item.dataset.cursor}`);
        journeyCursor.classList.add("has-label");

        journeyCursor.querySelector(".cursor-label").textContent =
            labels[item.dataset.cursor] || "";
    });

    item.addEventListener("mouseleave", () => {
        journeyCursor.classList.remove(
            "cursor-terminal",
            "cursor-data",
            "cursor-ml",
            "has-label"
        );
    });
});
