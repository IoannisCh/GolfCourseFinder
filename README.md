# Golf Course Finder

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-blue.svg)](#)

Golf Course Finder is a geolocation-driven application designed to help users search, discover, and filter golf courses based on their real-time location, specific coordinates, or geographic regions. The application integrates third-party mapping solutions and location APIs to provide structured distance metrics, routing, and facility details.

---

## ✨ Features

- **Geospatial Search:** Find golf courses within a specified radius of your current location or a target city.
- **Interactive Mapping:** Visualizes golf course locations, boundaries, and clubhouses using dynamic map overlays.
- **Advanced Filtering:** Filter search results by course size (e.g., 9-hole vs. 18-hole), amenities, ratings, and driving range availability.
- **Distance Calculations:** Real-time distance matrix tracking showing travel times and routes to selected clubs.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend/Core Stack:** *[e.g., HTML5, CSS3, JavaScript ES6+ / React / Flutter - Update based on your language]*
- **Mapping APIs:** [Google Maps Platform](https://developers.google.com/maps) / [OpenStreetMap (Leaflet)](https://leafletjs.com/) / [Mapbox](https://www.mapbox.com/)
- **Geolocation Data:** HTML5 Geolocation API / [Foursquare Places API](https://location.foursquare.com/products/places/)

---

## 🏗️ Project Architecture

The repository maintains an organized layout to separate UI components, API clients, and geographic utility helpers:

GolfCourseFinder/
├── src/
│   ├── api/            # API clients for handling map tokens and place queries
│   ├── components/     # UI views, search bars, list layouts, and map cards
│   ├── utils/          # Distance calculators, coordinate parsers, and bounds helpers
│   └── main.js         # Application bootstrap vector
├── assets/             # Map markers, custom icons, and screenshots
├── .env.example        # Placeholder for required API credentials
├── README.md           # Project documentation
└── package.json        # Manifest file and project dependencies

### How it started

This repo was part of a University Semester assignment, that I built an Android Application that could locate nearby
Golf pitch and provide details on the current weather.

The app, as it was a university project, start with fixed locations presented to the user and uses google maps api
that can open Google maps after  user decides to select one of the courses.

The app has an open weather api, that is giving information of the current weather conditions of each golf course
to the user, with live data.

It is a foundation application, was tested on Android device ( Motorola Edge Neo 30).

##🚀 Ongoing Roadmap
[ ] Implement local browser caching (LocalStorage) for recently searched golf clubs.

[ ] Add offline routing capabilities using progressive web architectures.

[ ] Incorporate live weather API overlays directly onto the course detail windows.

[ ] Support custom user reviews, rating profiles, and personal score tracking.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## ✉️ Contact
Ioannis Chantolios - GitHub Profile
