// const images = document.querySelectorAll('.image-container img');
// const largeImage = document.querySelector('.large-image-container img');

// let currentIndex = 0;

// function showImage(index) {
//   currentIndex = index;
//   largeImage.src = images[index].src;
//   updateVisibleImages();
// }

// function updateVisibleImages() {
//   images.forEach((img, index) => {
//     if (index === currentIndex) {
//       img.classList.remove('hidden');
//     } else if (index >= currentIndex - 2 && index <= currentIndex + 2) {
//       img.classList.remove('hidden');
//     } else {
//       img.classList.add('hidden');
//     }
//   });
// }

// function moveUp() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     showImage(currentIndex);
//   }
// }

// function moveDown() {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     showImage(currentIndex);
//   }
// }

// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     showImage(index);
//   });
// });

// showImage(0);
const images = document.querySelectorAll('.image-container img');
const largeImage = document.querySelector('.large-image-container img');

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  largeImage.src = images[index].src;
  updateVisibleImages();
}

function updateVisibleImages() {
  images.forEach((img, index) => {
    if (index >= currentIndex && index <= currentIndex + 4) {
      img.classList.remove('hidden');
    } else {
      img.classList.add('hidden');
    }
  });
}

function moveUp() {
  if (currentIndex > 5) {
    currentIndex--;
    showImage(currentIndex);
  }
}

function moveDown() {
  if (currentIndex < images.length +5) {
    currentIndex++;
    showImage(currentIndex);
  }
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    showImage(index);
  });
});

showImage(0);
