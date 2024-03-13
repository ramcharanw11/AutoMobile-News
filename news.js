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
  {
    title: "Hyundai Creta N Line launched",
    imageUrl: "https://t.ly/pFxQw",
    description: " Hyundai announced the prices of the Creta N Line earlier this week, starting at Rs. 16.82 lakh (ex-showroom). This is the third N Line offering from the company after the i20 N line and the Venue N Line. Let us take a closer look at the mid-size SUV through a set of pictures.",
    link: "https://www.carwale.com/news/hyundai-creta-n-line-launched-now-in-pictures/"
  },
  {
    title: "Jeep to launch Hyundai Creta rival in India",
    imageUrl: "https://t.ly/lznz8",
    description: " Jeep India is working on bringing a new compact SUV to rival the likes of the Hyundai Creta, Kia Seltos, and other SUVs in the sub-Rs. 20 lakh space. This all-new SUV will sit below the Compass and will be based on the Citroen C3 Aircross.  The American automaker is evaluating a possible entry in the compact SUV segment in collaboration with Citroen, as both come under the Stellantis umbrella.",

                   
    link: "https://www.carwale.com/news/jeep-to-launch-hyundai-creta-rival-in-india/"
  },
  {
    title: "Mahindra Thar and Scorpio Classic gets a new colour",
    imageUrl: "https://t.ly/0iBd7",
    description: " Mahindra has silently updated the exterior paint scheme of its two popular SUVs, the Thar and the Scorpio Classic. Both SUVs now get a new shade of black colour replacing the brand’s signature Napoli Black exterior hue. At present, the Thar and Scorpio Classic can be had in five and four colour options, respectively.",
    link: "https://www.carwale.com/news/mahindra-thar-and-scorpio-classic-gets-a-new-colour/"
  },
  {
    title: "Mahindra XUV300 facelift launch timeline revealed",
    imageUrl: "https://imgd.aeplcdn.com/642x361/n/cw/ec/172459/mahindra-xuv300-facelift-right-rear-three-quarter1.jpeg?isig=0&q=80",
    description: " Mahindra has been testing the mid-life update of the XUV300 for a while, with spy shots revealing key features of the sub-four-metre SUV time and again. Now, we have got our hands on the launch timeline of the updated model.",
    link: "https://www.carwale.com/news/mahindra-xuv300-facelift-launch-timeline-revealed/"
  },
  {
    title: "Get discounts of up to Rs. 1.50 lakh on Maruti Jimny in March 2024",
    imageUrl: "https://imgd.aeplcdn.com/642x361/n/cw/ec/172239/maruti-suzuki-jimny-right-side-view0.jpeg?isig=0&q=80",
    description: " The Maruti Suzuki Jimny continues to attract heavy discounts to boost sales in the country. Currently, the lifestyle SUV is available with benefits of up to Rs. 1.50 lakh in March 2024. It can be had in two variants, namely, Zeta and Alpha at a starting ex-showroom price of Rs. 12.74 lakh.",
    link: "https://www.carwale.com/news/get-discounts-of-up-to-rs-150-lakh-on-maruti-jimny-in-march-2024/"
  },
  {
    title: "BMW launches electric X2 SUV",
    imageUrl: "https://imgd.aeplcdn.com/642x361/n/cw/ec/171983/bmw-ix1-left-front-three-quarter0-2.jpeg?isig=0&q=80",
    description: " The BMW X2 is the car that first introduced the coupe SUV concept in the premium compact segment. And now here we have the second generation model which is significantly larger and features a pronounced coupe silhouette. The same characteristics are also evident in the fully electric iX2 variant.",
    link: "https://www.carwale.com/news/bmw-launches-electric-x2-suv/"
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
          <h4 class="card-title">${news.title}</h4>
          <p class="card-text"><b>${news.description}</b></p>
          <a href="${news.link}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;

    newsContainer.appendChild(card);
  });
}

// Call the function to generate news cards
generateNewsCards();
