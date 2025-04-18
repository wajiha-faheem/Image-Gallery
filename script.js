const filterButtons = document.querySelectorAll('.filter-btn');
const imageItems = document.querySelectorAll('.image-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    filterButtons.forEach(btn => btn.classList.remove('active'));
   
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    imageItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
