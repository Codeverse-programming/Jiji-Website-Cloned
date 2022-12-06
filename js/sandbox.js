document.querySelector(".fas").addEventListener("click",function(e){
  e.preventDefault()
  document.querySelector(".top-search").style.display="flex"
  document.querySelector(".top-search").style.marginTop= 20 +" %"
})

document.querySelector(".top-search").addEventListener("click",function(){
  document.querySelector(".top-search").style.display="none"
})

document.querySelector(".nav-item").addEventListener("mouseover",function(){
  document.querySelector(".images").style.display="block"
})

// document.querySelector(".images").addEventListener("mouseout",function(){
//   document.querySelector(".images").style.display="none"
// })


document.querySelector(".nav-link1").addEventListener("mouseover",function(){
  document.querySelector(".navbar-list").style.display="block"
})

document.querySelector(".nav-man").addEventListener("mouseout",function(){
  document.querySelector(".ordered").style.display="none"
})

document.querySelector(".serve").addEventListener("mouseover",function(){
  document.querySelector(".lists").style.display="block"
})

document.querySelector(".lists").addEventListener("mouseout",function(){
  document.querySelector(".lists").style.display="none"
})

