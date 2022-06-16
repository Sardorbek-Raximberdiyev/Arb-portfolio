const elDarkMore = document.querySelector('.dark-mode');
const elDarkMoreCheked = document.querySelector('.dark-more__cheked');

elDarkMoreCheked.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});


// document.addEventListener("DOMContentLoaded", function () {
//   const theme = localStorage.getItem("theme", "dark");
//   const elDarkMoreCheked = document.getElementById("chk");

//   if (theme === "dark") {
//     document.documentElement.classList.add("dark-mode");
//   } else {
//     document.documentElement.classList.remove("dark-mode");
//   }

//   elDarkMoreCheked.addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark-mode");

//     if (document.documentElement.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark");
//     } else {
//       localStorage.setItem("theme", "light");
//     }
//   });
// });