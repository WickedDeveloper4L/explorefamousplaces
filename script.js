alert("Explore Famous places across the world with chris, hit the Explore button to travel!")

function generate(){
    let place = {
        "The Colosseum, Rome." : '<img src="The-colosseum.jpg" class="picture">',
        "The Taj Mahal, India" : '<img src="taj-mahal.jpg" class="picture">',
        "Statue of Liberty, NY USA." : '<img src="statue-of-liberty.jpg" class="picture">',
        "Machu Picchu, Peru." : '<img src="machu-picchu-peru.jpg" class="picture">',
        "The Acropolis, Athens." : '<img src="acropolis-moon-athens.jpg" class="picture">',
        "Pyramids of Giza, Egypt" : '<img src="pyramids-giza.jpg" class="picture">',
        "Great Wall of China." : '<img src="china-great-wall.jpg" class="picture">',
        "Angkor Wat, Cambodia." : '<img src="cambodia-angkor-wat-stone-faces.jpg" class="picture">',
        "Petra, Jordan." : '<img src="petra.jpg" class="picture">',
        "Grand Canyon, USA." : '<img src="canyon.jpg" class="picture">',
        "Stonehenge, England." : '<img src="stonehenge.jpg" class="picture">',
        "Borobudur, Indonesia." : '<img src="borobudur.jpg" class="picture">',
        "Sydney Opera House, Australia." : '<img src="opera-house.jpg" class="picture">',
        "Mount Kilimanjaro, Tanzania." : '<img src="kilimanjaro.jpg" class="picture">',
        "The Louvre, Paris." : '<img src="louvre-paris.jpg" class="picture">',
        "Forbidden City, China." : '<img src="forbidden-city.jpg" class="picture">',
        "Prague Castle, Czech Republic." : '<img src="prague-castle.jpg" class="picture">',
        "Chichen Itza, Mexico." : '<img src="itza-mexico.jpg" class="picture">',
        "Cristo Redentor, Rio de Janeiro." : '<img src="rio-de-janeiro.jpg" class="picture">',
        "Château de Versailles, France." : '<img src="versailles-france.jpg" class="picture">',
        "Mount Fuji, Japan." : '<img src="mount-fuji.jpg" class="picture">',
        "Central Park, New York City." : '<img src="central.jpg" class="picture">',
    }

    let locations = Object.keys(place);
    let location = locations[Math.floor(Math.random() * locations.length)];

    let image = place[location];
    
    document.getElementById("location").innerHTML = location;
    document.getElementById("image").innerHTML = image;
    


}