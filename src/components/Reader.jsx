import React, { useState } from 'react';

const Reader = ({ book, onBack }) => {
    const [currentPage, setCurrentPage] = useState(0);

    // Mock pages if not provided
    const pages = book.pages || [
        { text: "Once upon a time...", color: "#FFD166" },
        { text: "There was a little reader.", color: "#4CC9F0" },
        { text: "Who loved to learn!", color: "#06D6A0" },
        { text: "The End.", color: "#EF476F" }
    ];

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--color-background)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            padding: 'var(--spacing-sm)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--color-white)',
            boxShadow: 'var(--shadow-sm)',
        },
        closeBtn: {
            backgroundColor: 'var(--color-danger)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        content: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'var(--spacing-md)',
            backgroundColor: pages[currentPage].color,
            transition: 'background-color 0.5s ease',
            position: 'relative',
        },
        pageCard: {
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '800px',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '2rem',
            fontFamily: "'Fredoka', sans-serif",
            color: 'var(--color-text)',
            animation: 'fadeIn 0.5s ease',
        },
        controls: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            position: 'absolute',
            padding: '0 var(--spacing-md)',
            pointerEvents: 'none', // Let clicks pass through to page
        },
        navBtn: {
            pointerEvents: 'auto',
            backgroundColor: 'var(--color-white)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            boxShadow: 'var(--shadow-md)',
            color: 'var(--color-primary)',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h3>{book.title}</h3>
                <button style={styles.closeBtn} onClick={onBack}>Close</button>
            </div>

            <div style={styles.content}>
                <div style={styles.pageCard}>
                    {pages[currentPage].text}
                </div>

                <div style={styles.controls}>
                    <button
                        style={{ ...styles.navBtn, opacity: currentPage === 0 ? 0.5 : 1 }}
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                    >
                        ←
                    </button>
                    <button
                        style={{ ...styles.navBtn, opacity: currentPage === pages.length - 1 ? 0.5 : 1 }}
                        onClick={handleNext}
                        disabled={currentPage === pages.length - 1}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reader;
