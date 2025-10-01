let user=0;
let machine=0;

const choices=document.querySelectorAll(".choice");
   console.log(choices);
choices.forEach((choice) => {
//    console.log(choices);
   choice.addEventListener("click", ()  => {
    const choiid=choice.getAttribute("id"); 
    console.log("choice was clicked",choiid);

   })
     
})
