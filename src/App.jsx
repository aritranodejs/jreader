import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import Reader from './components/Reader';
import CategoryTabs from './components/CategoryTabs';
import FlashCard from './components/FlashCard';
import { contentData } from './data/staticContent';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState('stories'); // stories, alphabets, maths
  const [lang, setLang] = useState('en'); // en, es

  const currentContent = contentData[lang][category];

  const handleToggleLanguage = () => {
    setLang(prev => {
      if (prev === 'en') return 'es';
      if (prev === 'es') return 'bn';
      return 'en';
    });
  };

  const styles = {
    hero: {
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: 'var(--spacing-xl) var(--spacing-md)',
      textAlign: 'center',
      borderRadius: 'var(--radius-lg)',
      margin: 'var(--spacing-md) 0',
      boxShadow: 'var(--shadow-md)',
      backgroundImage: 'linear-gradient(135deg, #4CC9F0 0%, #7209B7 100%)',
    },
    heroTitle: {
      fontSize: '2.5rem',
      marginBottom: 'var(--spacing-sm)',
      color: 'white',
    },
    heroText: {
      fontSize: '1.2rem',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto',
    },
    sectionTitle: {
      textAlign: 'center',
      margin: 'var(--spacing-lg) 0 var(--spacing-md)',
      fontSize: '2rem',
      textTransform: 'capitalize',
    }
  };

  const renderContent = () => {
    if (selectedItem) {
      if (selectedItem.type === 'story') {
        return <Reader book={selectedItem} onBack={() => setSelectedItem(null)} />;
      } else {
        return <FlashCard item={selectedItem} onBack={() => setSelectedItem(null)} />;
      }
    }

    return (
      <>
        <Navbar currentLang={lang} onToggleLanguage={handleToggleLanguage} />
        <div className="container">
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>
              {lang === 'en' && 'Welcome to Junior Reader!'}
              {lang === 'es' && '¡Bienvenido a Junior Reader!'}
              {lang === 'bn' && 'জুনিয়র রিডারে স্বাগতম!'}
            </h1>
            <p style={styles.heroText}>
              {lang === 'en' && 'Discover a world of magical stories and fun adventures. Pick a book and start reading today!'}
              {lang === 'es' && 'Descubre un mundo de historias mágicas y aventuras divertidas. ¡Elige un libro y empieza a leer hoy!'}
              {lang === 'bn' && 'জাদু গল্প এবং মজার অ্যাডভেঞ্চারের জগত আবিষ্কার করুন। একটি বই বেছে নিন এবং আজই পড়া শুরু করুন!'}
            </p>
          </div>

          <CategoryTabs activeCategory={category} onSelectCategory={setCategory} />

          <h2 style={styles.sectionTitle}>
            {category === 'stories' && lang === 'en' && 'Popular Books'}
            {category === 'stories' && lang === 'es' && 'Libros Populares'}
            {category === 'stories' && lang === 'bn' && 'জনপ্রিয় বই'}
            {category === 'alphabets' && lang === 'en' && 'Learn ABCs'}
            {category === 'alphabets' && lang === 'es' && 'Aprende el ABC'}
            {category === 'alphabets' && lang === 'bn' && 'বর্ণমালা শিখুন'}
            {category === 'maths' && lang === 'en' && 'Fun with Numbers'}
            {category === 'maths' && lang === 'es' && 'Diversión con Números'}
            {category === 'maths' && lang === 'bn' && 'সংখ্যা নিয়ে মজা'}
          </h2>

          <div className="grid-books">
            {currentContent.map(item => (
              <BookCard
                key={item.id}
                book={item}
                onClick={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default App;
