// link all the button

const city = document.getElementById('city')
const all = document.getElementById('all')
const nature = document.getElementById('nature')
const animal = document.getElementById('animal')

// attached image's container

const image_container = document.querySelector('.image-container')
const gallery_item = document.querySelectorAll('.gallery-item')
const city_image = document.querySelectorAll('.city')
const nature_image = document.querySelectorAll('.nature')
const animal_image = document.querySelectorAll('.animal')

// functionalities of buttons

animal.addEventListener('click', function (e) {
    if (e.target.id === 'animal') {
        image_container.innerHTML = '' // clear the container

        // append each animal image element to the container
        animal_image.forEach(img => {
            image_container.appendChild(img.parentElement)
        })
    }
})

nature.addEventListener('click', function (e) {
    if (e.target.id === 'nature') {
        image_container.innerHTML = ''

        nature_image.forEach(img => {
            image_container.appendChild(img.parentElement)
        })
    }
})
city.addEventListener('click', function (e) {
    if (e.target.id === 'city') {
        image_container.innerHTML = ''

        city_image.forEach(img => {
            image_container.appendChild(img.parentElement)
        })
    }
})
all.addEventListener('click', function (e) {

    image_container.innerHTML = ''

    gallery_item.forEach(img => {
        image_container.appendChild(img)
    })

})

// grab all the lightbox buttons

const lightbox = document.getElementById('lightbox')
const lightboxImg = document.querySelector('.lightbox-img')
const closeBtn = document.querySelector('.close')
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')


// to convert the images into the array
let currentIndex = 0;
let currentImages = Array.from(document.querySelectorAll('.image-container img'))

// open lightbox on click
image_container.addEventListener('click', (e) =>{
    if (e.target.tagName === 'IMG') {
        lightbox.style.display = 'flex'
        lightboxImg.src = e.target.src;
        currentImages = Array.from(image_container.querySelectorAll('img'))
        currentIndex = currentImages.indexOf(e.target)
    }
});

// close lightbox
closeBtn.addEventListener('click', ()=>{
    lightbox.style.display = "none"
})

// next image
nextBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex].src;
});

// Previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
});


