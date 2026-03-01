'use client';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

const services = [
    { Icon: Icons.baby, title: 'Pregnancy Care', desc: 'Complete antenatal & postnatal support for a safe, joyful birth journey', color: '#7B2D8B', bg: '#F5EEF8' },
    { Icon: Icons.dna, title: 'PCOS Treatment', desc: 'Hormonal balance, lifestyle plans, and long-term management of PCOS', color: '#4A1060', bg: '#EDE0F5' },
    { Icon: Icons.sun, title: 'Menopause Management', desc: 'HRT, lifestyle coaching, and emotional support through the transition', color: '#D4AF37', bg: '#FBF6E3' },
    { Icon: Icons.heart, title: 'IVF Counseling', desc: 'Compassionate fertility guidance, second opinions, and IVF preparation', color: '#9C27B0', bg: '#F3E6F9' },
    { Icon: Icons.clipboard, title: 'Regular Checkups', desc: 'Annual gynaecology exams, Pap smear, breast exam, and wellness screening', color: '#00838F', bg: '#E0F5F7' },
];

export default function ServiceCards() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: '#E8DAEF', borderRadius: '16px', overflow: 'hidden', border: '2px solid #E8DAEF' }}>
            {services.map((s) => {
                const Icon = s.Icon;
                return (
                    <Link key={s.title} href="/services" style={{ textDecoration: 'none' }}>
                        <div className="service-tile" style={{ background: '#fff', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', height: '100%', cursor: 'pointer', transition: 'background 0.2s ease' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon width={22} height={22} color={s.color} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A0A2E', marginBottom: '6px' }}>{s.title}</div>
                                <div style={{ fontSize: '13px', color: '#987AB0', lineHeight: '1.6' }}>{s.desc}</div>
                            </div>
                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '700', color: s.color }}>
                                Learn more <Icons.chevronRight width={12} height={12} />
                            </div>
                        </div>
                    </Link>
                );
            })}
            <style>{`.service-tile:hover { background: #FDFBFE !important; }`}</style>
        </div>
    );
}
