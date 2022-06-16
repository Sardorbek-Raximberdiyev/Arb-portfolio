const elDarkMore = document.querySelector('.dark_more');
const elDarkMoreCheked = document.querySelector('.dark-more__cheked');

elDarkMoreCheked.addEventListener('click', function () {
  document.body.classList.toggle('dark_more');
});