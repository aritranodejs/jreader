import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import Reader from './components/Reader';
import CategoryTabs from './components/CategoryTabs';
import FlashCard from './components/FlashCard';
import WelcomeAnimation from './components/WelcomeAnimation';
import { contentData } from './data/staticContent';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState('stories'); // stories, alphabets, maths
  const [lang, setLang] = useState('en'); // en, es

  const sectionTitles = {
    stories: { en: 'Popular Books', es: 'Libros Populares', bn: 'জনপ্রিয় বই' },
    alphabets: { en: 'Learn ABCs', es: 'Aprende el ABC', bn: 'বর্ণমালা শিখুন' },
    maths: { en: 'Fun with Numbers', es: 'Diversión con Números', bn: 'সংখ্যা নিয়ে মজা' },
    colors: { en: 'Learn Colors', es: 'Aprende Colores', bn: 'রং শিখুন' },
    shapes: { en: 'Explore Shapes', es: 'Explora Formas', bn: 'আকার দেখুন' },
    animals: { en: 'Discover Animals', es: 'Descubre Animales', bn: 'প্রাণী জানুন' },
    fruits: { en: 'Fresh Fruits', es: 'Frutas Frescas', bn: 'তাজা ফল' },
    vegetables: { en: 'Healthy Vegetables', es: 'Verduras Saludables', bn: 'স্বাস্থ্যকর সবজি' },
    bodyparts: { en: 'Body Parts', es: 'Partes del Cuerpo', bn: 'শরীরের অংশ' },
    days: { en: 'Days of the Week', es: 'Días de la Semana', bn: 'সপ্তাহের দিন' },
    months: { en: 'Months of the Year', es: 'Meses del Año', bn: 'বছরের মাস' },
    weather: { en: 'Weather & Seasons', es: 'Clima y Estaciones', bn: 'আবহাওয়া এবং ঋতু' },
    verbs: { en: 'Action Words', es: 'Palabras de Acción', bn: 'ক্রিয়া শব্দ' },
    professions: { en: 'Community Helpers', es: 'Ayudantes Comunitarios', bn: 'পেশা' },
  };

  const getSectionTitle = (category, language) => {
    return sectionTitles[category]?.[language] || 'Explore & Learn';
  };

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
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '2px solid rgba(255, 255, 255, 0.8)',
      padding: 'clamp(1.5rem, 5vw, 3.5rem) var(--spacing-md)',
      textAlign: 'center',
      borderRadius: 'var(--radius-lg)',
      margin: 'var(--spacing-sm) 0',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroTitle: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      marginBottom: 'var(--spacing-sm)',
      background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2',
      fontWeight: '800',
      letterSpacing: '0.5px',
    },
    heroText: {
      fontSize: 'clamp(1rem, 3vw, 1.3rem)',
      color: '#374151',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '500',
    },
    sectionTitle: {
      textAlign: 'center',
      margin: 'var(--spacing-lg) 0 var(--spacing-md)',
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textTransform: 'capitalize',
      position: 'relative',
      padding: '0.5rem 0',
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
            {getSectionTitle(category, lang)}
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
      <WelcomeAnimation />
      {renderContent()}
    </div>
  );
}

export default App;
