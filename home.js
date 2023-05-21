
const roles = ['an AI/ML zealot','a problem solver', 'a data analyst'];

// Get the element that contains the role text
const roleElement = document.getElementById('role');

// Function to simulate typewriter effect
function typeWriterEffect(text, element) {
  let currentCharIndex = 0;
  const typingInterval = 100; // Interval between typing each character in milliseconds

  const timer = setInterval(() => {
    element.textContent += text[currentCharIndex];
    currentCharIndex++;

    if (currentCharIndex === text.length) {
      clearInterval(timer);
      setTimeout(() => {
        element.textContent = ''; // Clear the previous text
        changeRole(); // Change to the next role
      }, 2000);
    }
  }, typingInterval);
}

// Variables to track the current role and index
let currentRoleIndex = 0;
let currentRole = roles[currentRoleIndex];

// Function to change the role text and start typewriter effect
function changeRole() {
  roleElement.textContent = ''; // Clear the previous text

  typeWriterEffect(currentRole, roleElement);

  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  currentRole = roles[currentRoleIndex];
}

// Call the changeRole function to start the typewriter effect and role changing
changeRole();



// OG Star Animation
function createStar(ids) {
  colorArray = ['#6C63FF', '#FF6584', '#F0F0F0'];
  let star = document.createElement("div");
  star.setAttribute("id", `${ids}`);
  star.style.cssText = `
    z-index: -2;
    height: ${Math.random() * 4 + 3}px;
    width: ${Math.random() * 4 + 3}px;
    border-radius: 50%;
    background-color: ${colorArray[Math.floor(Math.random() * 3)]};
    position: absolute;
  `;

  const containerWidth = document.getElementById("home").offsetWidth;
  const containerHeight = document.getElementById("home").offsetHeight;
  const maxX = containerWidth - star.offsetWidth -3;
  const maxY = containerHeight - star.offsetHeight -3;

  // Generate initial positions within the container bounds
  let initialX = Math.random() * maxX;
  let initialY = Math.random() * maxY;
  star.style.left = `${initialX}px`;
  star.style.top = `${initialY}px`;

  document.getElementById("home").appendChild(star);
  console.log(star.getBoundingClientRect().top);

  // Generate individual animation for each star
  // const animationDuration = Math.random() * 500 + 5;
  const animationDuration =  Math.random()* 500 + 200;
  const translateXKeyframes = [initialX, Math.random() * maxX, initialX];
  const translateYKeyframes = [initialY, Math.random() * maxY, initialY];

  star.style.animation = `moveStar-${ids} ${animationDuration}s linear infinite`;

  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    @keyframes moveStar-${ids} {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(${translateXKeyframes[1] - initialX}px, ${translateYKeyframes[1] - initialY}px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  return star;
}

for (i = 0; i < 250; i++) {
  createStar(i);
}











// function func1(){
// for (i=1; i<50;i++){
//   x = createStar();
//   x.animate(
//       [
//         {top: `${x.getBoundingClientRect().top}px`,
//         left: `${x.getBoundingClientRect().left}px`,
//         opacity: 1},
//         {top: `${x.getBoundingClientRect().top + Math.random()*100}px`,
//         left: `${x.getBoundingClientRect().left + Math.random()*100}px`,
//         opacity: 0},
//       ],
//       {duration: 2000,
//       iterations: Infinity,}
//     )
// }
// };
// setInterval(func1, 2000)
// for(i=1;i<50;i++){
//   createStar(i);
// // }
// function createLoop(){
// for(idNumber=1; idNumber<50; idNumber++){
//   if (document.getElementById(`${idNumber}`)==null){
//     var eachStar= createStar(idNumber)
//     eachStar.animate(
//       [
//         {
//           top: `${eachStar.getBoundingClientRect().top}px`,
//           left: `${eachStar.getBoundingClientRect().left}px`,
//           opacity: 1
//         },
//         {
//         top: `${eachStar.getBoundingClientRect().top + Math.random()*500}px`,
//           left: `${eachStar.getBoundingClientRect().left + Math.random()*500}px`,
//           opacity: 0},
//       ],
//       {duration: 2000,
//       iteration: Infinity,}
//     )
//     if (eachStar.getBoundingClientRect().top>1024 || eachStar.getBoundingClientRect().left > 512 ){
//       eachStar.remove();
//     }
// var id='1'
// if (document.getElementById(id)==null){
// var eachStar=createStar(id)
//   }
// return eachStar;
// }
// var trial_star= createStar('1');
// {
//   trial_star.animate(
//     [
//       {
//         top: `${trial_star.getBoundingClientRect().top}px`,
//         left: `${trial_star.getBoundingClientRect().left}px`,
//         opacity: 1
//       },
//       {
//       top: `${trial_star.getBoundingClientRect().top + Math.random()*500}px`,
//         left: `${trial_star.getBoundingClientRect().left + Math.random()*500}px`,
//         opacity: 0},
//     ],
//     {duration: 2000,
//       iteration: Infinity},
//   )
//     }
  // if (trial_star.getBoundingClientRect().top>1024 || trial_star.getBoundingClientRect().left > 512 ){
  //         trial_star.remove();
  //         trial_star= createStar('1');
  //       }

  
  
  // eachStar=document.getElementById(`${idNumber}`)
// function removeLoop(){
//     document.getElementById(`${Math.floor(Math.random() * 50)}`).remove()
// }
// setInterval(createLoop, 10000)
// setInterval(removeLoop, 2000)
// console.log(document.querySelector('parentStar : nth-childs(3)'));
// for(count=1; count<50; count++){
//   let childs = document.querySelector(`.parentStar : nth-child(${count})`)
// console.log(childs.getBoundingClientRect().top)
// childs.animate(
//   [
//     {top: `${childs.getBoundingClientRect().top}px`},
//     {top: `${childs.getBoundingClientRect().top + 100}px`},
//   ],
//   {duration: 2000,
//   iterations: Infinite,}
// )

// let followDiv = document.createElement('div');
//   followDiv.style.cssText = 'height: 20px; width: 20px; background-color: white; border-radius: 50%; position: absolute; z-index: -2;';
//   document.getElementById('home').appendChild(followDiv);

// const mousePos = (e) =>{
//   followDiv.style.left = e.pageX + 'px';
//   console.log("mouse position" + e.pageX);
//   console.log("mouse position" + e.pageY);
//   followDiv.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', mousePos);

