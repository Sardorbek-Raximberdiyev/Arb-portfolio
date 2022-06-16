const elDarkMore = document.querySelector('.dark-mode');
const elDarkMoreCheked = document.querySelector('.dark-more__cheked');

elDarkMoreCheked.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
wadawd