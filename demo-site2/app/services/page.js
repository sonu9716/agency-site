export const metadata = {
    title: 'Our Services | Pregnancy Care, PCOS, Menopause & More',
    description: 'Comprehensive women\'s health services by Dr. Priya Gupta: Pregnancy Care, PCOS Treatment, Menopause Management, IVF Counseling, and Regular Gynaecology Checkups in Indirapuram.',
};

import Link from 'next/link';
import { Icons } from '@/components/Icons';

const services = [
    {
        Icon: Icons.baby,
        title: 'Pregnancy Care',
        subtitle: 'Antenatal & Postnatal',
        color: '#7B2D8B',
        bg: '#F5EEF8',
        cost: '₹800 – ₹1,500 / visit',
        img: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&q=85&fit=crop',
        desc: 'Comprehensive pregnancy care from conception to delivery. Dr. Priya monitors mother and baby closely, offering nutritional guidance, high-risk pregnancy management, and birth preparation.',
        points: ['Monthly to fortnightly antenatal visits', 'Ultrasound referrals & fetal monitoring', 'High-risk pregnancy management', 'Pre-natal classes & birthing plan', 'Postnatal care & lactation support'],
    },
    {
        Icon: Icons.dna,
        title: 'PCOS Treatment',
        subtitle: 'Polycystic Ovary Syndrome',
        color: '#4A1060',
        bg: '#EDE0F5',
        cost: '₹700 – ₹1,200 / consultation',
        img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=85&fit=crop',
        desc: 'Dr. Priya takes a holistic approach to PCOS — combining medical therapy with lifestyle and dietary changes to restore hormonal balance, regulate cycles, and improve quality of life.',
        points: ['Hormonal profiling & diagnosis', 'Personalised treatment plans', 'Dietary & lifestyle coaching', 'Fertility management in PCOS', 'Long-term monitoring & prevention'],
    },
    {
        Icon: Icons.sun,
        title: 'Menopause Management',
        subtitle: 'Peri- & Post-Menopause',
        color: '#B8860B',
        bg: '#FBF6E3',
        cost: '₹800 – ₹1,500 / visit',
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85&fit=crop',
        desc: 'Menopause is a major transition, not a disease. Dr. Priya helps women navigate hot flushes, mood changes, bone health, and sexuality with evidence-based HRT options and holistic support.',
        points: ['Hormone Replacement Therapy (HRT)', 'Bone density assessment', 'Mood & sleep management', 'Cardiovascular health screening', 'Vaginal dryness & libido treatment'],
    },
    {
        Icon: Icons.heart,
        title: 'IVF Counseling',
        subtitle: 'Fertility & Reproductive Medicine',
        color: '#9C27B0',
        bg: '#F3E6F9',
        cost: '₹1,000 – ₹2,000 / consultation',
        img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=85&fit=crop',
        desc: 'For couples facing fertility challenges, Dr. Priya provides honest counseling, pre-IVF workups, and co-ordinates with the best fertility specialists to guide you through every step.',
        points: ['Fertility assessment for couples', 'IVF & IUI pre-treatment workup', 'Second opinion on fertility reports', 'Emotional support & counseling', 'Post-IVF pregnancy management'],
    },
    {
        Icon: Icons.clipboard,
        title: 'Regular Checkups',
        subtitle: 'Annual Wellness Screening',
        color: '#00838F',
        bg: '#E0F5F7',
        cost: '₹600 – ₹900 / visit',
        img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=85&fit=crop',
        desc: 'Preventive care is the best care. Annual gynaecology checkups including Pap smear, breast examination, hormonal screening, and lifestyle review — helping you stay a step ahead.',
        points: ['Pap smear & cervical screening', 'Breast examination', 'Hormonal blood work panel', 'BMI, BP & lifestyle assessment', 'STI & reproductive health check'],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '120px', paddingBottom: '72px', background: 'linear-gradient(145deg, #2D0B45, #4A1060)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(212,175,55,0.07), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ height: '3px', width: '40px', background: '#D4AF37', margin: '0 auto 20px', borderRadius: '2px' }} />
                    <span className="label-tag">What We Offer</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Women&apos;s Health Services</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
                        Expert, compassionate care from adolescence through menopause — and everything in between.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none"><path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#FDFBFE" /></svg>
                </div>
            </section>

            {/* Services */}
            <section style={{ background: '#FDFBFE' }} className="section-padding">
                <div className="container-custom">
                    <div className="services-container-gap" style={{ display: 'flex', flexDirection: 'column' }}>
                        {services.map((s, i) => {
                            const Icon = s.Icon;
                            return (
                                <div key={s.title} style={{ display: 'grid', alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }} className="service-item-grid">
                                    <div style={{ position: 'relative', direction: 'ltr' }}>
                                        <img src={s.img} alt={s.title} style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 16px 56px rgba(74,16,96,0.16)', display: 'block' }} />
                                        <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: '#fff', borderRadius: '10px', padding: '10px 16px', boxShadow: '0 4px 20px rgba(74,16,96,0.15)' }}>
                                            <div style={{ fontSize: '11px', color: '#987AB0', fontWeight: '600' }}>Starting from</div>
                                            <div style={{ fontWeight: '800', fontSize: '14px', color: '#1A0A2E' }}>{s.cost}</div>
                                        </div>
                                    </div>
                                    <div style={{ direction: 'ltr' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon width={22} height={22} color={s.color} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '800', fontSize: '18px', color: '#1A0A2E' }}>{s.title}</div>
                                                <div style={{ fontSize: '12px', color: '#987AB0', marginTop: '2px' }}>{s.subtitle}</div>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '15px', color: '#5D397A', lineHeight: '1.8', marginBottom: '24px' }}>{s.desc}</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                                            {s.points.map((pt) => (
                                                <div key={pt} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                                                        <Icons.check width={11} height={11} color="#fff" />
                                                    </div>
                                                    <span style={{ fontSize: '14px', color: '#5D397A', lineHeight: '1.5' }}>{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href="/contact" className="btn-primary">
                                            <Icons.calendar width={14} height={14} />
                                            Book Consultation
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
