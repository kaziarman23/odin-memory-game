# 🧩 Pokémon Memory Game (React + Tailwind CSS)

A fun **memory card game** built with **React** and **Tailwind CSS**, where players try **not to click the same Pokémon twice**.  
Includes dynamic **score tracking**, **best score**, and a **selectable number of Pokémon**.

---

## 🚀 Features

- 🎮 **Memory game mechanics**:
  - Click a Pokémon card only once per round
  - Clicking the same Pokémon resets the current score
- 🏆 **Scoreboard**:
  - Tracks current score
  - Tracks best score achieved
- 🔄 **Randomized cards** on every click
- 🌐 **Fetch Pokémon images** from the [PokéAPI](https://pokeapi.co/)
- ⚙️ **Selectable Pokémon count** (8, 12, 16, 20, 30)
- 🎨 **Responsive UI** styled with Tailwind CSS
- 💾 Resets score when changing the number of Pokémon

---

## 📁 Project Structure

```

src/
├── components/
│   ├── Card.jsx
│   ├── GameBoard.jsx
│   ├── Loader.jsx
│   └── Scoreboard.jsx
├── App.jsx
├── main.jsx
└── index.css

```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/kaziarman23/odin-memory-game.git
cd odin-memory-game
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

## 🧠 Concepts Practiced

- React **state management** (`useState`)
- React **side effects** (`useEffect`)
- API fetching (`fetch`) and **async/await**
- Conditional rendering
- Event handling in React
- **Tailwind CSS** for modern styling
- Array **shuffle logic** (`sort(() => Math.random() - 0.5)`)

---

## 💡 Future Improvements

- Add **multiple difficulty levels**
- **Save best score** in `localStorage`
- **Add animations** for card flipping
- Allow **custom Pokémon selection** for advanced gameplay

---

## 🧑‍💻 Author

**Kazi Arman**
[GitHub](https://github.com/kaziarman23) • [Email](kaziarman@proton.me)
