# 📚 Student Planner

A beautifully designed, all-in-one academic workspace built with pure HTML, CSS, and JavaScript — no frameworks, no installs, just one file.

> Made by **Christi Maria Biju** 

---

## 🌐 Live Demo

👉 [christimaria.github.io/STUDENT-PLANNER](https://christimaria.github.io/STUDENT-PLANNER/)

---

## ✨ Features

| Feature | What it does |
|---|---|
| ✅ **To-Do List** | Add tasks with subject, priority, due date & notes. Filter by status or priority. |
| ⏱️ **Pomodoro Timer** | Focus/break timer with a circular ring, session dots & custom durations. |
| 📅 **Calendar** | Visual month calendar that highlights days with tasks and shows what's due. |
| 📖 **Subjects** | Manage your subjects with emojis and track task progress per subject. |
| 📝 **Quick Notes** | A freeform scratch pad that auto-saves as you type. |
| 📊 **Stats Dashboard** | Live counts for total, pending, due-today, and completed tasks. |
| 💬 **Daily Quotes** | Rotating study-motivation quotes in the sidebar. |

---

## 🗂️ Project Structure

```
STUDENT-PLANNER/
└── index.html        ← The entire app (HTML + CSS + JS in one file)
```

That's it. One file does everything.

---

## 🧠 How It's Built — Beginner Friendly Explanation

This project is built using three web technologies that live inside a **single HTML file**:

### 1. 🏗️ HTML — The Skeleton
HTML creates all the elements you see: buttons, input boxes, the timer display, the calendar grid, etc.

```html
<button class="btn-primary" onclick="addTask()">+ Add Task</button>
```

Everything is structured inside a `<div class="wrapper">` and split into **panels** (one per tab).

### 2. 🎨 CSS — The Looks
CSS styles every element. This project uses **CSS Custom Properties (variables)** so the whole color theme can be changed in one place:

```css
:root {
  --accent: #b88a66;      /* the warm brown highlight color */
  --bg-base: #1c1816;     /* the dark background */
  --text-heading: #f0e6dd; /* the light heading text */
}
```

Layouts are built with **CSS Grid** and **Flexbox**, and smooth **transitions** + **keyframe animations** make things feel polished.

### 3. ⚙️ JavaScript — The Brain
JS handles all the logic: adding tasks, running the timer countdown, drawing the calendar, saving data. Key concepts used:

**localStorage** — saves your tasks and notes in the browser so they don't disappear on refresh:
```js
localStorage.setItem('sp_tasks_v2', JSON.stringify(tasks));
```

**Tab switching** — shows/hides panels when you click a tab:
```js
function switchTab(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
}
```

**Pomodoro Timer** — uses `setInterval()` to count down every second and updates the circular SVG ring:
```js
pomoInterval = setInterval(() => {
  pomoSecs--;
  updatePomoDisplay(); // updates the number and the ring
}, 1000);
```

**Calendar** — dynamically generates the calendar grid using JavaScript `Date` objects.

---

## 🔗 How Everything Connects in One File

```
index.html
├── <head>
│   ├── Google Fonts (Outfit + Playfair Display)
│   └── <style> ─── All CSS lives here
│
├── <body>
│   ├── Header (date + brand)
│   ├── Stats Row (live task counts)
│   ├── Tab Bar (To-Do / Timer / Calendar / Subjects / Notes)
│   ├── #panel-todo
│   ├── #panel-timer
│   ├── #panel-calendar
│   ├── #panel-subjects
│   └── #panel-notes
│
└── <script> ─── All JavaScript lives here
    ├── Data (tasks[], subjects[])
    ├── Task functions (addTask, deleteTask, toggleTask...)
    ├── Timer functions (togglePomo, resetPomo...)
    ├── Calendar functions (renderCalendar, selectDay...)
    ├── Subject functions (addSubject, renderSubjects...)
    └── Notes + Quotes
```

The CSS `display: none` / `display: block` trick (via the `.active` class) is how tabs work — only one panel is visible at a time.

---

## 🚀 How to Run Locally

No setup needed. Just:

1. Download `index.html`
2. Double-click it to open in your browser

That's all! ✅

---

## 🛠️ How to Recreate This (Short Version)

1. **Create** an `index.html` file
2. **In `<head>`** — link Google Fonts and write your CSS inside a `<style>` tag
3. **In `<body>`** — build your layout with divs, use a `.panel` class for each tab section
4. **At the bottom of `<body>`** — write all your JavaScript inside a `<script>` tag
5. **Use `localStorage`** to save data between sessions
6. **Use `setInterval()`** for the countdown timer
7. **Use `Date` objects** to build the calendar

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Grid, Flexbox, Animations, Custom Properties)
- **Vanilla JavaScript** (no libraries or frameworks)
- **Google Fonts** — Outfit + Playfair Display
- **Unsplash** — background image
- **GitHub Pages** — free hosting

---

## 📸 Preview

<img width="959" height="920" alt="Screenshot 2026-05-16 181418" src="https://github.com/user-attachments/assets/7fe4c230-4232-4184-b4fd-3c4f81c18e76" />


---

## 📄 License

This project is open source and free to use for learning purposes.

---

*Made with love and lots of study sessions.*
