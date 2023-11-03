// laptop1

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel-lp1]");
    const images = carousel.querySelectorAll("[data-img-lp1]");
    const switchTime = 2000; // 3000ms = 3 seconds
  
    let currentIndex = 0;
  
    // Initialize the first image to be displayed
    images[currentIndex].style.transform = "translateX(0)";
  
    function switchImage() {
      // Slide out the current image
      images[currentIndex].style.transform = "translateX(100%)";
  
      currentIndex = (currentIndex + 1) % images.length;
  
      // Slide in the next image
      images[currentIndex].style.transform = "translateX(0)";
    }
  
    setInterval(switchImage, switchTime);
  });



//   phone1

  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel-p1]");
    const images = carousel.querySelectorAll("[data-img-p1]");
    const switchTime = 2000; // 3000ms = 3 seconds
  
    let currentIndex = 0;
  
    // Initialize the first image to be displayed
    images[currentIndex].style.transform = "translateX(0)";
  
    function switchImage() {
      // Slide out the current image
      images[currentIndex].style.transform = "translateX(100%)";
  
      currentIndex = (currentIndex + 1) % images.length;
  
      // Slide in the next image
      images[currentIndex].style.transform = "translateX(0)";
    }
  
    setInterval(switchImage, switchTime);
  });




//   laptop2
  
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel-lp2]");
    const images = carousel.querySelectorAll("[data-img-lp2]");
    const switchTime = 2000; // 3000ms = 3 seconds
  
    let currentIndex = 0;
  
    // Initialize the first image to be displayed
    images[currentIndex].style.transform = "translateX(0)";
  
    function switchImage() {
      // Slide out the current image
      images[currentIndex].style.transform = "translateX(100%)";
  
      currentIndex = (currentIndex + 1) % images.length;
  
      // Slide in the next image
      images[currentIndex].style.transform = "translateX(0)";
    }
  
    setInterval(switchImage, switchTime);
  });




// phone2
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel-p2]");
    const images = carousel.querySelectorAll("[data-img-p2]");
    const switchTime = 2000; // 3000ms = 3 seconds
  
    let currentIndex = 0;
  
    // Initialize the first image to be displayed
    images[currentIndex].style.transform = "translateX(0)";
  
    function switchImage() {
      // Slide out the current image
      images[currentIndex].style.transform = "translateX(-100%)";
  
      currentIndex = (currentIndex + 1) % images.length;
  
      // Slide in the next image
      images[currentIndex].style.transform = "translateX(0)";
    }
  
    setInterval(switchImage, switchTime);
  });

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value, 
    }
    
    const serviceId = "service_weruexc";
    const templateId = "template_kewzezl";
    
    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            name: document.getElementById("name").value = "";
            email: document.getElementById("email").value = "";
            message: document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully"); 
        })
    
        .catch((err) => console.log(err));
}


// window.addEventListener("scroll", setScrollVar)
// window.addEventListener("resize", setScrollVar)

//   function setScrollVar() {
//     const htmlElement = document.documentElement
//     const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
//     htmlElement.style.setProperty(
//         "--scroll",Math.min(percentOfScreenHeightScrolled * 100, 100)
//     )   
// }

// setScrollVar()

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add(show);
//         }else {
//             entry.target.classList.remove("show");
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
