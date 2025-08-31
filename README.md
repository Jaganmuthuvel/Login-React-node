🔐 React + Express Login System

This is a simple Login Application built with React (frontend) and Express.js (backend).
It demonstrates a basic authentication flow using React hooks (useState, useEffect, useNavigate), Axios for API calls, and a Node.js/Express server for validating credentials.

📂 Project Structure
project-root/
│── backend/              # Express server
│   ├── index.js          # Backend API
│
│── frontend/             # React application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Login Page
│   │   │   ├── Success.jsx    # Success UI
│   │   │   ├── Failure.jsx    # Failure UI
│   │   ├── App.jsx            # Main App with Routes
│   │   ├── main.jsx           # React entry point
│   ├── package.json
│
├── README.md

⚡ Features
React frontend with Tailwind CSS for styling.
Express backend with CORS enabled.
Simple login authentication (username + password).
Navigation to Success or Failure page based on validation.

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/react-express-login.git
cd react-express-login

2. Setup Backend
cd backend
npm install
node index.js

3. Setup Frontend
cd frontend
npm install
npm run dev

🔑 Default Credentials
Username: jagan
Password: 123

🚀 Usage
Open the React frontend (http://localhost:5173).
Enter username & password.
If credentials are correct → redirect to Success Page 🎉.
If credentials are wrong → redirect to Failure Page ❌.
📸 Screenshots
✅ Login Page
🎉 Success Page
❌ Failure Page

📚 Technologies Used
React (Frontend)
Express.js (Backend)
Axios (API calls)
React Router (Navigation)
Tailwind CSS (UI Styling)

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
