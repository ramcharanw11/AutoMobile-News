const newsData = [
    {
      title: "News 1",
      imageUrl: "mg-comet-ev-055153140-16x9_0.jpg.avif.....",
      description: "MG COMET EV gets new variants;Check details.... ",
      link: "https://www.mgmotor.co.in/vehicles/comet-ev-electric-car-in-india"
    },
    {
      title: "News 2",
      imageUrl: "mg-hector-2024-042711681-16x9_0.jpg.avif",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "#"
    },
    // Add more news items here
    {
        title: "News 2",
        imageUrl: "hyundai-venue-054130918-16x9_0.jpg.webp",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        link: "#"
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
  