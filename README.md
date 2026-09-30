#HealthMate

HealthMate is a simple health awareness web application where users can select their symptoms and get possible conditions along with basic home remedies and recommendations.

The project uses a rule-based system to match the symptoms entered by the user with predefined conditions. It is mainly built for health awareness and basic guidance, and is not meant to replace a doctor or professional medical advice.

✨ Features
Select symptoms and get possible condition suggestions
Basic home remedies and health recommendations
Light and dark mode
Loading animation while results are being processed
Download results as a PDF report
Feedback button
Responsive UI
Simple pastel teal theme with animations

<img width="323" height="474" alt="image" src="https://github.com/user-attachments/assets/261f8efc-2591-497f-a680-a94c6fa874cb" />

🛠️ Tech Used
Frontend
HTML
CSS
JavaScript
Backend
Python
Flask
Data
JSON files containing the symptom, condition and remedy mappings
🔄 How It Works

The basic flow of the application is:

The user selects their symptoms.
The selected symptoms are stored on the frontend.
The frontend sends the symptoms to the Flask backend.
The backend checks them against the predefined rules.
Possible conditions and recommendations are returned.
The results are displayed on the results page.
The user can download the results as a PDF.
🚀 Running the Project
1. Clone the repository
git clone https://github.com/abelm10/HealthMate.git
cd HealthMate
2. Run the backend
cd backend
python app.py

The Flask server should start at:

http://127.0.0.1:5000
3. Open the frontend

Open the frontend/index.html file using either:

VS Code Live Server
A web browser directly

Make sure the Flask backend is running when using the symptom checker.

⚠️ Note

HealthMate is a health awareness project, not a medical diagnosis tool. The results are generated using predefined rules and should not be treated as professional medical advice.
