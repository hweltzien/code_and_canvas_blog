// const contactFormHandler = async (event) => {
//     event.preventDefault();
//     const email = document.querySelector("#email-contact").value.trim();
//     const password = document.querySelector("#password-contact").value.trim();
//     const message = document.querySelector("#message-contact").value.trim();
//     if (email && password && message) {
//       try{
//       const response = await fetch("/api/user/login", {
//         method: "POST",
//         body: JSON.stringify({ email, password, message }),
//         headers: { "Content-Type": "application/json" },
//       });
//       if (response.ok) {
        
//         const data = await response.json(); // Parse the JSON from the response
//         console.log("Message sent:", data); // Log the response data
//         // localStorage.setItem("userData", JSON.stringify(data));
//         document.location.replace('/user');
       
//       } else {
//         // Parse the error message from the server
//         const errorData = await response.json();
//         // console.error("Login failed:", errorData);
//         alert(`Failed to log in: ${errorData.message || 'Unknown error'}`);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred. Please try again.");
//     }
//   } else {
//     alert("Please enter both email and password.");
//   }
// //   };
 
//   document
//     .querySelector(".login-form")
//     .addEventListener("submit", loginFormHandler);