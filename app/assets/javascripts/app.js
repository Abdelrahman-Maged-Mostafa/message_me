document.addEventListener("DOMContentLoaded", function () {
  //First option for nav bar
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      dropdownContent.style.display = "none";
    }
  });
  // end First option for nav bar

  //Sec option for send Delete method
  const logoutLink = document.getElementById("logout-link");

  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();

      fetch("/logout", {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = "/login";
          } else {
            console.error("Logout failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
  // end Sec option for send Delete method

  // flash code
  const flashMessages = document.querySelectorAll(".flash-message");

  flashMessages.forEach((msg) => {
    const closeBtn = msg.querySelector(".flash-close");

    // إغلاق يدوي
    closeBtn.addEventListener("click", () => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 300);
    });

    // اختفاء تلقائي بعد 5 ثواني
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 300);
    }, 4000);
  });
  //end flash code
  //go to last message
  const box = document.getElementById("messagesBox");
  if (box) {
    box.scrollTop = box.scrollHeight;
  }
  //end go to last message
});
