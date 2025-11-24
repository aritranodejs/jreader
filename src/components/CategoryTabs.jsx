import React from 'react';

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
    const categories = [
        { id: 'stories', label: 'Stories', emoji: '📚' },
        { id: 'alphabets', label: 'Alphabets', emoji: '🔤' },
        { id: 'maths', label: 'Maths', emoji: '🔢' },
    ];

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            margin: 'var(--spacing-md) 0',
            flexWrap: 'wrap',
        },
        tab: (isActive) => ({
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: isActive ? 'var(--color-secondary)' : 'var(--color-white)',
            color: isActive ? 'white' : 'var(--color-text)',
            border: '2px solid var(--color-secondary)',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: isActive ? 'var(--shadow-md)' : 'none',
        })
    };

    return (
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
    );
};

export default CategoryTabs;
