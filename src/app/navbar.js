import React from 'react';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <Link href="/home" passHref>
                <button style={styles.button}>Home</button>
            </Link>
            <Link href="/things-to-read" passHref>
                <button style={styles.button}>Things to Read</button>
            </Link>
            <Link href="/Warhammer" passHref>
                <button style={styles.button}>Warhammer</button>
            </Link>
        </nav>
    );
}


const styles = {
    nav: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#004ca6",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};
