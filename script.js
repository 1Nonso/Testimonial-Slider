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
  devName.textContent = currentProfile.name;
  profession.textContent = currentProfile.profession;
});

// const tanyaMessage =
//   "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”";

// const johnMessage =
//   "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”";

// const tanya = "Tanya Sinclair";

// const john = "John Tarkpor";

// const tanyaProfession = "UX Engineer";

// const johnProfession = "Front-end Developer";

// button.addEventListener("click", () => {

//   if (image.src.match("assets/images/image-tanya.jpg")) {
//     image.src = "assets/images/image-john.jpg";
//   } else {
//     image.src = "assets/images/image-tanya.jpg";
//   }
//   if (text.textContent === tanyaMessage) {
//     text.textContent = johnMessage;
//   } else {
//     text.textContent = tanyaMessage;
//   }
//   if (devName.textContent.match(tanya)) {
//     devName.textContent = john;
//   } else {
//     devName.textContent = tanya;
//   }
//   if (profession.textContent.match(tanyaProfession)) {
//     profession.textContent = johnProfession;
//   } else {
//     profession.textContent = tanyaProfession;
//   }
// });
