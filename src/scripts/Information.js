
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

const piketContent = [
    { day: "Senin", names: ["Ahmad", "Budi"], task: "Menyapu dan Menghapus Papan Tulis" },
    { day: "Selasa", names: ["Citra", "Dini"], task: "Mengambil Absen dan Membersihkan Meja Guru" },
    { day: "Rabu", names: ["Eka", "Fadli"], task: "Merapikan Buku di Perpustakaan" },
    { day: "Kamis", names: ["Gita", "Hadi"], task: "Membersihkan Jendela dan Papan Tulis" },
    { day: "Jumat", names: ["Ika", "Joko"], task: "Membersihkan Area Luar Ruang Kelas" }
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

// Render Piket Content
const piketContainer = document.getElementById('piket-content');
piketContent.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td class="py-2 px-3">${item.day}</td>
                    <td class="py-2 px-3">${item.names.join(", ")}</td>
                    <td class="py-2 px-3">${item.task}</td>
                `;
    piketContainer.appendChild(row);
});

// Set Excel Link
document.getElementById('excel-link').href = mapelExcel;
