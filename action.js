var moonText = document.getElementById("mnText");
function myFunction(efef) {
   if (efef.id == "moon"){
     console.log("monon");
     if (moonText.style.visibility === "hidden") {
       moonText.style.visibility = "visible";
     } else {
       moonText.style.visibility = "hidden";
     }
   }
}
