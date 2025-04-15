const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
   icon.addEventListener("click", function () {
      const section = this.closest(".question-answer");

      const iconPlus = section.querySelector(".plus");
      const iconMinus = section.querySelector(".minus");
      const hiddenParagraph = section.querySelector(".hidden-paragraph");

      if (
         hiddenParagraph.style.display === "none" ||
         !hiddenParagraph.style.display
      ) {
         hiddenParagraph.style.display = "flex";
         iconMinus.style.display = "flex";
         iconPlus.style.display = "none";
      } else {
         hiddenParagraph.style.display = "none";
         iconMinus.style.display = "none";
         iconPlus.style.display = "flex";
      }
   });
});

// const icons = document.querySelectorAll(".icon");

// icons.forEach((icon) => {
//    icon.addEventListener("click", function () {
//       // Sélectionner la section parente de l'icône cliquée
//       const section = this.closest(".question-answer");

//       // Sélectionner les éléments spécifiques à cette section
//       const iconPlus = section.querySelector(".plus");
//       const iconMinus = section.querySelector(".minus");
//       const hiddenParagraph = section.querySelector(".hidden-paragraph");

//       // Alterner l'affichage uniquement pour la section cliquée
//       if (
//          hiddenParagraph.style.display === "none" ||
//          !hiddenParagraph.style.display
//       ) {
//          hiddenParagraph.style.display = "flex";
//          iconPlus.style.display = "none";
//          iconMinus.style.display = "flex";
//       } else {
//          hiddenParagraph.style.display = "none";
//          iconPlus.style.display = "flex";
//          iconMinus.style.display = "none";
//       }
//    });
// });
