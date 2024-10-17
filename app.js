document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainer = document.querySelector(".Testimonial_box");
  const testimonials = document.querySelectorAll(".Testimonial_box_one");

  testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    testimonialContainer.appendChild(clone);
  });
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    item.classList.toggle("active");

    const content = item.querySelector(".accordion-content");
    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

document.querySelectorAll(".faq_accordion-title").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const item = this.parentElement;
    const isActive = item.classList.contains("active");

    // Close all accordions
    document.querySelectorAll(".faq_accordion-item").forEach((acc) => {
      acc.classList.remove("active");
    });

    // Toggle current accordion
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

document
  .getElementById("togglePricing")
  .addEventListener("change", function () {
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");

    if (this.checked) {
      monthlyPrices.forEach((price) => (price.style.display = "none"));
      yearlyPrices.forEach((price) => (price.style.display = "block"));
    } else {
      monthlyPrices.forEach((price) => (price.style.display = "block"));
      yearlyPrices.forEach((price) => (price.style.display = "none"));
    }
  });
