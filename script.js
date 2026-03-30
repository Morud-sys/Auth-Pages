function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    document.getElementById(screenId).classList.add('active');
}

// LOGIN
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    alert("Login successful (demo only)");
}

// REGISTER
function register() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;

    if (!name || !email || !password || !confirm) {
        alert("Please fill in all fields");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    alert("Registered successfully (demo only)");
    showScreen('loginScreen');
}

function togglePassword() {
  const passwordInput = document.getElementById("loginPassword");
  const icon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; 
    icon.src = "eye.png";    
  } else {
    passwordInput.type = "password"; 
    icon.src = "eyee.png";          
  }
}

// RESET PASSWORD
function resetPassword() {
    const email = document.getElementById('forgotEmail').value;

    if (!email) {
        alert("Enter your email");
        return;
    }

    alert("Reset link sent (demo only)");
    showScreen('loginScreen');
}