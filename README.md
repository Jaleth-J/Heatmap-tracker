#  Heatmap Tracker – Visualize User Interaction in Real-Time

**Heatmap Tracker** is a lightweight, browser-based prototype that helps visualize user click behavior within a web interface.  
Built entirely with HTML, CSS, and JavaScript, it enables real-time interaction tracking and visual feedback without any backend or analytics platform.

---

## Features

- 🔴 **Click Heatmap Overlay** – Every user click is visualized with a fading heat dot on screen.
- 🧠 **Local Interaction Logging** – Click data is stored locally using `localStorage`, so no server is required.
- 📦 **Export Functionality** – One-click export to download all tracked interaction data as a `.json` file.
- 🧪 **Prototype-Ready** – Lightweight, fast to test, and easy to integrate into test environments or UX demos.

---

## Use Cases

- UX concept testing
- Interactive UI demos
- Classroom / workshop experiments
- Browser-based interaction studies
- Visual storytelling tools

---

## Getting Started

### 1. Clone or Download

Download or clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/heatmap-tracker.git

Or download the ZIP and unzip it into any folder.
2. Open the Tool

Simply open the index.html file in your browser:

open index.html

✅ That's it! You’re now tracking and visualizing clicks.
🖱️ How It Works

    When the user clicks inside the #heatmap-area:

        A heat dot appears at the click location (using CSS radial gradients).

        The exact click coordinates, timestamp, and current path are logged into localStorage.

    Click data is stored as an array of JSON objects.

    When the user clicks the "Export Click Data" button, the JSON is offered as a downloadable file.

📂 Project Structure

heatmap-tracker/
├── index.html         # Main HTML file
├── style.css          # Styling for layout and heatmap visuals
└── tracker.js         # Core JS logic (tracking, rendering, exporting)

📤 Sample Output (clicklog.json)

[
  {
    "x": 125,
    "y": 240,
    "timestamp": "2025-04-25T16:23:48.154Z",
    "page": "/"
  },
  {
    "x": 300,
    "y": 180,
    "timestamp": "2025-04-25T16:23:50.011Z",
    "page": "/"
  }
]

You can now feed this data into visual dashboards, statistical tools, or custom renderers.
⚠️ Notes

    This tool does not store or transmit any personal data.

    It is intended for demo and educational purposes only.

    Not suitable for production tracking or analytics without significant security and compliance adaptations.

🧩 Extend Ideas

Here are some ways you could build upon this:

    📊 Create a heatmap dashboard with chart.js or D3.js

    🌐 Add backend storage with Firebase, Supabase, or Express

    ⏱️ Track hover duration or scroll depth

    🧭 Track user paths or sequences

    🧪 Simulate multiple users by saving multiple sessions








