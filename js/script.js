document.addEventListener("DOMContentLoaded", function () {
  // Offset value in pixels
  const scrollOffset = 70;

  // Get all anchor links on the page
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Add click event listener to each anchor link
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the target element's ID from the href
      const targetId = this.getAttribute("href");

      // Skip if it's just "#" (to avoid scrolling to top)
      if (targetId === "#") return;

      // Get the target element
      const targetElement = document.querySelector(targetId);

      // If target element exists, scroll to it with offset
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          scrollOffset;

        // Smooth scroll to the adjusted position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
