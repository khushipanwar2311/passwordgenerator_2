function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*_!";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  document.getElementById("generate").addEventListener("click", function () {
    let password = generatePassword(10); 
    
    document.getElementById("passwordDisplay").textContent = password;
  });
  