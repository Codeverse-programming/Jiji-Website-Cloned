
// var fullimgbox = document.querySelector("#fullimgbox");
// var fullimg = document.querySelector("#fullimg");

// function openFullImg(pic) {
//     fullimgbox.style.display = "flex";
//     fullimg.src = pic;
// }

// function closeFullImg() {
//     fullimgbox.style.display = "none"
// }

const headerSC = () => {
  // const header = document.querySelector(".js-header");

  window.addEventListener("scroll", function(){
    if(this.scrollY > 0){
    // document.querySelector(".wrapper") .style.position = "fixed"
      
  }else{
    document.querySelector(".js-header") .style.position = "static"
  }
  })
}
headerSC();

// document.querySelector(".whole-body") .addEventListener("scroll", function(){
//   document.querySelector(".wrapper") .style.position = "fixed"
// })

// alert("hello world")
              