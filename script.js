const image = document.querySelector(".profilePicture");
const buttonPrev = document.querySelector(".imageContainer");
const buttonNext = document.querySelector(".imageContainer2");
const button = document.querySelector(".btn");
const text = document.querySelector(".comment");
const devName = document.querySelector(".devName");
const profession = document.querySelector(".profession");

const profiles = [
  {
    image: "assets/images/image-tanya.jpg",
    message:
      " “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.” ",
    name: "Tanya Sinclair",
    profession: "UX Engineer",
  },
  {
    image: "assets/images/image-john.jpg",
    message:
      " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.” ",
    name: "John Tarkpor",
    profession: "Front-end Developer",
  },
];

let currentProfileIndex = 0;

button.addEventListener("click", () => {
  currentProfileIndex = (currentProfileIndex + 1) % profiles.length;

  const currentProfile = profiles[currentProfileIndex];

  image.src = currentProfile.image;
  text.textContent = currentProfile.message;

  // devName.textContent = currentProfile.name;
  // Create temporary div elements
  const nameElement = document.createElement("strong");
  nameElement.textContent = currentProfile.name;
  devName.innerHTML = ""; // Clear existing content
  devName.appendChild(nameElement);

  const profElement = document.createElement("span");
  profElement.style.opacity = "0.5";
  profElement.textContent = currentProfile.profession;
  profession.innerHTML = ""; // Clear existing content
  profession.appendChild(profElement);

  // profession.textContent = currentProfile.profession;
});

// For profession with opacity
