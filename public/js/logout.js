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

const logoutButton = document.querySelector('#logout');
if (logoutButton) logoutButton.addEventListener('click', logout);




