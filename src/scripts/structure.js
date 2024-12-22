const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
  },
});

const anggota = [
  {
    nama: "Andi Prasetyo",
    jabatan: "Ketua",
    warna: "bg-blue-600",
    foto: "https://via.placeholder.com/120",
  },
  {
    nama: "Rani Amelia",
    jabatan: "Wakil Ketua",
    warna: "bg-green-600",
    foto: "https://via.placeholder.com/120",
  },
  {
    nama: "Siti Nurhaliza",
    jabatan: "Sekretaris",
    warna: "bg-purple-600",
    foto: "https://via.placeholder.com/120",
  },
  {
    nama: "Muhammad Rizky",
    jabatan: "Bendahara",
    warna: "bg-yellow-600",
    foto: "https://via.placeholder.com/120",
  },
];

const swiperWrapper = document.getElementById("swiper-wrapper");

anggota.forEach((anggota) => {
  const slide = document.createElement("div");
  slide.className =
    "swiper-slide bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl";
  slide.innerHTML = `
            <img src="${anggota.foto}" alt="${anggota.nama}" class="w-24 h-24 mb-4 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110">
            <span class="${anggota.warna} text-white px-3 py-1 rounded-full text-sm mb-2 transition-colors duration-300">${anggota.jabatan}</span>
            <h4 class="text-lg font-medium text-gray-800 transition-colors duration-300 hover:text-blue-900">${anggota.nama}</h4>
        `;
  swiperWrapper.appendChild(slide);
});
