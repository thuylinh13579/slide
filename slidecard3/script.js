const smallImages = document.querySelectorAll('.slide-card__image:not(.slide-card__image--large)');

smallImages.forEach((smallImage) => {
  smallImage.addEventListener('click', (event) => {
    const largeImage = document.querySelector('.slide-card__image--large img');
    const smallImageSrc = event.target.getAttribute('src');
    largeImage.setAttribute('src', smallImageSrc);
  });
});
