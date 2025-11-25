import React from 'react';

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
    const categories = [
        { id: 'stories', label: 'Stories', emoji: '📚' },
        { id: 'alphabets', label: 'Alphabets', emoji: '🔤' },
        { id: 'maths', label: 'Maths', emoji: '🔢' },
        { id: 'colors', label: 'Colors', emoji: '🎨' },
        { id: 'shapes', label: 'Shapes', emoji: '📐' },
        { id: 'animals', label: 'Animals', emoji: '🦁' },
        { id: 'fruits', label: 'Fruits', emoji: '🍎' },
        { id: 'vegetables', label: 'Vegetables', emoji: '🥕' },
        { id: 'bodyparts', label: 'Body', emoji: '👁️' },
        { id: 'days', label: 'Days', emoji: '📅' },
        { id: 'months', label: 'Months', emoji: '🗓️' },
        { id: 'weather', label: 'Weather', emoji: '☀️' },
        { id: 'verbs', label: 'Actions', emoji: '🏃' },
        { id: 'professions', label: 'Jobs', emoji: '👨‍⚕️' },
    ];

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '0.6rem',
            margin: 'var(--spacing-md) 0',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            padding: '12px 6px',
            scrollSnapType: 'x mandatory',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-full)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
        },
        tab: (isActive) => ({
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            background: isActive
                ? 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)'
                : 'rgba(255, 255, 255, 0.7)',
            color: isActive ? 'white' : '#374151',
            border: isActive
                ? '2px solid rgba(255, 255, 255, 0.5)'
                : '2px solid rgba(156, 163, 175, 0.3)',
            cursor: 'pointer',
            fontWeight: isActive ? '700' : '600',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isActive
                ? '0 6px 16px rgba(124, 58, 237, 0.3)'
                : '0 2px 6px rgba(0, 0, 0, 0.06)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            scrollSnapAlign: 'start',
            minWidth: 'fit-content',
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
        })
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={styles.container}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        style={styles.tab(activeCategory === cat.id)}
                        onClick={() => onSelectCategory(cat.id)}
                    >
                        <span>{cat.emoji}</span>
                        {cat.label}
                    </button>
                ))}
            </div>
            {/* Scroll hint for mobile - fades after user interacts */}
            <style>{`
                @media (max-width: 768px) {
                    .category-tabs-container::after {
                        content: '→';
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        background: linear-gradient(to left, rgba(240, 249, 255, 1) 0%, transparent 100%);
                        padding: 8px 16px 8px 32px;
                        font-size: 1.2rem;
                        color: var(--color-secondary);
                        pointer-events: none;
                        animation: pulse 2s infinite;
                    }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; }
                    50% {opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default CategoryTabs;
