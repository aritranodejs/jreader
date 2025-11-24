import React from 'react';

const BookCard = ({ book, onClick }) => {
    const styles = {
        card: {
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-sm)',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
        },
        cover: {
            width: '100%',
            aspectRatio: '3/4',
            backgroundColor: book.color || 'var(--color-primary)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--spacing-sm)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            color: 'rgba(255,255,255,0.8)',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: '600',
            textAlign: 'center',
            color: 'var(--color-text)',
            marginBottom: 'var(--spacing-xs)',
        },
        author: {
            fontSize: '0.9rem',
            color: '#888',
            textAlign: 'center',
        },
        pattern: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
            backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)',
            backgroundSize: '20px 20px',
        }
    };

    return (
        <div
            style={styles.card}
            onClick={() => onClick(book)}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
        >
            <div style={styles.cover}>
                <div style={styles.pattern}></div>
                {book.emoji || '📖'}
            </div>
            <h3 style={styles.title}>{book.title}</h3>
            <p style={styles.author}>by {book.author}</p>
        </div>
    );
};

export default BookCard;
