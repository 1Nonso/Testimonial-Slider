const image = document.querySelector(".profilePicture");
const buttonPrev = document.querySelector(".imageContainer");
const buttonNext = document.querySelector(".imageContainer2");
const button = document.querySelector(".btn");
const text = document.querySelector(".comment");

// buttonPrev.addEventListener("click", () => {
//   //   text.style.backgroundColor = "red";
//   //   console.log(buttonPrev);
//   if (image.src.match("assets/images/image-tanya.jpg")) {
//     image.src = "assets/images/image-john.jpg";
//   } else {
//     image.src = "assets/images/image-tanya.jpg";
//   }
// });

// buttonNext.addEventListener("click", () => {
//   if (image.src.match("assets/images/image-tanya.jpg")) {
//     image.src = "assets/images/image-john.jpg";
//   } else {
//     image.src = "assets/images/image-tanya.jpg";
//   }
// });

const changeComment = [
  { comment: 'heyy', userName: 'John Tarkpor', profession: 'Junior Front-end Developer' },
];

button.addEventListener("click", () => {
  if (image.src.match("assets/images/image-tanya.jpg")) {
    image.src = "assets/images/image-john.jpg";
  } else {
    image.src = "assets/images/image-tanya.jpg";
  }
  if (text.textContent.includes("been")) {
    text.textContent =
      " “ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ";
  } else {
    text.textContent =
      " “ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ” ";
  }
});
