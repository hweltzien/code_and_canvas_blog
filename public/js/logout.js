const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/logout');
    } else {
      alert("Failed to log out: " + response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  
  const homeButton = async () => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    }
  };
  
  document.querySelector('#home').addEventListener('click', homeButton);

  const cancelButton = async () => {
    
      document.location.replace('/login');
    
  };
  
  document.querySelector('#cancel').addEventListener('click', cancelButton);