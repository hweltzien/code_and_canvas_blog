const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    if (username && email && password) {
      const response = await fetch("/api/user/getStarted", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("response", response);
        document.location.replace("/dashboard");
      } else {
        alert("Failed to sign up.");
      }
    }
  };
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);