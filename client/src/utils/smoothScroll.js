// src/utils/smoothScroll.js
export const smoothScroll = (targetId, offset = 0) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Optional: Smooth scroll for all internal links
export const initSmoothScrolling = () => {
  document.addEventListener("click", (e) => {
    // Check if link is an internal hash link
    if (
      e.target.tagName === "A" &&
      e.target.getAttribute("href")?.startsWith("#")
    ) {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      smoothScroll(targetId, 80); // Adjust offset as needed
    }
  });
};
