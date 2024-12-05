const handleSearch = (event, elements) => {
  const searchTerm = event.taret.value.toLowerCase();
  elements.forEach((element) => {
    const caption = element.getAttribute("data-caption").toLowerCase();
    element.style.display =
      caption.includes(searchTerm) || !searchTerm ? "" : "none";
  });
};

// // Funktion für die Filterung
// const handleSearch = (event, elements) => {
//   const searchTerm = event.target.value.toLowerCase();
//   elements.forEach((element) => {
//     const caption = element.getAttribute("data-caption").toLowerCase();
//     element.style.display =
//       caption.includes(searchTerm) || !searchTerm ? "" : "none";
//   });
// };

// // Filter-Klasse
// class Filter {
//   constructor(inputId, dataAttribute) {
//     this.elements = document.querySelectorAll(`[${dataAttribute}]`);
//     const inputElement = document.querySelector(`#${inputId}`);
//     inputElement.addEventListener("input", (event) => {
//       handleSearch(event, this.elements);
//     });
//   }
// }

// // Anwendung
// // Neue Instanz der Filter-Klasse mit ID des Inputs und Attribut der zu filternden Elemente
// const searchFilter = new Filter("search", "data-caption");
