"use client"
import { useState } from 'react';

export default function FruitList() {
  const [fruits, setFruits] = useState([]);
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitColor, setNewFruitColor] = useState('');
  const [filterText, setFilterText] = useState('');

  const addFruit = () => {
    if (newFruitName.trim() !== '') {
      setFruits([...fruits, { name: newFruitName, color: newFruitColor }]);
      setNewFruitName('');
      setNewFruitColor('');
    }
  };

  const updateFruit = (index, updatedName, updatedColor) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].name = updatedName;
    updatedFruits[index].color = updatedColor;
    setFruits(updatedFruits);
  };

  const deleteFruit = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits.splice(index, 1);
    setFruits(updatedFruits);
  };

  const filteredFruits = fruits.filter(
    (fruit) =>
      fruit.name.toLowerCase().includes(filterText.toLowerCase()) ||
      fruit.color.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <center>
      <h1 class="Fruit">FRUIT LIST CRUD</h1>
      <h1 class="h1">ADD FRUIT</h1></center>
      <div>
        <label class="fruitName">Name</label>
        <input
          type="text"
          placeholder='Enter Fruit Name'
          id="fruitName"
          value={newFruitName}
          onChange={(e) => setNewFruitName(e.target.value)}
        />
        <label class="fruitColor">Color</label>
        <input
          type="text"
          placeholder='Enter Fruit Color'
          id="fruitColor"
          value={newFruitColor}
          onChange={(e) => setNewFruitColor(e.target.value)}
        />
        <button onClick={addFruit}>Add Fruit</button>
      </div>
      <h2 class="Filter">Filter</h2>
      <input
        type="text"
        placeholder="Enter to view Filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>
            <span style={{ color: fruit.color }}>{fruit.name}</span> - {fruit.color}
            <button
              onClick={() => {
                const updatedName = prompt('', fruit.name);
                const updatedColor = prompt('', fruit.color);
                updateFruit(index, updatedName, updatedColor);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteFruit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}