document.addEventListener("DOMContentLoaded", function () {
    // State
    const names = ["Alice", "Bob", "Carol", "Dave", "Eva"]; 
    const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Photographer"]; 
    const freelancers = [];

    // Functionality
    function renderFreelancers() {
        const freelancersList = document.querySelector("#freelancers-list");
        freelancersList.innerHTML = ""; 

        freelancers.forEach((freelancer) => {
            const freelancerElement = document.createElement("div");
            freelancerElement.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
            freelancersList.appendChild(freelancerElement);
        });
    }

    function calculateAveragePrice() {
        const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        const averagePrice = freelancers.length > 0 ? totalPrices / freelancers.length : 0;
        return averagePrice.toFixed(2); // Round to two decimal places
    }

    function updateAveragePrice() {
        const averagePriceElement = document.querySelector("#average-price");
        averagePriceElement.textContent = `Average Starting Price: $${calculateAveragePrice()}`;
    }

    function generateRandomFreelancer() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
        return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
    }

    function addFreelancer() {
        const newFreelancer = generateRandomFreelancer();
        freelancers.push(newFreelancer);
        renderFreelancers();
        updateAveragePrice();
    }

    // Set interval to add a new freelancer every few seconds
    setInterval(addFreelancer, 7000); 
});
