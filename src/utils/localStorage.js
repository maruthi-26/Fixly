/*
 * ============================================
 *  localStorage.js — Browser Storage Helpers
 * ============================================
 *
 *  WHY THIS FILE:
 *  localStorage lets us save data that persists even after the browser is closed.
 *  We use it to remember the user's recent search and (later in Step 3) the booking cart.
 *
 *  KEY CONCEPTS:
 *  - localStorage only stores STRINGS, not objects/arrays.
 *  - JSON.stringify(value)  →  converts { name: "Fixly" } into '{"name":"Fixly"}'
 *  - JSON.parse(string)    →  converts it back to a JS object
 *
 *  USAGE:
 *    saveToStorage("cart", [item1, item2]);
 *    let cart = loadFromStorage("cart", []);   // returns [] if nothing saved
 */

// saveToStorage — Saves a value to the browser's localStorage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// loadFromStorage — Loads a value from localStorage
// Returns defaultValue if nothing is found
function loadFromStorage(key, defaultValue) {
  let savedData = localStorage.getItem(key);
  // Ternary operator: condition ? valueIfTrue : valueIfFalse
  // If data exists (is not null), parse it. Otherwise return defaultValue.
  return savedData ? JSON.parse(savedData) : defaultValue;
}

export { saveToStorage, loadFromStorage };
