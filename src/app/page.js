'use client';

import React, { useState } from 'react';
export default function Home() {
  // List of interests
  const [interests, setInterests] = useState([
    "Redundancy",
    "Problem-solving",
    "Video Games",
      "Redundancy",
      "List Sorting",
      "Programming"
  ]);

  // Function to re-sort the list
  const reorderList = () => {
    // I was playing around with this and I realized it's fun to try to get the
    // "Redundancy"s to pair up, so I set it to random
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
            Hi, I'm Trey! I'm a computer science and software engineering junior at the University of Washington's
            Bothell campus. I am particularly interested in biotech and game development.
          </p>
          <img
              src="/selfie-new.jpg"
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
    padding: "30px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "30px",
    lineHeight: "300px",
  },
  header: {
    borderBottom: "10px solid #ddd",
    paddingBottom: "15px",
    marginBottom: "25px",
  },
  section: {
    marginBottom: "15px",
  },
  image: {
    maxWidth: "200px",
    borderRadius: "15px",
  },
  button: {
    padding: "15px 25px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
