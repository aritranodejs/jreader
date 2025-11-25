import React from 'react';

const BookCard = ({ book, onClick }) => {
    const styles = {
        card: {
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(0.5rem, 2vw, 1rem)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            minHeight: '200px',
            position: 'relative',
            overflow: 'hidden',
        },
        cover: {
            width: '100%',
            aspectRatio: '3/4',
            background: `linear-gradient(135deg, ${book.color || '#4CC9F0'} 0%, ${adjustColor(book.color || '#4CC9F0', -20)} 100%)`,
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--spacing-xs)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            color: 'rgba(255,255,255,0.95)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)',
            position: 'relative',
            overflow: 'hidden',
            transform: 'translateZ(0)',
        },
        title: {
            fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1F2937',
            marginBottom: '0.25rem',
            lineHeight: '1.3',
            wordBreak: 'break-word',
            hyphens: 'auto',
        },
        author: {
            fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
            color: '#6B7280',
            textAlign: 'center',
            lineHeight: '1.2',
            fontWeight: '500',
        },
        pattern: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.15,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)',
            backgroundSize: '20px 20px',
        },
        shimmer: {
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
            transform: 'translateX(-100%) translateY(-100%)',
            transition: 'transform 0.6s',
        }
    };

    // Helper function to darken/lighten color
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    return (
        <div
            style={styles.card}
            onClick={() => onClick(book)}
            onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.03) rotateX(2deg)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5) inset';
                    const shimmer = e.currentTarget.querySelector('.shimmer');
                    if (shimmer) shimmer.style.transform = 'translateX(100%) translateY(100%)';
                } else {
                    e.currentTarget.style.transform = 'scale(1.02)';
                }
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3) inset';
                const shimmer = e.currentTarget.querySelector('.shimmer');
                if (shimmer) shimmer.style.transform = 'translateX(-100%) translateY(-100%)';
            }}
            onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            <div style={styles.cover}>
                <div style={styles.pattern}></div>
                {window.innerWidth > 768 && <div className="shimmer" style={styles.shimmer}></div>}
                {book.emoji || '📖'}
            </div>
            <h3 style={styles.title}>{book.title}</h3>
            <p style={styles.author}>by {book.author || book.subtitle}</p>
        </div>
    );
};

export default BookCard;
