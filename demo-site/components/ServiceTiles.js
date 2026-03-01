'use client';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

const services = [
    { Icon: Icons.rootcanal, title: 'Root Canal', desc: 'Pain-free with modern rotary endodontics', href: '/services', color: '#1565C0' },
    { Icon: Icons.implant, title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement', href: '/services', color: '#0277BD' },
    { Icon: Icons.braces, title: 'Braces & Aligners', desc: 'Metal, ceramic, and invisible clear aligners', href: '/services', color: '#6A1B9A' },
    { Icon: Icons.whitening, title: 'Teeth Whitening', desc: 'Professional laser whitening in one session', href: '/services', color: '#E65100' },
    { Icon: Icons.kids, title: 'Kids Dentistry', desc: 'Gentle, child-friendly dental care', href: '/services', color: '#2E7D32' },
];

export default function ServiceTiles() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: '#F0F4F8', border: '2px solid #F0F4F8', borderRadius: '16px', overflow: 'hidden' }}>
            {services.map((s) => {
                const Icon = s.Icon;
                return (
                    <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
                        <div
                            className="service-tile"
                            style={{
                                background: '#fff', padding: '32px 28px', height: '100%',
                                cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '16px',
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px',
                                background: `${s.color}12`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Icon width={22} height={22} color={s.color} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0B1C38', marginBottom: '6px' }}>{s.title}</div>
                                <div style={{ fontSize: '13px', color: '#78909C', lineHeight: '1.6' }}>{s.desc}</div>
                            </div>
                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', color: s.color, fontSize: '12px', fontWeight: '700' }}>
                                Learn more <Icons.chevronRight width={12} height={12} />
                            </div>
                        </div>
                    </Link>
                );
            })}
            <style>{`
        .service-tile { transition: background 0.2s ease; }
        .service-tile:hover { background: #F8FBFF !important; }
      `}</style>
        </div>
    );
}
