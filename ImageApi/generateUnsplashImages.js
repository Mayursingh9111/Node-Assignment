
const fs = require("fs");
const axios = require("axios");

const ACCESS_KEY = "Bn0EgsVvcO3KK0Mh5uX_1tzHgMXAaAkDVJJaUAJLHQk";
const API_URL = "https://api.unsplash.com/photos/random";

const fetchRandomImage = async (i) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        client_id: ACCESS_KEY,
        count: 1
      }
    });
    
    
    return {
      id: i,
      title: response.data[0].alt_description || "Random Unsplash Image",
      url: response.data[0].urls.full
    };
  } catch (error) {
    console.error("Error fetching image:", error.message);
    return null;
  }
};

const generateImageData = async () => {
  const images = [];

  for (let i = 0; i < 50; i++) {
    console.log(`Fetching image ${i + 1}/50...`);
    const image = await fetchRandomImage(i+1);
    if (image) {
      images.push(image);
    }
  }


  fs.writeFile("unsplashImages.json", JSON.stringify(images), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("✅ unsplashImages.json file generated successfully!");
    }
  });
};


generateImageData();
