const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;
  const resultMessage = document.getElementById('resultMessage');
  
  if (userGuess == randomNumber) {
    resultMessage.textContent = "অভিনন্দন! আপনি সঠিক সংখ্যা অনুমান করেছেন 🎉";
    resultMessage.style.color = "green";
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = "সংখ্যাটি বড়। আবার চেষ্টা করুন!";
    resultMessage.style.color = "orange";
  } else {
    resultMessage.textContent = "সংখ্যাটি ছোট। আবার চেষ্টা করুন!";
    resultMessage.style.color = "orange";
  }
}
