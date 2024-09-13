const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    if (email && password) {
      try{
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        
        const data = await response.json(); // Parse the JSON from the response
        console.log("Login successful:", data); // Log the response data
        localStorage.setItem("userData", JSON.stringify(data));
        document.location.replace('/dashboard');
       
      } else {
        // Parse the error message from the server
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert(`Failed to log in: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  } else {
    alert("Please enter both email and password.");
  }
  };
 
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  
  