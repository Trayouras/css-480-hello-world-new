'use client';

import React, { useEffect } from "react";
import Navbar from "../navbar";

export default function ThingsToRead() {
    const links = [
        { title: "React Documentation", url: "https://reactjs.org/" },
        { title: "Next.js Official Site", url: "https://nextjs.org/" },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
        { title: "CSS Tricks", url: "https://css-tricks.com/" },
        { title: "Random Websites", url: "https://theuselessweb.com/" },
        { title: "JavaScript Info", url: "https://javascript.info/" },
        { title: "Programming Challenges", url: "https://www.hackerrank.com/" },
        { title: "Intro to Recursion", url: "https://www.geeksforgeeks.org/introduction-to-recursion-2/" },
        { title: "SteamDB, for PC Game Sales", url: "https://steamdb.info/sales/" },
        { title: "Vercel Deployment Guide", url: "https://vercel.com/docs" }
    ];

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
            <h1>Things to Read</h1>
            <p>Here are some resources I find valuable:</p>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                    </li>
                ))}
            </ul>
            <h1>Documentation</h1>
            <p>You can navigate this site by pressing tab to navigate between links and buttons,
            or you can press the up and down arrow keys after pressing tab. You can also press enter to open a link.
            This lets you navigate these tabs fully with your keyboard, in case you can't use a mouse.</p>
        </div>
    );
}

// Styles...

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

