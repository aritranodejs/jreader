import React from 'react';

const Navbar = ({ currentLang, onToggleLanguage }) => {
    const getLangFlag = () => {
        if (currentLang === 'en') return '🇺🇸';
        if (currentLang === 'es') return '🇪🇸';
        if (currentLang === 'bn') return '🇮🇳';
        return '🇺🇸';
    };

    const getLangName = () => {
        if (currentLang === 'en') return 'English';
        if (currentLang === 'es') return 'Español';
        if (currentLang === 'bn') return 'বাংলা';
        return 'English';
    };

    const styles = {
        nav: {
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderTop: 'none',
        },
        logo: {
            fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Fredoka', sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        logoHighlight: {
            background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },
        langBtn: {
            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.95rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 6px 16px rgba(124, 58, 237, 0.3)',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
        }
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <span>📚</span>
                <span>Junior<span style={styles.logoHighlight}>Reader</span></span>
            </div>
            <button
                onClick={onToggleLanguage}
                style={styles.langBtn}
                title="Switch Language"
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.5), 0 0 25px rgba(118, 75, 162, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4), 0 0 15px rgba(118, 75, 162, 0.3)';
                }}
            >
                <span style={{ fontSize: '1.2rem' }}>{getLangFlag()}</span>
                <span>{getLangName()}</span>
            </button>
        </nav>
    );
};

export default Navbar;
