import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <Link href="/" passHref>
                <button style={styles.button}>Home</button>
            </Link>
            <Link href="/things-to-read" passHref>
                <button style={styles.button}>Things to Read</button>
            </Link>
        </nav>
    );
}
document.addEventListener('keydown', (event) => {
    if (document.activeElement.tagName === 'A') {
        const links = document.querySelectorAll('a');
        let currentIndex = [...links].indexOf(document.activeElement);

        if (event.key === 'ArrowDown' && currentIndex < links.length - 1) {
            links[currentIndex + 1].focus();
        } else if (event.key === 'ArrowUp' && currentIndex > 0) {
            links[currentIndex - 1].focus();
        }
    }
});


const styles = {
    nav: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};
