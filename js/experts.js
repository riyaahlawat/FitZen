const expertsData = [
    {
        name: "Krushal Verma",
        role: "Gym Trainer",
        description: "Certified personal trainer with 5+ years of experience.",
        instagram: "@fit_krushal",
        image: "./assets/image1.jpg" // Replace with actual image URL
    },
    {
        name: "Ravi Kumar",
        role: "Yoga Teacher",
        description: "Expert in Ashtanga yoga with 10 years of teaching experience.",
        instagram: "@ravi_yoga",
        image: "./assets/image4.webp" // Replace with actual image URL
    },
    {
        name: "Dr. Neha Gupta",
        role: "Dietitian",
        description: "Registered dietitian specializing in personalized meal plans.",
        instagram: "@dr_neha_dietitian",
        image: "./assets/image3.jpg" // Replace with actual image URL
    },
];

const expertsContainer = document.getElementById('experts');

expertsData.forEach(expert => {
    const expertCard = document.createElement('div');
    expertCard.className = 'expert-card';
    expertCard.innerHTML = `
        <img src="${expert.image}" alt="${expert.name}" class="expert-image" />
        <h2>${expert.name}</h2>
        <p><strong>${expert.role}</strong></p>
        <p>${expert.description}</p>
        <p>Instagram: <a href="https://instagram.com/${expert.instagram.replace('@', '')}" target="_blank">${expert.instagram}</a></p>
    `;
    expertsContainer.appendChild(expertCard);
});
