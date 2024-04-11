var currentImageIndex = 0;
var images = [];

// Function to open the lightbox
function openLightbox(index) {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';
  showImage(index);
}

// Function to close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

// Function to show a specific image
function showImage(index) {
  var lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = images[index].src;
  currentImageIndex = index;
}

// Add click event listeners to all images
var gallery = document.getElementById('my-gallery');
var imgs = gallery.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
  images.push({
    src: imgs[i].src,
    alt: imgs[i].alt
  });
  imgs[i].addEventListener('click', function() {
    openLightbox(Array.from(imgs).indexOf(this));
  });
}

// Add click event listeners to navigation buttons
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
prevBtn.addEventListener('click', function() {
  if (currentImageIndex > 0) {
    showImage(currentImageIndex - 1);
  }
});
nextBtn.addEventListener('click', function() {
  if (currentImageIndex < images.length - 1) {
    showImage(currentImageIndex + 1);
  }
});

// Close lightbox when clicking outside the image
var lightbox = document.getElementById('lightbox');
lightbox.addEventListener('click', function(event) {
  if (event.target === this) {
    closeLightbox();
  }
});