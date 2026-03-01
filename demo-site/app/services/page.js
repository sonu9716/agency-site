import Link from 'next/link';

export const metadata = {
    title: 'Dental Services Indirapuram | Root Canal, Implants, Braces | Dr. Amit Sharma',
    description:
        'Comprehensive dental services at Sharma Dental Clinic, Indirapuram: Root Canal, Dental Implants, Braces, Teeth Whitening, Kids Dentistry. Book appointment today!',
};

const services = [
    {
        icon: '🦷',
        title: 'Root Canal Treatment',
        short: 'Relieve pain and save your natural tooth',
        desc: `Root canal therapy (RCT) is a procedure to treat infection at the core of a tooth. Using
    advanced rotary endodontic systems and digital X-rays, Dr. Sharma performs painless root canals
    with precise accuracy. Most procedures are completed in a single sitting.`,
        points: [
            'Single & multi-sitting procedures available',
            'Rotary RCT with nickel-titanium files',
            'Digital X-Ray guided treatment',
            'Biocompatible, long-lasting filling materials',
            'Post-treatment crown placement available',
        ],
        cost: '₹2,500 – ₹8,000',
        duration: '45 – 90 min',
        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop',
        color: '#1565C0',
        bg: '#E3F2FD',
    },
    {
        icon: '🔩',
        title: 'Dental Implants',
        short: 'The gold standard for missing teeth',
        desc: `Dental implants are the most natural looking and feeling solution for a missing tooth.
    A titanium post is placed in the jawbone, topped with a custom-made crown. Dr. Sharma has placed
    hundreds of implants with a 98% success rate, including same-day and mini-implants.`,
        points: [
            'Single tooth & full-mouth implants',
            'Premium titanium implants (Nobel, Straumann)',
            '20-year durability with proper care',
            'Bone grafting available if needed',
            'Painless with local anaesthesia',
        ],
        cost: '₹25,000 – ₹80,000',
        duration: '1–2 hour procedure',
        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop', // A good dental image
        color: '#388E3C',
        bg: '#E8F5E9',
    },
    {
        icon: '😬',
        title: 'Braces & Aligners',
        short: 'Straighten your teeth with confidence',
        desc: `Get the perfectly aligned smile you have always wanted. We offer metal braces,
    ceramic (tooth-coloured) braces, and invisible clear aligners (like Invisalign). Treatment
    is fully customised for each patient after digital analysis.`,
        points: [
            'Metal braces – cost-effective and reliable',
            'Ceramic braces – less visible',
            'Clear aligners – almost invisible',
            'Self-ligating braces available',
            'Regular follow-ups included in package',
        ],
        cost: '₹18,000 – ₹65,000',
        duration: '12–24 months',
        img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&fit=crop',
        color: '#6A1B9A',
        bg: '#F3E5F5',
    },
    {
        icon: '✨',
        title: 'Teeth Whitening',
        short: 'Professional whitening for a radiant smile',
        desc: `Remove years of staining in a single visit with professional laser/LED teeth whitening.
    Unlike store-bought kits, our in-clinic treatment is safe, effective, and supervised by Doctor,
    achieving up to 8 shades whiter in just one session.`,
        points: [
            'In-clinic laser whitening (1 session)',
            'Take-home whitening trays available',
            'Safe for enamel – professionally supervised',
            'Up to 8 shades improvement',
            'Long-lasting results with maintenance',
        ],
        cost: '₹5,000 – ₹12,000',
        duration: '60–90 min per session',
        img: 'https://images.unsplash.com/photo-1559591937-aaaf10de7c1a?w=600&q=80&fit=crop',
        color: '#E65100',
        bg: '#FFF3E0',
    },
    {
        icon: '👶',
        title: 'Kids Dentistry',
        short: 'Gentle, fun dental care for children',
        desc: `Children deserve special dental care in a friendly environment. Dr. Sharma uses a
    gentle, reassuring approach for kids aged 3–16, including first dental visits, milk tooth
    extractions, dental sealants, and fluoride treatments to protect young smiles.`,
        points: [
            'Friendly, child-safe environment',
            'Dental sealants & fluoride treatment',
            'Milk tooth extractions',
            'Space maintainers',
            'Oral hygiene education for kids',
        ],
        cost: '₹500 – ₹3,000',
        duration: '20–45 min',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop',
        color: '#0277BD',
        bg: '#E1F5FE',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Page Hero */}
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
                    <span className="badge" style={{ marginBottom: '20px' }}>🦷 What We Offer</span>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
                        Our Dental Services
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
                        Advanced dental care under one roof – from routine checkups to complex implants and full smile makeovers.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#F8FBFF" />
                    </svg>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding" style={{ background: '#F8FBFF' }}>
                <div className="container-custom">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {services.map((s, i) => (
                            <div
                                key={s.title}
                                className="card"
                                style={{
                                    padding: '0',
                                    overflow: 'hidden',
                                    display: 'grid',
                                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                                    gridTemplateAreas: i % 2 === 0 ? '"img content"' : '"content img"',
                                }}
                                id={s.title.toLowerCase().replace(/\s+/g, '-')}
                            >
                                {/* Image */}
                                <div style={{ gridArea: 'img', position: 'relative', minHeight: '320px' }}>
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '320px' }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '20px',
                                            left: '20px',
                                            background: s.bg,
                                            color: s.color,
                                            padding: '8px 16px',
                                            borderRadius: '50px',
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                        }}
                                    >
                                        {s.icon} {s.title}
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ gridArea: 'content', padding: '40px 36px' }}>
                                    <div style={{ fontSize: '13px', color: s.color, fontWeight: '600', marginBottom: '8px' }}>{s.short}</div>
                                    <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '16px' }}>{s.title}</h2>
                                    <p style={{ color: '#546E7A', lineHeight: '1.8', fontSize: '14px', marginBottom: '24px' }}>{s.desc}</p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
                                        {s.points.map((p) => (
                                            <div key={p} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '13px', color: '#546E7A' }}>
                                                <span style={{ color: '#4CAF50', fontWeight: '700', flexShrink: 0 }}>✓</span>
                                                {p}
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '20px',
                                            padding: '16px 20px',
                                            background: s.bg,
                                            borderRadius: '12px',
                                            marginBottom: '24px',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontSize: '11px', color: s.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cost Range</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A2E' }}>{s.cost}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '11px', color: s.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Duration</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A2E' }}>{s.duration}</div>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/contact?service=${encodeURIComponent(s.title)}`}
                                        className="btn-accent"
                                        style={{ fontSize: '14px', padding: '10px 22px' }}
                                    >
                                        📅 Book This Service
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                style={{ background: 'linear-gradient(135deg, #4CAF50, #388E3C)', padding: '60px 24px', textAlign: 'center' }}
            >
                <div className="container-custom">
                    <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>
                        Not sure which treatment you need?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '28px', fontSize: '15px' }}>
                        Book a free consultation with Dr. Amit Sharma and get personalised advice.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn-outline">📅 Book Free Consultation</Link>
                        <a href="tel:+919990421048" className="btn-outline">📞 Call +91 99904 21048</a>
                    </div>
                </div>
            </section>
        </>
    );
}
