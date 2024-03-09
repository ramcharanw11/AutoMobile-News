const newsData = [
  {
    title: "TATA's Production hike...",
    imageUrl: "https://t.ly/ewHK6",
    description: " Tata Motors to Increase Commercial Vehicle Prices by Up to 2% in April",
    link: "https://t.ly/ZUbCQ"
  },
  {
    title: "New Ev's on Board",
    imageUrl: "mg-hector-2024-042711681-16x9_0.jpg.avif",
    description: " MG Motor India Eyes Two New Car Launches, Foresees EV Tipping Point",
    link: "https://t.ly/2Q_Y5"
  },
  // Add more news items here
  {
    title: "Boosting EV's",
    imageUrl: "https://t.ly/-rM5V",
    description: " Ford to Boost EV Software Capabilities in Chennai, Adding 3,000 Jobs",
    link: "https://t.ly/K05rV"
  },
];

// Function to dynamically generate news cards
function generateNewsCards() {
  const newsContainer = document.getElementById("news-container");

  newsData.forEach(news => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
      <div class="card">
        <img src="${news.imageUrl}" class="card-img-top" alt="${news.title}">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text">${news.description}</p>
          <a href="${news.link}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;

    newsContainer.appendChild(card);
  });
}

// Call the function to generate news cards
generateNewsCards();
