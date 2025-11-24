import React from 'react';

const FlashCard = ({ item, onBack }) => {
    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'var(--spacing-md)',
        },
        card: {
            backgroundColor: 'var(--color-white)',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '3/4',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 0 50px rgba(255,255,255,0.2)',
            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
        closeBtn: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'var(--color-danger)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        mainContent: {
            fontSize: '8rem',
            fontWeight: 'bold',
            color: item.color,
            marginBottom: 'var(--spacing-sm)',
            textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
        },
        emoji: {
            fontSize: '5rem',
            marginBottom: 'var(--spacing-md)',
        },
        subtitle: {
            fontSize: '2rem',
            color: 'var(--color-text)',
            fontFamily: "'Fredoka', sans-serif",
        }
    };

    return (
        <div style={styles.overlay} onClick={onBack}>
            <div style={styles.card} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onBack}>×</button>
                <div style={styles.mainContent}>{item.title}</div>
                <div style={styles.emoji}>{item.emoji}</div>
                <div style={styles.subtitle}>{item.subtitle}</div>
            </div>
        </div>
    );
};

export default FlashCard;
