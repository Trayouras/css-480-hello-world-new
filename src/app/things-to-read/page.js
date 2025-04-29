'use client';

import React, { useEffect } from "react";
import Navbar from "../navbar";

export default function ThingsToRead() {
    const links = [
        { title: "React Documentation", url: "https://reactjs.org/" },
        { title: "Next.js Official Site", url: "https://nextjs.org/" },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
        { title: "CSS Tricks", url: "https://css-tricks.com/" },
        { title: "WebAim Accessibility Guide", url: "https://webaim.org/" },
        { title: "JavaScript Info", url: "https://javascript.info/" },
        { title: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
        { title: "W3Schools Keyboard Shortcuts", url: "https://www.w3schools.com/tags/ref_keyboardshortcuts.asp" },
        { title: "Github Docs", url: "https://docs.github.com/" },
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

