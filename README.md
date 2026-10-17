# ☁️ SkyNow – Weather App

A simple, responsive weather application built with **Next.js** and **Tailwind CSS**.
It uses the free [Open-Meteo API](https://open-meteo.com/) (no API key required) to show
live weather data for any city in the world.

## ✨ Features

- Current **temperature**, **humidity** and **wind speed**
- **Time** of the last reading and the data update **interval**
- Search any city (Open-Meteo Geocoding API); default city is Dhaka
- 4 pages: **Home**, **About**, **Services**, **Contact**
- Reusable **Header** and **Footer** components with navigation
- Fully **responsive** design (mobile, tablet, desktop) with a mobile menu
- Loading and error states for API requests

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Framework and routing |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layout |
| [Open-Meteo Forecast API](https://open-meteo.com/en/docs) | Weather data |
| [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) | City search |

## 📁 Project Structure

```
weather-app/
├── app/
│   ├── layout.js          # Root layout (Header + Footer)
│   ├── page.js            # Home page
│   ├── globals.css        # Tailwind styles
│   ├── about/page.js      # About page
│   ├── services/page.js   # Services page
│   └── contact/page.js    # Contact page (form)
├── components/
│   ├── Header.js          # Navigation bar
│   ├── Footer.js          # Footer
│   ├── WeatherCard.js     # Weather display + city search
│   └── AboutSection.js    # About section on the Home page
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/weather-app.git

# 2. Go to the project folder
cd weather-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## 🌐 API Used

Weather data request:

```
https://api.open-meteo.com/v1/forecast
  ?latitude=23.81&longitude=90.41
  &current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code
  &timezone=auto
```

City search request:

```
https://geocoding-api.open-meteo.com/v1/search?name=London&count=1
```

## 📄 Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Weather display and About section |
| About | `/about` | Short description of the app |
| Services | `/services` | Weather-related features |
| Contact | `/contact` | Simple contact form |

## 👤 Author

Your Name – [GitHub](https://github.com/<your-username>)

## 🙏 Acknowledgements

Weather data provided by [Open-Meteo](https://open-meteo.com/).
