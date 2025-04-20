'use client';

import React, { useState } from 'react';
export default function Home() {
  // List of interests
  const [interests, setInterests] = useState([
    "Redundancy",
    "Problem-solving",
    "Video Games",
      "Redundancy",
      "List Sorting"
  ]);

  // Function to re-sort the list
  const reorderList = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);
  };

  return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Hello World!</h1>
          <p>Welcome to my CSS 480 landing page!</p>
        </header>
        <section style={styles.section}>
          <h2>About Me</h2>
          <p>
            Hi, I'm Trey! I'm a computer science and software engineering student at the University of Washington's
            Bothell campus.
          </p>
          <img
              src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pukei-pukei_render_001.png"
              alt="A picture representing me"
              style={styles.image}
          />
        </section>
        <section style={styles.section}>
          <h2>Things That Interest Me</h2>
          <ul>
            {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
            ))}
          </ul>
          <button onClick={reorderList} style={styles.button}>
            Re-order List
          </button>
        </section>
      </div>
  );
}

// Simple styles for the page
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  image: {
    maxWidth: "200px",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
