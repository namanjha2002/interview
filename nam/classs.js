const express = require('express');
const app = express();

// Fruit class
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// In-memory fruit database
let fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Grapes', 'Purple'),
  new Fruit(4, 'Orange', 'Orange'),
  new Fruit(5, 'Strawberry', 'Red'),
];

// API endpoint to get sorted fruits by color
app.get('/fruits', (req, res) => {
  // Sort the fruits based on color
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));

  res.json(sortedFruits);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
