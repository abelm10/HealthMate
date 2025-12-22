# 🩺 HealthMate

HealthMate is a smart, rule-based health awareness web application that helps users understand possible conditions and basic home remedies based on selected symptoms.
It is designed only for health awareness and early guidance and does not replace professional medical advice.

✨ Features

🧠 Symptom-based suggestions using a rule-based logic system

🧾 Clear health recommendations & home remedies

🌗 Light / Dark mode toggle

⏳ Animated loading skeleton for better UX

📄 Downloadable PDF health report

💬 Floating feedback widget (UI-ready)

🎨 Calming pastel teal UI with smooth animations

📱 Responsive and portfolio-friendly design

🛠️ Tech Stack
Frontend

HTML5

CSS3 (custom animations & themes)

JavaScript (Vanilla JS)

Backend

Python

Flask (REST API)

Data

JSON-based symptom → condition → remedy mapping

<img width="323" height="474" alt="image" src="https://github.com/user-attachments/assets/261f8efc-2591-497f-a680-a94c6fa874cb" />


🚀 How It Works

User selects symptoms on the home page

Selected symptoms are stored locally

Frontend sends symptoms to Flask backend

Backend matches symptoms using rule-based logic

Results are displayed on a separate page

User can download a personalized PDF report

▶️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/healthmate.git
cd healthmate

2️⃣ Start the backend
cd backend
python app.py


The backend runs at:

http://127.0.0.1:5000

3️⃣ Open the frontend

Open frontend/index.html using:

VS Code Live Server or

Directly in your browser
