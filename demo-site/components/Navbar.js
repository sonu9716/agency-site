'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/Icons';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    const isDark = !scrolled;

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(11,28,56,0.0)',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            boxShadow: scrolled ? '0 1px 16px rgba(11,28,56,0.1)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(224,231,239,0.8)' : 'none',
        }}>
            <div className="container-custom" style={{ padding: '0 24px' }}>
                <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '10px',
                            background: '#1565C0',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Icons.tooth width={18} height={18} color="#fff" />
                        </div>
                        <div>
                            <div style={{ fontSize: '15px', fontWeight: '800', color: scrolled ? '#0B1C38' : '#fff', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                                Dr. Amit Sharma
                            </div>
                            <div style={{ fontSize: '11px', color: scrolled ? '#78909C' : 'rgba(255,255,255,0.6)', fontWeight: '500' }}>
                                Dental Clinic
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: pathname === link.href
                                    ? '#1565C0'
                                    : scrolled ? '#546E7A' : 'rgba(255,255,255,0.8)',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease',
                                paddingBottom: pathname === link.href ? '2px' : '0',
                                borderBottom: pathname === link.href ? '2px solid #1565C0' : '2px solid transparent',
                            }}>
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '7px',
                            background: '#4CAF50', color: '#fff',
                            padding: '9px 20px', borderRadius: '6px',
                            fontWeight: '700', fontSize: '13px', letterSpacing: '0.2px',
                            textDecoration: 'none', transition: 'opacity 0.2s ease',
                        }}>
                            <Icons.calendar width={13} height={13} />
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="mobile-menu-btn"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
                            color: scrolled ? '#0B1C38' : '#fff', display: 'none',
                        }}
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {menuOpen
                                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                            }
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    background: '#fff', borderTop: '1px solid #E0E7EF',
                    padding: '16px 24px 20px',
                    display: 'flex', flexDirection: 'column', gap: '4px',
                }}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} style={{
                            padding: '11px 14px', borderRadius: '8px', fontSize: '15px',
                            fontWeight: pathname === link.href ? '700' : '500',
                            color: pathname === link.href ? '#1565C0' : '#1A1A2E',
                            background: pathname === link.href ? '#E3F2FD' : 'transparent',
                            textDecoration: 'none',
                        }}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" style={{
                        marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px',
                        background: '#4CAF50', color: '#fff', padding: '12px', borderRadius: '8px',
                        fontWeight: '700', fontSize: '14px', textDecoration: 'none',
                    }}>
                        <Icons.calendar width={13} height={13} />
                        Book Appointment
                    </Link>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          /* Always white nav on mobile - no transparent dark overlay */
          header { 
            background: rgba(255,255,255,0.97) !important;
            backdrop-filter: blur(12px) !important;
            box-shadow: 0 1px 16px rgba(11,28,56,0.1) !important;
            border-bottom: 1px solid rgba(224,231,239,0.8) !important;
          }
        }
      `}</style>
        </header>
    );
}
