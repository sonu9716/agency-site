import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const phone = '919990421048';
    const waMessage = encodeURIComponent(
        'Hi, I want a free consultation for my clinic website'
    );

    return (
        <footer
            style={{
                background: 'linear-gradient(135deg, #0D1B3E 0%, #1565C0 100%)',
                color: '#fff',
                paddingTop: '64px',
                paddingBottom: '0',
            }}
        >
            <div className="container-custom">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '48px',
                        paddingBottom: '48px',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: 'rgba(255,255,255,0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '26px',
                                }}
                            >
                                🦷
                            </div>
                            <div>
                                <div style={{ fontSize: '17px', fontWeight: '800' }}>Dr. Amit Sharma</div>
                                <div style={{ fontSize: '12px', opacity: 0.7 }}>Dental Clinic</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '1.8', opacity: 0.75, marginBottom: '20px' }}>
                            20+ years of dedicated dental care in Indirapuram, Ghaziabad. Your smile is
                            our passion.
                        </p>
                        {/* Social */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {['📘', '📸', '▶️'].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '10px',
                                        background: 'rgba(255,255,255,0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px',
                                        transition: 'background 0.2s ease',
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px', opacity: 0.9 }}>
                            Quick Links
                        </h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About Dr. Amit' },
                                { href: '/services', label: 'Our Services' },
                                { href: '/gallery', label: 'Photo Gallery' },
                                { href: '/contact', label: 'Contact & Directions' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        style={{
                                            fontSize: '14px',
                                            opacity: 0.75,
                                            transition: 'opacity 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        }}
                                    >
                                        <span style={{ color: '#4CAF50' }}>›</span> {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px', opacity: 0.9 }}>
                            Our Services
                        </h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                'Root Canal Treatment',
                                'Dental Implants',
                                'Braces & Aligners',
                                'Teeth Whitening',
                                'Kids Dentistry',
                            ].map((s) => (
                                <li key={s}>
                                    <Link
                                        href="/services"
                                        style={{ fontSize: '14px', opacity: 0.75, display: 'flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        <span style={{ color: '#4CAF50' }}>›</span> {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px', opacity: 0.9 }}>
                            Contact Us
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a
                                href="tel:+919990421048"
                                style={{ fontSize: '14px', opacity: 0.75, display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                            >
                                <span>📞</span>
                                <span>+91 99904 21048</span>
                            </a>
                            <div style={{ fontSize: '14px', opacity: 0.75, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span>📍</span>
                                <span>Vaibhav Khand, Indirapuram,<br />Ghaziabad – 201010</span>
                            </div>
                            <div style={{ fontSize: '14px', opacity: 0.75, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span>⏰</span>
                                <span>Mon–Sat: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 2:00 PM</span>
                            </div>
                            <a
                                href={`https://wa.me/${phone}?text=${waMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent"
                                style={{ marginTop: '8px', fontSize: '13px', padding: '10px 18px' }}
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    padding: '20px 24px',
                }}
            >
                <div
                    className="container-custom"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                    }}
                >
                    <p style={{ fontSize: '13px', opacity: 0.6 }}>
                        © {currentYear} Dr. Amit Sharma Dental Clinic. All rights reserved.
                    </p>
                    <a
                        href="https://docsitesolutions.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            padding: '6px 16px',
                            fontSize: '12px',
                            fontWeight: '600',
                            opacity: 0.85,
                            transition: 'opacity 0.2s ease',
                        }}
                    >
                        <span style={{ fontSize: '16px' }}>🌐</span>
                        Built by DocSite Solutions
                    </a>
                </div>
            </div>
        </footer>
    );
}
