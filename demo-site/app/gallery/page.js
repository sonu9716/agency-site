'use client';
import { useState } from 'react';

const galleryItems = [
    // Before/After pairs
    {
        id: 1,
        type: 'before-after',
        title: 'Root Canal & Crown',
        before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop',
        after: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop',
        category: 'Root Canal',
    },
    {
        id: 2,
        type: 'before-after',
        title: 'Smile Makeover',
        before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&fit=crop',
        after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&fit=crop',
        category: 'Whitening',
    },
    {
        id: 3,
        type: 'before-after',
        title: 'Braces Result',
        before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&fit=crop',
        after: 'https://images.unsplash.com/photo-1559591937-aaaf10de7c1a?w=600&q=80&fit=crop',
        category: 'Braces',
    },
    {
        id: 4,
        type: 'before-after',
        title: 'Dental Implant',
        before: '/demo1/assets/implant-model.jpg',
        after: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&fit=crop',
        category: 'Implants',
    },
    // Single photos – clinic
    {
        id: 5,
        type: 'single',
        title: 'Modern Treatment Room',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop',
        category: 'Clinic',
    },
    {
        id: 6,
        type: 'single',
        title: 'Digital X-Ray Equipment',
        img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80&fit=crop',
        category: 'Clinic',
    },
    {
        id: 7,
        type: 'single',
        title: 'Sterilization Lab',
        img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80&fit=crop',
        category: 'Clinic',
    },
    {
        id: 8,
        type: 'single',
        title: 'Reception Area',
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&fit=crop',
        category: 'Clinic',
    },
];

const categories = ['All', 'Root Canal', 'Whitening', 'Braces', 'Implants', 'Clinic'];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const [baView, setBaView] = useState({}); // tracks 'before'|'after' for each item

    const filtered = galleryItems.filter(
        (g) => activeCategory === 'All' || g.category === activeCategory
    );

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    paddingTop: '120px',
                    paddingBottom: '80px',
                    background: 'linear-gradient(135deg, #0D1B3E 0%, #1565C0 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(76,175,80,0.1), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge" style={{ marginBottom: '20px' }}>📸 Our Work</span>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
                        Photo Gallery
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
                        See the transformations. Real patients, real results — before & after dental treatments at our clinic.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#F8FBFF" />
                    </svg>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#F8FBFF' }}>
                <div className="container-custom">
                    {/* Category Filter */}
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    border: '2px solid',
                                    borderColor: activeCategory === cat ? '#1565C0' : '#E0E7EF',
                                    background: activeCategory === cat ? '#1565C0' : '#fff',
                                    color: activeCategory === cat ? '#fff' : '#546E7A',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {filtered.map((item) => (
                            item.type === 'before-after' ? (
                                <div key={item.id} className="card" style={{ overflow: 'hidden' }}>
                                    <div style={{ position: 'relative' }}>
                                        {/* Toggle tabs */}
                                        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, display: 'flex', gap: '6px' }}>
                                            {['before', 'after'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setBaView({ ...baView, [item.id]: tab })}
                                                    style={{
                                                        padding: '5px 14px',
                                                        borderRadius: '50px',
                                                        border: 'none',
                                                        background: (baView[item.id] || 'before') === tab
                                                            ? tab === 'before' ? '#EF5350' : '#4CAF50'
                                                            : 'rgba(255,255,255,0.7)',
                                                        color: (baView[item.id] || 'before') === tab ? '#fff' : '#333',
                                                        fontWeight: '700',
                                                        fontSize: '12px',
                                                        cursor: 'pointer',
                                                        textTransform: 'capitalize',
                                                    }}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                        <img
                                            src={(baView[item.id] || 'before') === 'before' ? item.before : item.after}
                                            alt={`${item.title} – ${baView[item.id] || 'before'}`}
                                            style={{ width: '100%', height: '240px', objectFit: 'cover', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                            onClick={() => setLightbox({ img: (baView[item.id] || 'before') === 'before' ? item.before : item.after, title: item.title })}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '10px',
                                                right: '10px',
                                                background: 'rgba(0,0,0,0.55)',
                                                color: '#fff',
                                                padding: '4px 10px',
                                                borderRadius: '50px',
                                                fontSize: '11px',
                                                fontWeight: '600',
                                            }}
                                        >
                                            Before / After
                                        </div>
                                    </div>
                                    <div style={{ padding: '16px 20px' }}>
                                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E' }}>{item.title}</div>
                                        <div style={{ fontSize: '12px', color: '#1565C0', marginTop: '4px', fontWeight: '600' }}>{item.category}</div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    key={item.id}
                                    className="gallery-item card"
                                    onClick={() => setLightbox({ img: item.img, title: item.title })}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div className="gallery-overlay">
                                        <div>
                                            <div style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>{item.title}</div>
                                            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px' }}>{item.category}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px', color: '#546E7A' }}>
                            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📸</div>
                            <p>No items in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                        cursor: 'pointer',
                    }}
                >
                    <div style={{ position: 'relative', maxWidth: '800px', width: '100%' }}>
                        <img src={lightbox.img} alt={lightbox.title} style={{ width: '100%', borderRadius: '16px', maxHeight: '80vh', objectFit: 'contain' }} />
                        <div style={{ color: '#fff', textAlign: 'center', marginTop: '12px', fontSize: '16px', fontWeight: '600' }}>{lightbox.title}</div>
                        <button
                            onClick={() => setLightbox(null)}
                            style={{
                                position: 'absolute',
                                top: '-16px',
                                right: '-16px',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
