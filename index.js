"use strict";
(function() {

  const FALLBACK_LOCATION = {
    x: 47.65946487237713,
    y: -122.30894872348843
  };
  // const restaurants = [
  //   {
  //     name: "McDonald's",
  //     waitTime: 5,
  //     walkTime: 3,
  //     images: [
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200"
  //     ]
  //   },
  //   {
  //     name: "Wendy's",
  //     waitTime: 11,
  //     walkTime: 3,
  //     images: [
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200"
  //     ]
  //   },
  //   {
  //     name: "Subway",
  //     waitTime: 3,
  //     walkTime: 3,
  //     images: [
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200"
  //     ]
  //   },
  //   {
  //     name: "Dick's",
  //     waitTime: 2,
  //     walkTime: 3,
  //     images: [
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200",
  //       "https://picsum.photos/200"
  //     ]
  //   },
  // ];
  const restaurants =[
    {
      place_id: 'ChIJdS0Vx4cUkFQRv-UDFEvfpKY',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png'],
      name: 'Silver Cloud Hotel - University District',
      location: { lat: 47.6658333, lng: -122.2994444 },
      walkTime: 27,
      waitTime: 5
    },
    {
      place_id: 'ChIJzZzBbfQUkFQRP0f0nUznInY',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Portage Bay Cafe - on Roosevelt',
      location: { lat: 47.6577808, lng: -122.3175219 },
      walkTime: 7,
      waitTime: 8
    },
    {
      place_id: 'ChIJd5TY51gUkFQRU_h3DzLnCi4',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: "Dick's Drive-In",
      location: { lat: 47.6610617, lng: -122.3277773 },
      walkTime: 9,
      waitTime: 4
    },
    {
      place_id: 'ChIJKaC2QvMUkFQRWVvn71SBmuY',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png'],
      name: 'Big Time Brewery & Alehouse',
      location: { lat: 47.657851, lng: -122.313492 },
      walkTime: 1,
      waitTime: 14
    },
    {
      place_id: 'ChIJ9yhJrvQUkFQRbsWNMgL3lhE',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Chipotle Mexican Grill',
      location: { lat: 47.6592399, lng: -122.3134023 },
      walkTime: 36,
      waitTime: 18
    },
    {
      place_id: 'ChIJaZE6QvMUkFQRXCfaq6_QnBE',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png'],
      name: 'Cafe Solstice',
      location: { lat: 47.6574076, lng: -122.312937 },
      walkTime: 20,
      waitTime: 18
    },
    {
      place_id: 'ChIJ_6PM3vAUkFQRKmNERgd3N8M',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: "Voula's Offshore Cafe",
      location: { lat: 47.65466319999999, lng: -122.3215434 },
      walkTime: 9,
      waitTime: 2
    },
    {
      place_id: 'ChIJ_VxjXmAUkFQRrWTepnXcx34',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Mamma Melina Ristorante & Pizzeria',
      location: { lat: 47.6665008, lng: -122.300928 },
      walkTime: 32,
      waitTime: 16
    },
    {
      place_id: 'ChIJcZuejIoUkFQRUwz0PNYZIUM',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Thai Tom',
      location: { lat: 47.6625436, lng: -122.3132367 },
      walkTime: 13,
      waitTime: 17
    },
    {
      place_id: 'ChIJreTBgIcUkFQRKh_jcEGENNY',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: "McDonald's",
      location: { lat: 47.6677401, lng: -122.3004006 },
      walkTime: 21,
      waitTime: 18
    },
    {
      place_id: 'ChIJQ0ZVvGYUkFQRbxmrTWKeLCg',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Taste of India',
      location: { lat: 47.66903800000001, lng: -122.3175972 },
      walkTime: 10,
      waitTime: 0
    },
    {
      place_id: 'ChIJG_j0afMUkFQROPWTaerWo9E',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png'],
      name: "Shultzy's Bar & Grill",
      location: { lat: 47.65728799999999, lng: -122.312969 },
      walkTime: 0,
      waitTime: 16
    },
    {
      place_id: 'ChIJ74deTF8UkFQR5XyMRQ7lDz4',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png'],
      name: "Kate's Pub",
      location: { lat: 47.6612167, lng: -122.3246122 },
      walkTime: 9,
      waitTime: 13
    },
    {
      place_id: 'ChIJm2i9WPMUkFQRQ8B_XnsrsTc',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png'],
      name: 'Starbucks',
      location: { lat: 47.65822, lng: -122.313383 },
      walkTime: 12,
      waitTime: 10
    },
    {
      place_id: 'ChIJwVbit2EUkFQRbDZRK7pQSkk',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Cedars in University District',
      location: { lat: 47.66472649999999, lng: -122.3145372 },
      walkTime: 2,
      waitTime: 9
    },
    {
      place_id: 'ChIJfUK_IPEUkFQR4u43oRHlUZw',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Northlake Tavern & Pizza House',
      location: { lat: 47.6547347, lng: -122.3213918 },
      walkTime: 9,
      waitTime: 15
    },
    {
      place_id: 'ChIJAwwZrvQUkFQRu6zb8LQWYig',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png'],
      name: 'Finn MacCool’s Irish Public House',
      location: { lat: 47.658867, lng: -122.31339 },
      walkTime: 28,
      waitTime: 18
    },
    {
      place_id: 'ChIJo6Dh_4UUkFQRv4deKp03S6w',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Veggie Grill',
      location: { lat: 47.66288, lng: -122.298581 },
      walkTime: 3,
      waitTime: 19
    },
    {
      place_id: 'ChIJy7wT-IUUkFQR_p6A7eS0SZU',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Piatti',
      location: { lat: 47.6622167, lng: -122.2979556 },
      walkTime: 18,
      waitTime: 13
    },
    {
      place_id: 'ChIJ0ZAVeH0UkFQR_Ude2Bmp3IY',
      images: [ 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
      name: 'Subway',
      location: { lat: 47.66810219999999, lng: -122.3009832 },
      walkTime: 10,
      waitTime: 1
    }
  ];

  window.addEventListener('load', init);

  function init() {
    let x = document.getElementById('coords');
    loadRestaurants();
    // getLocation(x);
  }

  async function loadRestaurants() {
    let restaurantSection = document.getElementById('restaurants');
    for (let restaurant of restaurants) {
      let restaurantBox = gen('a');
      restaurantBox.href = 'https://www.google.com/maps/search/?api=1&query=' +
        restaurant.location.lat + '%2C' + restaurant.location.lng +
        '&query_place_id=' + restaurant.place_id;
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

  // function getLocation(x) {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }

  // function showPosition(position) {
  //   let x = document.getElementById("coords");
  //   x.innerHTML = "Latitude: " + position.coords.latitude +
  //   "<br>Longitude: " + position.coords.longitude;
  // }

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