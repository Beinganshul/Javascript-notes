let btn = document.querySelector("button");

btn.addEventListener("click", function() {
   let h1 = document.querySelector("h1");
   let color = getRandomColor();
   h1.innerText = color;
   h1.style.color = color;
   console.log("color updated");
   let div = document.querySelector(".color-box");
   div.style.backgroundColor = color;
});

function getRandomColor() {
   let red = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let color = `rgb(${red}, ${blue}, ${green})`;        //!how to use string interpolation
   return color;
}

