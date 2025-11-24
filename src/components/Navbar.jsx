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
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 var(--radius-md) var(--radius-md)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--color-primary)',
            fontFamily: "'Fredoka', sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        logoHighlight: {
            color: 'var(--color-secondary)',
        },
        langBtn: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: 'var(--shadow-sm)',
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
            >
                <span style={{ fontSize: '1.2rem' }}>{getLangFlag()}</span>
                <span>{getLangName()}</span>
            </button>
        </nav>
    );
};

export default Navbar;
