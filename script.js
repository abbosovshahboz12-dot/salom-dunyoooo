document.getElementById("contactBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("contact").offsetTop - 60,
    behavior: "smooth"
  });
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Xabaringiz yuborildi! Rahmat 😊");
  form.reset();
});
