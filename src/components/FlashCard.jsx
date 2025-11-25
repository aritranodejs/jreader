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
            width: '90%',
            maxWidth: '600px',
            aspectRatio: '4/5',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 0 50px rgba(255,255,255,0.2)',
            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            padding: 'clamp(1rem, 4vw, 2rem)',
        },
        closeBtn: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'var(--color-danger)',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 300,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '3px solid white',
        },
        mainContent: {
            fontSize: 'clamp(1.5rem, 10vw, 6rem)',
            fontWeight: 'bold',
            color: item.color,
            marginBottom: 'var(--spacing-md)',
            textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            whiteSpace: 'normal',
            overflow: 'visible',
            textAlign: 'center',
            maxWidth: '100%',
            wordBreak: 'normal',
            overflowWrap: 'normal',
            hyphens: 'none',
            lineHeight: '1.2',
        },
        emoji: {
            fontSize: 'clamp(3rem, 15vw, 5rem)',
            marginBottom: 'var(--spacing-md)',
        },
        subtitle: {
            fontSize: 'clamp(1.2rem, 5vw, 2rem)',
            color: 'var(--color-text)',
            fontFamily: "'Fredoka', sans-serif",
            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'keep-all',
            overflowWrap: 'normal',
        }
    };

    return (
        <div style={styles.overlay} onClick={onBack}>
            <div style={styles.card} onClick={(e) => e.stopPropagation()}>
                <div style={styles.mainContent}>{item.title}</div>
                <div style={styles.emoji}>{item.emoji}</div>
                <div style={styles.subtitle}>{item.subtitle}</div>
            </div>
            <button style={styles.closeBtn} onClick={onBack}>✕</button>
        </div>
    );
};

export default FlashCard;
