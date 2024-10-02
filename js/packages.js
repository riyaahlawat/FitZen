const packagesData = [
    {
        sNo: 1,
        title: "Live Wellness Plan",
        services: "Live exercises on weekdays, yoga on weekends.",
        trainers: "Krushal Verma (Gym Trainer), Ravi Kumar (Yoga Teacher), Dr. Neha Gupta (Dietitian)",
        type: "Live",
        price: "₹15,000/month",
        duration: "1 Month"
    },
    {
        sNo: 2,
        title: "Recorded Exercise Package",
        services: "Access to recorded workout sessions.",
        trainers: "Krushal Verma (Gym Trainer)",
        type: "Recorded",
        price: "₹8,000/month",
        duration: "1 Month"
    },
    {
        sNo: 3,
        title: "Live Yoga Retreat",
        services: "Live yoga sessions available on weekends.",
        trainers: "Ravi Kumar (Yoga Teacher)",
        type: "Live",
        price: "₹7,500/month",
        duration: "1 Month"
    },
    {
        sNo: 4,
        title: "Recorded Yoga Package",
        services: "Access to recorded yoga sessions anytime.",
        trainers: "Ravi Kumar (Yoga Teacher)",
        type: "Recorded",
        price: "₹5,000/month",
        duration: "1 Month"
    },
    {
        sNo: 5,
        title: "Diet Chart",
        services: "One-month customized diet plan.",
        trainers: "Dr. Neha Gupta (Dietitian)",
        type: "Recorded",
        price: "₹3,000/month",
        duration: "1 Month"
    }
];

const packagesContainer = document.getElementById('packages');

packagesData.forEach(pkg => {
    const packageRow = document.createElement('tr');
    packageRow.innerHTML = `
        <td>${pkg.sNo}</td>
        <td>${pkg.title}</td>
        <td>${pkg.services}</td>
        <td>${pkg.trainers}</td>
        <td>${pkg.type}</td>
        <td class="package-price">${pkg.price}</td>
        <td>${pkg.duration}</td>
        <td><button class="cta-button">Join Now</button></td>
    `;
    packagesContainer.appendChild(packageRow);
});
