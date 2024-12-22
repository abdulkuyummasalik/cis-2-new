const angkatanData = {
  2021: [
    {
      nama: "Andi Prasetyo",
      nis: "123456",
      jurusan: "PPLG",
      foto: "https://via.placeholder.com/120",
    },
    {
      nama: "Rani Amelia",
      nis: "123457",
      jurusan: "DKV",
      foto: "https://via.placeholder.com/120",
    },
  ],
  2022: [
    {
      nama: "Dewi Sartika",
      nis: "223456",
      jurusan: "MPLB",
      foto: "https://via.placeholder.com/120",
    },
    {
      nama: "Faisal Akbar",
      nis: "223457",
      jurusan: "KLN",
      foto: "https://via.placeholder.com/120",
    },
  ],
  2023: [
    {
      nama: "Bayu Permana",
      nis: "323456",
      jurusan: "PMN",
      foto: "https://via.placeholder.com/120",
    },
    {
      nama: "Ika Suryani",
      nis: "323457",
      jurusan: "HTL",
      foto: "https://via.placeholder.com/120",
    },
  ],
  2024: [
    {
      nama: "Fauzan Hilmi",
      nis: "423456",
      jurusan: "TJKT",
      foto: "https://via.placeholder.com/120",
    },
    {
      nama: "Laila Zahra",
      nis: "423457",
      jurusan: "PPLG",
      foto: "https://via.placeholder.com/120",
    },
  ],
};

// Daftar siswa container
const daftarSiswaContainer = document.getElementById("daftar-siswa-container");

// Event listener untuk kartu angkatan
document.querySelectorAll("[id^='angkatan-']").forEach((card) => {
  card.addEventListener("click", () => {
    const angkatanId = card.id.split("-")[1];

    // Jika angkatan yang sama diklik lagi, sembunyikan daftar siswa
    if (daftarSiswaContainer.dataset.currentAngkatan === angkatanId) {
      daftarSiswaContainer.classList.add("hidden");
      daftarSiswaContainer.innerHTML = "";
      daftarSiswaContainer.dataset.currentAngkatan = ""; // Reset state
      return;
    }

    // Tampilkan daftar siswa baru
    daftarSiswaContainer.dataset.currentAngkatan = angkatanId;
    daftarSiswaContainer.innerHTML = `
        <h3 class="text-2xl font-bold text-blue-800 mb-4 text-center">
            Daftar Siswa Angkatan ${angkatanId}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${angkatanData[angkatanId]
              .map(
                (siswa) => `
                <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transform transition-all duration-300 hover:scale-105">
                    <img src="${siswa.foto}" alt="${siswa.nama}" class="w-16 h-16 rounded-full shadow-md">
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800">${siswa.nama}</h4>
                        <p class="text-sm text-gray-600">NIS: ${siswa.nis}</p>
                        <p class="text-sm text-gray-600">Jurusan: ${siswa.jurusan}</p>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;

    daftarSiswaContainer.classList.remove("hidden");
    daftarSiswaContainer.classList.add("animate-slide-down");
  });
});
