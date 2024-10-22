// document.addEventListener("DOMContentLoaded", function () {
//     const words = ["Web Designer", "Frontend Developer", "UI Designer"];
//     let wordIndex = 0;
//     let charIndex = 0;
//     let currentWord = '';
//     const typingSpeed = 100;
//     const erasingSpeed = 50;
//     const newWordDelay = 2000;
  
//     function type() {
//         if (charIndex < words[wordIndex].length) {
//             currentWord += words[wordIndex].charAt(charIndex);
//             document.querySelector('.typing-animation').textContent = currentWord;
//             charIndex++;
//             setTimeout(type, typingSpeed);
//         } else {
//             setTimeout(erase, newWordDelay);
//         }
//     }
  
//     function erase() {
//         if (charIndex > 0) {
//             currentWord = currentWord.slice(0, -1);
//             document.querySelector('.typing-animation').textContent = currentWord;
//             charIndex--;
//             setTimeout(erase, erasingSpeed);
//         } else {
//             wordIndex = (wordIndex + 1) % words.length;
//             setTimeout(type, typingSpeed + 1100);
//         }
//     }
  
//     type();
//   });
  
  
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-done');
  
  progressBars.forEach(bar => {
      setTimeout(() => {
          bar.style.width = bar.getAttribute('data-done') + '%';
          bar.style.opacity = 1;
      }, 500);
  });
  
  // Animate circular skills
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(circle => {
      let percent = circle.getAttribute('data-percent');
      circle.style.setProperty('--percent', percent);
  });

  let username = document.getElementById("name")
  let useremail = document.getElementById("email") 
  let usernumber = document.getElementById("num")
  let usermess = document.getElementById("mess")
  let userbtn = document.getElementById("btn")

   
  btn.addEventListener("click",()=>{
    const data = {
        from_name: username .value,
        _name: username.value,
        _number: usernumber.value,
        _email: useremail.value,
        _message: usermess.value,
        }
    
      emailjs.send("service_kt1a39y","template_r8zm9lg", data).then(()=>{
        alert("Message sent Successfully")
      })  ;

  })


