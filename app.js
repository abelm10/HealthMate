
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    // Apply saved theme on load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }
        });
    }
});


const form = document.getElementById("symptomForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const symptoms = [...document.querySelectorAll("input:checked")]
            .map(cb => cb.value);

        localStorage.setItem("symptoms", JSON.stringify(symptoms));
        window.location.href = "results.html";
    });
}

const resultsDiv = document.getElementById("results");

if (resultsDiv) {
    const symptoms = JSON.parse(localStorage.getItem("symptoms")) || [];
    const skeleton = document.getElementById("skeleton");
if (skeleton) skeleton.remove();
    let reportData = [];

    fetch("http://127.0.0.1:5000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms })
    })
    .then(res => res.json())
    .then(data => {
    reportData = data;   

    let html = "";
    data.forEach(item => {
        html += `
            <h3>${item.condition}</h3>
            <p><strong>Matched:</strong> ${item.matched_symptoms.join(", ")}</p>
            <ul>${item.remedies.map(r => `<li>${r}</li>`).join("")}</ul>
            <hr>
        `;
    });

    resultsDiv.innerHTML = html || "<p>No matching conditions found.</p>";
    document.getElementById("downloadPdf").disabled = false;

});

}

const fab = document.getElementById("feedbackFab");
const panel = document.getElementById("feedbackPanel");

if (fab && panel) {
    fab.addEventListener("click", () => {
        panel.style.display =
            panel.style.display === "block" ? "none" : "block";
    });
}

const sendBtn = document.getElementById("sendFeedback");
const feedbackText = document.getElementById("feedbackText");

if (sendBtn && feedbackText && panel) {
    sendBtn.addEventListener("click", () => {
        if (!feedbackText.value.trim()) {
            alert("Please enter some feedback 🙂");
            return;
        }

        alert("Thank you for your feedback!");
        feedbackText.value = "";
        panel.style.display = "none";
    });
}



const pdfBtn = document.getElementById("downloadPdf");

if (pdfBtn) {
    pdfBtn.addEventListener("click", () => {
        const name = document.getElementById("userName").value;
        const age = document.getElementById("userAge").value;
        const gender = document.getElementById("userGender").value;

        if (!name || !age || !gender) {
            alert("Please fill in name, age, and gender.");
            return;
        }

        const printable = document.createElement("div");
        printable.innerHTML = `
            <h2>HealthMate Report</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <hr>
            ${document.getElementById("results").innerHTML}
            <p style="margin-top:20px;font-size:12px;">
                Disclaimer: This report is for awareness only and not a medical diagnosis.
            </p>
        `;

        html2pdf().from(printable).save("HealthMate_Report.pdf");
    });
}
