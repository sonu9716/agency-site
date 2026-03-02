'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/Icons';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/patient-stories', label: 'Patient Stories' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [pathname]);

    const darkMode = !scrolled;

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
            backdropFilter: scrolled ? 'blur(14px)' : 'none',
            boxShadow: scrolled ? '0 1px 20px rgba(74,16,96,0.08)' : 'none',
            borderBottom: scrolled ? '1px solid #E2D4EC' : 'none',
        }}>
            <div className="container-custom">
                <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <div style={{
                            width: '38px', height: '38px', borderRadius: '10px',
                            background: 'linear-gradient(135deg, #7B2D8B, #4A1060)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Icons.stethoscope width={20} height={20} color="#fff" />
                        </div>
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: '800', color: darkMode ? '#fff' : '#1A0A2E', letterSpacing: '-0.01em', lineHeight: '1.2' }}>
                                Dr. Priya Gupta
                            </div>
                            <div style={{ fontSize: '11px', color: darkMode ? 'rgba(255,255,255,0.6)' : '#987AB0', fontWeight: '500' }}>
                                Gynecologist & Obstetrician
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} style={{
                                fontSize: '14px', fontWeight: '600',
                                color: pathname === link.href ? '#7B2D8B' : darkMode ? 'rgba(255,255,255,0.82)' : '#5D397A',
                                textDecoration: 'none', transition: 'color 0.2s ease',
                                paddingBottom: '2px',
                                borderBottom: pathname === link.href ? '2px solid #D4AF37' : '2px solid transparent',
                            }}>
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '7px',
                            background: 'linear-gradient(135deg, #D4AF37, #C9A227)',
                            color: '#1A0A2E',
                            padding: '9px 20px', borderRadius: '8px',
                            fontWeight: '700', fontSize: '13px',
                            textDecoration: 'none', letterSpacing: '0.2px',
                        }}>
                            <Icons.calendar width={13} height={13} />
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="mobile-menu-btn"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: darkMode ? '#fff' : '#4A1060', display: 'none' }}
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {menuOpen
                                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{ background: '#fff', borderTop: '1px solid #E2D4EC', padding: '14px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} style={{
                            padding: '11px 14px', borderRadius: '8px', fontSize: '15px',
                            fontWeight: pathname === link.href ? '700' : '500',
                            color: pathname === link.href ? '#7B2D8B' : '#1A0A2E',
                            background: pathname === link.href ? '#F5EEF8' : 'transparent',
                            textDecoration: 'none',
                        }}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" style={{
                        marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px',
                        background: '#D4AF37', color: '#1A0A2E', padding: '12px', borderRadius: '8px',
                        fontWeight: '700', fontSize: '14px', textDecoration: 'none',
                    }}>
                        <Icons.calendar width={14} height={14} />
                        Book Appointment
                    </Link>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
