
// Toggle Content Visibility
function toggleContent(id) {
    const slider = document.getElementById('content-slider');
    const content = document.getElementById(id);
    const isVisible = !content.classList.contains('hidden');

    // Hide all content
    document.querySelectorAll('.content').forEach(el => el.classList.add('hidden'));
    if (isVisible) {
        slider.classList.add('hidden');
    } else {
        slider.classList.remove('hidden');
        content.classList.remove('hidden');
    }
}

// Dynamic Content
const artikelContent = [
    {
        title: "Tips Belajar Efektif",
        description: "Pelajari cara belajar produktif dan menyenangkan.",
        image: "https://via.placeholder.com/300x200",
        time: "20 Desember 2024"
    },
    {
        title: "Manajemen Waktu",
        description: "Mengelola waktu untuk hasil maksimal.",
        image: "https://via.placeholder.com/300x200",
        time: "18 Desember 2024"
    }
];


const informasiContent = [
    { title: "Jam Operasional", icon: "fas fa-clock", detail: "07:00 - 16:00" },
    { title: "Alamat", icon: "fas fa-map-marker-alt", detail: "Jl. Pendidikan No.12, Jakarta" },
    { title: "Kontak", icon: "fas fa-phone", detail: "021-12345678" },
    { title: "Email", icon: "fas fa-envelope", detail: "info@sekolah.id" }
];



const mapelExcel = "link_to_your_excel_file.xlsx";

// Render Artikel Content
const artikelContainer = document.getElementById('artikel-content');
artikelContent.forEach(item => {
    const article = document.createElement('div');
    article.className = 'bg-white rounded-lg shadow-lg p-6';
    article.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover rounded-md mb-4">
                    <h4 class="text-lg font-semibold text-gray-800">${item.title}</h4>
                    <p class="text-gray-600 mb-2">${item.description}</p>
                    <small class="text-gray-400">${item.time}</small>
                `;
    artikelContainer.appendChild(article);
});

// Render Informasi Content
const informasiContainer = document.getElementById('informasi-content');
informasiContent.forEach(item => {
    const info = document.createElement('div');
    info.className = 'bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:bg-gray-100 transition duration-300';
    info.innerHTML = `
                    <i class="${item.icon} text-3xl text-green-500"></i>
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800">${item.title}</h4>
                        <p class="text-gray-600">${item.detail}</p>
                    </div>
                `;
    informasiContainer.appendChild(info);
});
// Data Jadwal Piket
const piketContent = [
    { day: "Senin", duties: [{ name: "Ahmad", task: "Menyapu" }, { name: "Budi", task: "Menghapus Papan Tulis" }] },
    { day: "Selasa", duties: [{ name: "Citra", task: "Mengambil Absen" }, { name: "Dini", task: "Membersihkan Meja Guru" }] },
    { day: "Rabu", duties: [{ name: "Eka", task: "Merapikan Buku di Perpustakaan" }, { name: "Fadli", task: "Mengelap Meja" }] },
    { day: "Kamis", duties: [{ name: "Gita", task: "Membersihkan Jendela" }, { name: "Hadi", task: "Menyapu Halaman" }] },
    { day: "Jumat", duties: [{ name: "Ika", task: "Menghapus Papan Tulis" }, { name: "Joko", task: "Membersihkan Area Luar Kelas" }] },
];

// Render Piket Content
const piketContainer = document.getElementById('piket-content');

// Fungsi untuk membuat grup berdasarkan hari
piketContent.forEach(item => {
    // Container untuk tiap hari
    const dayGroup = document.createElement('div');
    dayGroup.classList.add("p-4", "bg-white", "rounded", "shadow");

    // Header hari
    const dayHeader = document.createElement('h4');
    dayHeader.classList.add("text-lg", "font-bold", "text-gray-800", "mb-2");
    dayHeader.textContent = item.day;

    // Daftar tugas
    const dutyList = document.createElement('ul');
    dutyList.classList.add("list-disc", "ml-5", "space-y-1");

    // Menambahkan tugas ke dalam daftar
    item.duties.forEach(duty => {
        const dutyItem = document.createElement('li');
        dutyItem.textContent = `${duty.name} - ${duty.task}`;
        dutyList.appendChild(dutyItem);
    });

    // Menggabungkan elemen ke grup hari
    dayGroup.appendChild(dayHeader);
    dayGroup.appendChild(dutyList);

    // Menambahkan grup hari ke kontainer utama
    piketContainer.appendChild(dayGroup);
});


// Set Excel Link
document.getElementById('excel-link').href = mapelExcel;
