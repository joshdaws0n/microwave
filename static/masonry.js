imagesLoaded( document.querySelector('.grid'), function( instance ) {
    console.log('all images are loaded');
    var msnry = new Masonry('.grid', {
                  itemSelector: '.grid-item',
              });
    var spinner = document.getElementById('photo-spinner');
    spinner.style.display = 'none';
    var photogrid = document.getElementById('photo-grid');
    photogrid.style.display = 'block';
  });