 let button= document.querySelectorAll("button")
 console.dir(button)
//   button.onclick=function(){
//     console.log("button clicked")
//     alert("button was clicked")
//     prompt("click button")
//   }
// function sayhello(){
//     prompt("say anything")
//     alert("it says hello")
//     console.log("hello everyone!!")
// }
// function sayname(){
//     alert("my name is nam")
// }
// for(button of button){
//     button.onclick=sayhello
//     button.onclick=sayname
//     button.addEventListener("click",sayhello)
//     button.addEventListener("click",sayname)
    
//     }

// let btn= document.querySelector("button")
// btn.addEventListener("click",function(){
//     console.log("generate random colors")
//     let h3= document.querySelector("h3")
// let randomcolor=getrandomcolor()
// h3.innerText="randomcolors"
// console.log("color updated")
// })

// function getrandomcolor(){
//     let red=Math.floor(Math.random()*255)
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)
//     let color=`(${red},${green},${blue})`
//     return color
// }
//event listener for elements

// para1= document.querySelector("p")
// para1.addEventListener("click",function(){
//     console.log("this is a paragraph clicked by me")
//     console.log("by javascript ")
//     this.style.backgroundColor="green"
// })
//  let box= document.querySelector(".box")
// box.addEventListener("click",function(){
//     console.log("this is div")
//     console.log("hover by mouse")
//     this.style.backgroundColor="green"
// })
// let btn= document.querySelector("button")
// btn.addEventListener("click",function(){
//     console.log(this)
//     console.dir(this)
//     console.dir(this.innerText)
//     this.style.backgroundColor="green"
//     this.style.padding="10px"
// })
// let h1= document.querySelector("h1")
// h1.addEventListener("click",function(){
//     console.log(this)
//     console.dir(this)
//     console.dir(this.innerText)
//     this.style.backgroundColor="green"
    
// })
// let h3= document.querySelector("h3")
// h3.addEventListener("click",function(){
//     console.log(this)
//     console.dir(this)
//     console.dir(this.innerText)
//     this.style.backgroundColor="green"
    
// })



let h1= document.querySelector("h1")
let h3= document.querySelector("h3")
let p= document.querySelector("p")
let box= document.querySelector(".box")
let btn= document.querySelector("button")
 
function changeColor(){
    console.dir(this.innerText)
    this.style.backgroundColor="darkgreen"
    this.style.color="black"
    console.log("done this")
}
h1.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
p.addEventListener("click",changeColor)
box.addEventListener("click",changeColor)
btn.addEventListener("click",changeColor)

//keyboard events

input=document.querySelector("input")
// input.addEventListener("keydown",function(){
//     console.log("key pressed by me")
//     console.log("namss!!")
// })
input.addEventListener("keydown",function(event){
    console.log("key=", event.key)
    console.log("code=",event.code)
    console.log("key was pressed")
})




