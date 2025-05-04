 <script>
    const quotesme=[
        "Believe in yourself!",
      "You can do it!",
      "Never give up!",
      "Dream big!",
      "Keep learning!",
      "Stay positive!",
      "Work hard, stay humble!"
    ];

    const but=document.getElementById("button");
    const quoteshi=document.getElementById("quoteText");
 

    // window.onload = function () {
    but.addEventListener("click", function(){
        const randomIndex= Math.floor(Math.random() * quotesme.length);
        quoteshi.textContent=quotesme[randomIndex];
        quoteshi.style.display = "block";
        but.textContent = "Next Quote";
        
    });
// };

   

     </script>
