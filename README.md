# 🧳 Trip Planner — AI-Powered Travel Itinerary Generator

A full-stack travel planning web application that uses **AI** to generate personalized travel itineraries. Users can input destination, travel dates, and preferences to receive a day-by-day plan with attractions, activities, and maps.

Built using **React**, **Vite**, **Firebase**, and modern frontend tooling.

---

## 🚀 Features

- 🔍 **AI-Generated Itineraries** — Get personalized travel plans based on your preferences.
- 🗓️ **Day-wise Planner** — Clean and structured display of each day's plan.
- 📍 **Map Integration** — View places and routes directly on the map.
- 🔐 **Authentication** — Secure login and signup with Firebase Auth.
- ☁️ **Realtime Storage** — Plans are saved and retrieved via Firebase Firestore.
- ⚡ **Blazing Fast UI** — Built with Vite and Tailwind for performance and responsiveness.

---

## 📂 Folder Structure

```
Trip Planner/
├── public/                  # Static files (icons, images, etc.)
├── src/
│   ├── components/          # Reusable UI components
│   ├── firebase/            # Firebase config and helper functions
│   ├── pages/               # Page components (Home, Planner, etc.)
│   ├── utils/               # Utility functions (e.g., date parsing)
│   ├── App.jsx              # Root React component
│   └── main.jsx             # App entry point
├── .env                     # Environment variables (not committed)
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                      |
|----------------|------------------------------|
| React          | Frontend library             |
| Vite           | Fast build tool              |
| Firebase Auth  | User authentication          |
| Firebase Firestore | Realtime database       |
| Tailwind CSS   | Utility-first CSS framework  |
| React Router   | Client-side routing          |

---

## 🔐 Environment Setup

Create a `.env` file in the root directory and add your Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📦 Getting Started

### 1. Clone the Repository
```
git clone https://github.com/yourusername/trip-planner.git
cd trip-planner
```
2. Install Dependencies
```
npm install
```
3. Start the Development Server
```
npm run dev
```

The app will be available at https://ai-trip-planner-blond-psi.vercel.app/.

---

## 💡 How It Works
User fills travel form — destination, dates, preferences.

AI (Google Gemini) generates itinerary plan per day.

Itinerary stored in Firebase in a map format:
```
itinerary: {
  day1: { plan: [...] },
  day2: { plan: [...] },
  ...
}
```

Frontend displays each day with time-slotted places, maps, etc.

---

## 📸 Screenshots
Add screenshots here: planner form, daily itinerary view, mobile responsive preview, etc.

---

## 🔮 Future Roadmap
🌐 Add multi-language support

🗺️ Offline mode and downloadable itinerary

👥 Shared group trips and itinerary collaboration

📱 Convert to Progressive Web App (PWA)

🧠 Better AI personalization using feedback

---

## 🙌 Author
Made with ❤️ by Md Sajid
Contributions are welcome!

## 📄 License
This project is licensed under the MIT License.




