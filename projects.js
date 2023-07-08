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
  
    const containerWidth = document.getElementById("sectionparent").offsetWidth;
    const containerHeight = document.getElementById("sectionparent").offsetHeight;
    const maxX = containerWidth - star.offsetWidth -3;
    const maxY = containerHeight - star.offsetHeight -3;
  
    // Generate initial positions within the container bounds
    let initialX = Math.random() * maxX;
    let initialY = Math.random() * maxY;
    star.style.left = `${initialX}px`;
    star.style.top = `${initialY}px`;
  
    document.getElementById('sectionparent').appendChild(star);
  
  
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
  
  for (let i = 0; i < 250; i++) {
    setTimeout(()=>{
      createStar(i)
    },50)
  }
  