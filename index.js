"use strict";
(function() {

  const FALLBACK_LOCATION = {
    x: 47.65946487237713,
    y: -122.30894872348843
  };
  const restaurants = [
    {
      name: "McDonald's",
      waitTime: 5,
      walkTime: 3,
      images: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ]
    },
    {
      name: "Wendy's",
      waitTime: 11,
      walkTime: 3,
      images: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ]
    },
    {
      name: "Subway",
      waitTime: 3,
      walkTime: 3,
      images: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ]
    },
    {
      name: "Dick's",
      waitTime: 2,
      walkTime: 3,
      images: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ]
    },
  ];

  window.addEventListener('load', init);

  function init() {
    let x = document.getElementById('coords');
    loadRestaurants();
    getLocation(x);
  }

  async function loadRestaurants() {
    let restaurantSection = document.getElementById('restaurants');
    for (let restaurant of restaurants) {
      let restaurantBox = gen('div');
      restaurantBox.classList.add('restaurant');
      let restaurantPics = gen('div');
      restaurantPics.classList.add('images');
      for (let pic of restaurant.images) {
        let picImg = gen('img');
        picImg.src = pic;
        restaurantPics.appendChild(picImg);
      }
      restaurantBox.appendChild(restaurantPics);
      let restaurantName = gen('h2');
      restaurantName.classList.add('name');
      restaurantName.textContent = restaurant.name;
      restaurantBox.appendChild(restaurantName);
      let timeBox = gen('div');
      timeBox.classList.add('times');
      genTime(timeBox, 'wait', restaurant.waitTime);
      genTime(timeBox, 'walk', restaurant.walkTime);
      genTime(timeBox, 'total', restaurant.waitTime + restaurant.walkTime);
      restaurantBox.appendChild(timeBox);
      restaurantSection.appendChild(restaurantBox);
    }
  }

  function getLocation(x) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    let x = document.getElementById("coords");
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

  function genTime(box, type, min) {
    let timeBox = gen('div');
    timeBox.classList.add(type + 'Time');
    let icon = gen('i');
    if (type === 'walk') {
      icon.classList.add('fas');
      icon.classList.add('fa-walking');
    } else if (type === 'wait') {
      icon.classList.add('fas');
      if (min > 10) {
        icon.classList.add('fa-hourglass-start');
        icon.classList.add('slow');
      } else if (min > 4) {
        icon.classList.add('fa-hourglass-half');
        icon.classList.add('mid');
      } else {
        icon.classList.add('fa-hourglass-end');
        icon.classList.add('fast');
      }
    } else if (type === 'total') {
      icon.classList.add('far');
      icon.classList.add('fa-clock');
    }
    timeBox.appendChild(icon);
    let time = gen('p');
    time.textContent = min + ' min';
    timeBox.appendChild(time);
    box.appendChild(timeBox);
  }

  function gen(elem) {
    return document.createElement(elem);
  }

})();