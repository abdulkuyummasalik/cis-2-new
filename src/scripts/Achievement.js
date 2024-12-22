document.addEventListener('DOMContentLoaded', () => {
    // Data for awards
    const awards = [
        {
            title: 'Penghargaan Nasional',
            description: 'Diberikan atas kontribusi kami dalam pendidikan berkualitas.',
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Best School Award',
            description: 'Pengakuan internasional untuk komitmen kami terhadap pendidikan terbaik.',
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Innovation Award',
            description: 'Dihargai atas inovasi dalam sistem pembelajaran modern.',
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Education Excellence',
            description: 'Penghargaan atas dedikasi dalam membangun generasi berkualitas.',
            image: 'https://via.placeholder.com/400x300'
        },
    ];

    const slider = document.getElementById('award-slider');
    const modal = document.getElementById('award-detail-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Populate slider dynamically
    awards.forEach((award, index) => {
        const card = `
        <div data-index="${index}" class="award-card min-w-[300px] max-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer">
            <img src="${award.image}" alt="${award.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${award.title}</h3>
                <p class="text-gray-600">${award.description}</p>
            </div>
        </div>
    `;
        slider.innerHTML += card;
    });

    // Add click events to award cards
    document.querySelectorAll('.award-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-index');
            const award = awards[index];
            modalImage.src = award.image;
            modalTitle.textContent = award.title;
            modalDescription.textContent = award.description;
            modal.classList.remove('hidden', 'opacity-0');
            modal.classList.add('opacity-100', 'scale-100');
            document.body.classList.add('modal-open');
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('opacity-0', 'scale-90');
        modal.classList.remove('opacity-100', 'scale-100');
        document.body.classList.remove('modal-open');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Match duration of transition
    });

    // Slider navigation
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 320, behavior: 'smooth' });
    });
});