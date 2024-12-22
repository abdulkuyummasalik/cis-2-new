// Function to dynamically load HTML content into an element
function loadComponent(targetId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById(targetId).innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            document.getElementById(targetId).innerHTML = `<p>Error loading content.</p>`;
        });
}

// Load components into the corresponding placeholders
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "src/components/navbar.html");
    loadComponent("hero", "src/components/hero.html");
    loadComponent("profil", "src/components/profile.html");
    loadComponent("kontak", "src/components/contact.html");
    loadComponent("footer", "src/components/footer.html");
});
