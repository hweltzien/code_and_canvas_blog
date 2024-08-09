const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    if (email && password) {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        
        const data = await response.json(); // Parse the JSON from the response
        console.log("response data", data); // Log the response data
        localStorage.setItem("response", JSON.stringify(response));
        document.location.replace('/user');
        console.log("response", response);
      } else {
        alert("Failed to log in.");
      }
    }
  };
 
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  
  