
🧳 Trip Planner — Smart AI-Powered Travel Itinerary Generator
A full-stack travel planning web application that uses AI to generate personalized travel itineraries. Users can input destination, travel dates, and preferences, and receive a day-by-day plan with attractions, activities, and maps. Built with React, Vite, Firebase, and modern frontend tooling.



🚀 Features
🔍 AI-Generated Itineraries: Enter your travel preferences and let AI create personalized travel plans.

🗓️ Day-wise Planner: Clean UI showing itinerary broken down by day.

📍 Map Integration: View attractions on embedded maps.

🔐 Authentication: Secure login/signup using Firebase Auth.

☁️ Realtime Storage: Itineraries saved and retrieved via Firebase Firestore.

🧠 Smart UI: Smooth, responsive design using Tailwind CSS and modern React practices.



📁 Folder Structure
bash
Copy
Edit
Trip Planner/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Main pages (Home, Planner, etc.)
│   ├── firebase/            # Firebase config and helper functions
│   ├── utils/               # Utility functions (e.g., date parsing)
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── .env                     # Environment variables
├── package.json             # Project metadata & dependencies
└── vite.config.js           # Vite bundler config


🛠️ Tech Stack
Frontend	   Backend	    Database	   Hosting
React	       Firebase	    Firestore	   vercel
Tailwind	   Firebase Auth		
Vite	



🔐 Environment Variables (.env)
Make sure to create a .env file in the root:

VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...


📦 Installation & Setup
# Clone the repository
git clone https://github.com/yourusername/trip-planner.git
cd trip-planner

# Install dependencies
npm install

# Start development server
npm run dev



💡 How It Works
User Input: Location, number of days, and travel preferences.

AI Call (Optional): AI generates travel plan (can be integrated with OpenAI or similar).

Itinerary Structure: Stored as map (e.g., day1, day2, ...) in Firebase.

Rendering: Each day displays activities, location, and timing.



🔮 Future Improvements
🌐 Multi-language support

🗺️ Offline map access

🧑‍🤝‍🧑 Group trip collaboration

📱 Mobile PWA support



🙌 Credits
Built by Md Sajid and contributors using modern web tools.

📄 License
This project is licensed under the MIT License.



