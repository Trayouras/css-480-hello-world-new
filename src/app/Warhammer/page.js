'use client';

import React, {useEffect, useState} from 'react';
import Navbar from "../navbar";


export default function Home() {

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
                <h1>What is Warhammer?</h1>
                <p>           Warhammer is a franchise primarily based around tabletop strategy games.
                    The franchise is divided into three settings: Warhammer Fantasy, a fairly standard
                    fantasy setting, Warhammer Age of Sigmar, a more fantastical setting that occurs after
                    Warhammer Fantasy, and Warhammer 40,000, also known as 40k, which is a science fiction setting
                    that exists in a totally separate universe to the other two setting. Warhammer 40k is
                    the most popular setting and is split into two main time eras: the year 40,000 and
                    the years following it, and the Horus Heresy, which is set around 30,000. While the settings
                    are all mostly separate, they share many similarities, both in terms of tone and characters.
                </p>
            </header>
            <header style={styles.header}>
                <h1>How do you get in to Warhammer?</h1>
                <p>
                    The best way to get into Warhammer depends on your preferred setting.
                    While it seems obvious to start by playing the tabletop game, getting the miniatures
                    required to play will cost a significant amount, and you have to assemble and
                    paint them yourself. A cheaper starting option may be to play one of the video games
                    for your chosen setting. For Fantasy and 40k respectively, Total War: Warhammer 3 and
                    Dawn of War 1 are excellent choices for strategy games, which matches the
                    pace of the tabletop games, or you could play Vermintide 2 and Space Marine 2, which are
                    faster and more action-packed. Age of Sigmar is more recent and less popular than the other
                    two settings, and as such there are very few games for it.
                </p>
            </header>
            <section style={styles.section}>
                <h2>What is Warhammer?</h2>
                <p>
                    Warhammer is a franchise primarily based around tabletop strategy games.
                    The franchise is divided into three settings: Warhammer Fantasy, a fairly standard
                    fantasy setting, Warhammer Age of Sigmar, a more fantastical setting that occurs after
                    Warhammer Fantasy, and Warhammer 40,000, also known as 40k, which is a science fiction setting
                    that exists in a totally separate universe to the other two setting. Warhammer 40k is
                    the most popular setting and is split into two main time eras: the year 40,000 and
                    the years following it, and the Horus Heresy, which is set around 30,000. While the settings
                    are all mostly separate, they share many similarities, both in terms of tone and characters.
                </p>
                <section style={styles.section}>
                </section>

                <h1>How do you get in to Warhammer?</h1>
                <p>
                    The best way to get into Warhammer depends on your preferred setting.
                    While it seems obvious to start by playing the tabletop game, getting the miniatures
                    required to play will cost a significant amount, and you have to assemble and
                    paint them yourself. A cheaper starting option may be to play one of the video games
                    for your chosen setting. For Fantasy and 40k respectively, Total War: Warhammer 3 and
                    Dawn of War 1 are excellent choices for strategy games, which matches the
                    pace of the tabletop games, or you could play Vermintide 2 and Space Marine 2, which are
                    faster and more action-packed. Age of Sigmar is more recent and less popular than the other
                    two settings, and as such there are very few games for it.
                </p>
                <img src="/selfie-new.jpg" alt="A picture of me" style={styles.image} />
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
        borderBottom: "10px solid #000000",
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
        backgroundColor: "#004ca6",
        color: "#fafafa",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};
