// Function to toggle visibility of skills or project sections
function toggleSection(sectionId) {
    const sectionContent = document.getElementById(sectionId);
    sectionContent.style.display = sectionContent.style.display === "none" ? "block" : "none";
}

// Function to show a selected tab and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; // Hide section by default
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = "block"; // Display the active section
    }

    // Update navigation tab styling
    const tabs = document.querySelectorAll('.nav a');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${sectionId}-tab`).classList.add('active');
}

// Initialize to show 'home' section on page load
showSection('home');
