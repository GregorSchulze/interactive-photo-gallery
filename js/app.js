// baguetteBox.run('.gallery');
// const search = new Filter('search', 'data-caption');

// ===== My Search Filter =====
const searchInput = document.querySelector('#search');
const images = Array.from(document.querySelectorAll('.image'));
const dataCaption = images.map(image => image.getAttribute('data-caption'));

function searchFilter() {
    const searchDataCaption = searchInput.value.toLowerCase();
  
    images.forEach((image, photoIndex) => {

      const caption = dataCaption[photoIndex].toLowerCase();
      const container = image.parentElement;

      if (caption.includes(searchDataCaption)) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    });
}

searchInput.addEventListener('input', searchFilter);

// ===== Baguette Box =====
window.addEventListener('load', () => {
    baguetteBox.run('.gallery', {
      // Custom baguetteBox
      noScrollbars: true,
      overlayBackgroundColor: 'rgba(0,0,0,100)'
    });
});