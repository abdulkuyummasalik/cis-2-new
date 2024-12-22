const galleryData1 = [
    { src: 'https://via.placeholder.com/400x300?text=Foto+1', title: 'Kegiatan 1', description: 'Deskripsi singkat kegiatan 1.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+2', title: 'Kegiatan 2', description: 'Deskripsi singkat kegiatan 2.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+3', title: 'Kegiatan 3', description: 'Deskripsi singkat kegiatan 3.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+4', title: 'Kegiatan 4', description: 'Deskripsi singkat kegiatan 4.' },
];

const galleryData2 = [
    { src: 'https://via.placeholder.com/400x300?text=Foto+5', title: 'Kegiatan 5', description: 'Deskripsi singkat kegiatan 5.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+6', title: 'Kegiatan 6', description: 'Deskripsi singkat kegiatan 6.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+7', title: 'Kegiatan 7', description: 'Deskripsi singkat kegiatan 7.' },
    { src: 'https://via.placeholder.com/400x300?text=Foto+8', title: 'Kegiatan 8', description: 'Deskripsi singkat kegiatan 8.' },
];


// Enhanced function to populate swiper slides
function populateSwiper(containerId, images) {
    const swiperWrapper = document.querySelector(`#${containerId} .swiper-wrapper`);
    images.forEach(({ src, title, description }) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <div class="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <img src="${src}" alt="${title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 class="text-lg font-semibold">${title}</h3>
                        <p class="text-sm opacity-90">${description}</p>
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);

        // Lightbox integration
        slide.addEventListener('click', () => {
            openLightbox(src, title, description);
        });
    });
}

// Lightbox logic
function openLightbox(src, title, description) {
    const lightbox = document.createElement('div');
    lightbox.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
    lightbox.innerHTML = `
        <div class="relative w-full max-w-3xl mx-auto p-4">
            <img src="${src}" alt="${title}" class="w-full max-h-[80vh] object-contain rounded-lg">
            <div class="mt-4 text-center text-white">
                <h3 class="text-xl font-semibold">${title}</h3>
                <p class="text-sm opacity-80">${description}</p>
            </div>
            <button class="absolute top-4 right-4 text-white text-xl" onclick="closeLightbox()">✕</button>
        </div>
    `;
    document.body.appendChild(lightbox);
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.querySelector('.fixed.inset-0');
    if (lightbox) lightbox.remove();
}


// Populate swipers
populateSwiper('gallery-swiper-1', galleryData1);
populateSwiper('gallery-swiper-2', galleryData2);

// Initialize Swipers with enhanced options
const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
};

const swiper1 = new Swiper('#gallery-swiper-1', {
    ...swiperOptions,
    on: {
        slideChange: function () {
            updateSlideStyles(this);
        },
    },
});

const swiper2 = new Swiper('#gallery-swiper-2', {
    ...swiperOptions,
    on: {
        slideChange: function () {
            updateSlideStyles(this);
        },
    },
});

// Function to update slide styles
function updateSlideStyles(swiper) {
    swiper.slides.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
            slide.style.opacity = '1';
            slide.style.transform = 'scale(1.05)';
        } else {
            slide.style.opacity = '0.7';
            slide.style.transform = 'scale(1)';
        }
    });
}

// Enhanced navigation buttons
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

nextButton.addEventListener('click', () => {
    swiper1.slideNext();
    swiper2.slideNext();
});

prevButton.addEventListener('click', () => {
    swiper1.slidePrev();
    swiper2.slidePrev();
});

// Initialize slide styles
updateSlideStyles(swiper1);
updateSlideStyles(swiper2);