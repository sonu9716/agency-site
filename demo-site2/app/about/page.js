export const metadata = {
    title: 'About Dr. Priya Gupta | Senior Gynecologist Indirapuram',
    description: 'Learn about Dr. Priya Gupta – MD Gynaecology with 15+ years of experience. AIIMS graduate, IMA member, specialist in Pregnancy Care, PCOS, and Women\'s Wellness in Indirapuram.',
};

import Link from 'next/link';
import { Icons } from '@/components/Icons';

const skills = [
    { name: 'Pregnancy & High-Risk Obstetrics', pct: 98 },
    { name: 'PCOS & Hormonal Disorders', pct: 96 },
    { name: 'Menopause Management', pct: 94 },
    { name: 'IVF Counseling & Fertility', pct: 90 },
    { name: 'Gynaecological Surgery', pct: 88 },
];

const credentials = [
    { year: '2006', degree: 'MBBS', college: 'AIIMS, New Delhi' },
    { year: '2010', degree: 'MD – Gynaecology & Obstetrics', college: 'Maulana Azad Medical College, Delhi' },
    { year: '2012', degree: 'Fellowship – Reproductive Medicine', college: 'Indian Council of Medical Research' },
];

const achievements = [
    { Icon: Icons.award, text: 'Best Gynaecologist Award – Indirapuram 2023 & 2024' },
    { Icon: Icons.shield, text: 'Member – Indian Medical Association (IMA)' },
    { Icon: Icons.heart, text: '500+ successful deliveries with zero complications' },
    { Icon: Icons.sparkle, text: 'Invited speaker – National Women\'s Health Summit 2022' },
    { Icon: Icons.star, text: '4.9/5 average Google rating from 180+ reviews' },
    { Icon: Icons.leaf, text: 'Certified in Minimally Invasive Gynaecological Surgery' },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(145deg, #2D0B45, #4A1060)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(212,175,55,0.08), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ height: '3px', width: '40px', background: '#D4AF37', margin: '0 auto 20px', borderRadius: '2px' }} />
                    <span className="label-tag">About the Doctor</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Dr. Priya Gupta</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '540px', margin: '0 auto' }}>
                        MD Gynaecology & Obstetrics · Senior Women&apos;s Health Specialist · 15+ Years of Compassionate Practice
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none"><path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#FDFBFE" /></svg>
                </div>
            </section>

            {/* Main Bio */}
            <section style={{ background: '#FDFBFE', padding: '96px 0' }}>
                <div className="container-custom">
                    <div className="about-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '72px', alignItems: 'start' }}>
                        {/* Photo */}
                        <div style={{ position: 'sticky', top: '90px' }}>
                            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 72px rgba(74,16,96,0.2)', position: 'relative' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=90&fit=crop&crop=faces"
                                    alt="Dr. Priya Gupta"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,11,69,0.85) 0%, transparent 50%)' }} />
                                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                                    <div style={{ fontWeight: '800', color: '#fff', fontSize: '18px' }}>Dr. Priya Gupta</div>
                                    <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '4px' }}>MD (Gynaecology) · AIIMS Graduate</div>
                                    <div style={{ display: 'flex', gap: '2px', marginTop: '8px' }}>
                                        {[...Array(5)].map((_, i) => <Icons.star key={i} width={13} height={13} color="#D4AF37" />)}
                                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '6px' }}>4.9 · 180+ Reviews</span>
                                    </div>
                                </div>
                            </div>
                            {/* IMA card */}
                            <div className="card" style={{ padding: '20px 22px', marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F5EEF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icons.shield width={18} height={18} color="#7B2D8B" />
                                    </div>
                                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A0A2E' }}>Indian Medical Association</div>
                                </div>
                                <div style={{ fontSize: '13px', color: '#987AB0', lineHeight: '1.6' }}>Registered member, IMA. Registration No. UP-23041.</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="gold-line" />
                            <span className="label-tag">Personal Bio</span>
                            <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Dedicated to Women&apos;s Wellbeing</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#5D397A', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
                                <p>Dr. Priya Gupta is one of Indirapuram&apos;s most respected and compassionate women&apos;s health specialists, with over 15 years of clinical experience spanning obstetrics, gynaecology, and reproductive medicine.</p>
                                <p>Having completed her MBBS from AIIMS, New Delhi, and her MD in Gynaecology & Obstetrics from Maulana Azad Medical College, she combines academic excellence with genuine empathy. She is known for creating a safe, non-judgmental space for women of all ages.</p>
                                <p>Her clinic in Niti Khand, Indirapuram, offers evening appointments specifically designed to accommodate working women — a thoughtful choice that reflects her understanding of her patients&apos; realities.</p>
                                <p>Whether you&apos;re navigating your first pregnancy, managing PCOS, or seeking support through menopause, Dr. Priya&apos;s approach is always: listen first, treat holistically, and empower the patient with knowledge.</p>
                            </div>

                            {/* Skills */}
                            <h3 style={{ fontWeight: '800', fontSize: '17px', color: '#1A0A2E', marginBottom: '20px' }}>Areas of Expertise</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                                {skills.map((s) => (
                                    <div key={s.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', color: '#1A0A2E' }}>{s.name}</span>
                                            <span style={{ fontSize: '13px', color: '#7B2D8B', fontWeight: '700' }}>{s.pct}%</span>
                                        </div>
                                        <div style={{ height: '7px', background: '#EDE0F5', borderRadius: '50px', overflow: 'hidden' }}>
                                            <div style={{ height: '100%', width: `${s.pct}%`, background: 'linear-gradient(90deg, #7B2D8B, #D4AF37)', borderRadius: '50px' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Education */}
                            <h3 style={{ fontWeight: '800', fontSize: '17px', color: '#1A0A2E', marginBottom: '20px' }}>Education & Training</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
                                {credentials.map((c, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '18px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '54px', flexShrink: 0 }}>
                                            <div style={{ fontSize: '11px', fontWeight: '700', color: '#7B2D8B', background: '#F5EEF8', padding: '4px 6px', borderRadius: '6px' }}>{c.year}</div>
                                            {i < credentials.length - 1 && <div style={{ width: '2px', flex: 1, background: '#E8DAEF', margin: '8px 0', minHeight: '28px' }} />}
                                        </div>
                                        <div style={{ paddingBottom: '20px' }}>
                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A0A2E' }}>{c.degree}</div>
                                            <div style={{ fontSize: '13px', color: '#987AB0', marginTop: '3px' }}>{c.college}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Achievements */}
                            <h3 style={{ fontWeight: '800', fontSize: '17px', color: '#1A0A2E', marginBottom: '18px' }}>Achievements & Memberships</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {achievements.map((a) => {
                                    const Icon = a.Icon;
                                    return (
                                        <div key={a.text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#F5EEF8', padding: '14px', borderRadius: '12px', border: '1px solid #E2D4EC' }}>
                                            <Icon width={16} height={16} color="#7B2D8B" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontSize: '13px', color: '#5D397A', lineHeight: '1.5' }}>{a.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
