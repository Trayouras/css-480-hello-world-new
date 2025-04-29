'use client';

import React, {useEffect, useState} from 'react';
import Navbar from "../navbar";


export default function Home() {
    const [interests, setInterests] = useState([
        "Redundancy",
        "Problem-solving",
        "Video Games",
        "Redundancy",
        "List Sorting",
        "Programming"
    ]);

    const reorderList = () => {
        const shuffled = [...interests].sort(() => Math.random() - 0.5);
        setInterests(shuffled);
    };
    useEffect(() => {

        const handleKeyDown = (event) => {
            if (document.activeElement.tagName === "A") {
                const links = document.querySelectorAll("a");
                let currentIndex = [...links].indexOf(document.activeElement);

                if (event.key === "ArrowDown" && currentIndex < links.length - 1) {
                    links[currentIndex + 1].focus();
                } else if (event.key === "ArrowUp" && currentIndex > 0) {
                    links[currentIndex - 1].focus();
                } else if (event.key === "Enter" && currentIndex < 0) {
                    links[currentIndex].focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Hello World!</h1>
                <p>Welcome to my CSS 480 landing page!</p>
            </header>
            <section style={styles.section}>
                <h2>About Me</h2>
                <p>
                    Hi, I'm Trey! I'm a computer science and software engineering junior at UW Bothell.
                    I'm particularly interested in biotech and game development.
                </p>
                <img src="/selfie-new.jpg" alt="A picture representing me" style={styles.image} />
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
        maxWidth: "auto",
        margin: "30px",
        lineHeight: "30px",
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
