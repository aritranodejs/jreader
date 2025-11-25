import React, { useState, useEffect } from 'react';

const WelcomeAnimation = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeOut 0.5s ease 2s forwards',
        },
        logo: {
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            animation: 'bounceIn 0.8s ease',
        },
        text: {
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: 'white',
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: '800',
            marginTop: '1rem',
            textShadow: '0 4px 15px rgba(0,0,0,0.3)',
            animation: 'slideUp 0.8s ease 0.3s backwards',
        },
        subtitle: {
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '0.5rem',
            animation: 'slideUp 0.8s ease 0.5s backwards',
        }
    };

    return (
        <>
            <div style={styles.overlay}>
                <div style={styles.logo}>📚</div>
                <div style={styles.text}>Junior<span style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Reader</span></div>
                <div style={styles.subtitle}>Learning Made Fun!</div>
            </div>
            <style>{`
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        visibility: hidden;
                    }
                }
                @keyframes bounceIn {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                @keyframes slideUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default WelcomeAnimation;
