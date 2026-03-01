export const metadata = {
    title: 'Patient Stories | Anonymous Testimonials',
    description: 'Read anonymous patient stories from Dr. Priya Gupta\'s clinic. Shared testimonials about Pregnancy Care, PCOS, Menopause, and IVF support from real patients.',
};

import Link from 'next/link';
import { Icons } from '@/components/Icons';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const stories = [
    { initials: 'A.M.', age: '28', concern: 'PCOS Treatment', time: '2 years ago', stars: 5, text: 'Dr. Priya understood my PCOS journey without any judgement. Her treatment plan actually worked — my cycles are regular for the first time in 4 years. She gave me hope when I felt hopeless. I recommend her to every woman dealing with hormonal issues.' },
    { initials: 'R.S.', age: '31', concern: 'First Pregnancy', time: '8 months ago', stars: 5, text: 'I was a first-time mother and terrified of everything. Dr. Priya made every antenatal visit feel reassuring. She was available on WhatsApp for all my midnight worries. My delivery was smooth and I felt completely supported throughout. Cannot thank her enough.' },
    { initials: 'K.J.', age: '52', concern: 'Menopause Management', time: '1 year ago', stars: 5, text: 'Finally a doctor who takes menopause symptoms seriously. No dismissals, no "it\'s just hormones." Proper care, proper explanations. She adjusted my HRT perfectly and my quality of life has improved so much. Evening clinic timing is also very convenient.' },
    { initials: 'N.T.', age: '35', concern: 'IVF Counseling', time: '6 months ago', stars: 5, text: 'We had been trying for 3 years. Dr. Priya was not just a doctor during this time — she was a counselor and a support system. Her referrals were excellent and her guidance through the IVF process was invaluable. We now have a beautiful baby girl.' },
    { initials: 'S.V.', age: '24', concern: 'Regular Checkup', time: '3 months ago', stars: 5, text: 'I was always anxious about gynaecology appointments but the clinic environment is so welcoming and private. Dr. Priya explains everything gently and makes you feel in control. Now I go for checkups every 6 months without any hesitation.' },
    { initials: 'P.K.', age: '44', concern: 'PCOS & Fertility', time: '1.5 years ago', stars: 5, text: 'Dr. Priya managed my PCOS while guiding me through a late fertility journey. Her patience, knowledge, and warmth are extraordinary. I am 6 months pregnant now at 44 — something I had given up on. She is truly exceptional.' },
];

export default function PatientStoriesPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '120px', paddingBottom: '72px', background: 'linear-gradient(145deg, #2D0B45, #4A1060)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(212,175,55,0.07), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ height: '3px', width: '40px', background: '#D4AF37', margin: '0 auto 20px', borderRadius: '2px' }} />
                    <span className="label-tag">Patient Stories</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Trusted by 2,000+ Women</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
                        All stories are shared anonymously to protect patient privacy. These are real experiences from real women.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none"><path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#FDFBFE" /></svg>
                </div>
            </section>

            {/* Carousel spotlight */}
            <section style={{ background: '#FDFBFE', padding: '80px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <div className="gold-line" style={{ margin: '0 auto 16px' }} />
                        <h2 className="heading-lg">In Their Own Words</h2>
                        <p className="body-text" style={{ textAlign: 'center', marginTop: '8px' }}>Navigate with the arrows to read different stories.</p>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* All Stories Grid */}
            <section style={{ background: '#F5EEF8', padding: '96px 0' }}>
                <div className="container-custom">
                    <div style={{ marginBottom: '52px' }}>
                        <div className="gold-line" />
                        <span className="label-tag">All Reviews</span>
                        <h2 className="heading-lg">More Stories</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {stories.map((s, i) => (
                            <div key={i} className="card" style={{ padding: '28px', background: '#fff' }}>
                                {/* Stars */}
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                                    {[...Array(s.stars)].map((_, j) => <Icons.star key={j} width={14} height={14} color="#D4AF37" />)}
                                </div>
                                <p style={{ fontSize: '14px', color: '#5D397A', lineHeight: '1.8', marginBottom: '20px', fontStyle: 'italic' }}>
                                    &ldquo;{s.text}&rdquo;
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #E8DAEF' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #7B2D8B, #4A1060)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '13px' }}>
                                            {s.initials}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1A0A2E' }}>Anonymous</div>
                                            <div style={{ fontSize: '11px', color: '#987AB0' }}>{s.concern}</div>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: '#C0A5D0' }}>{s.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#fff', padding: '80px 0' }}>
                <div className="container-custom" style={{ textAlign: 'center' }}>
                    <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Ready to Write Your Own Story?</h2>
                    <p className="body-text" style={{ maxWidth: '440px', margin: '0 auto 32px', textAlign: 'center' }}>
                        Book an appointment today. Evening clinics available Mon–Sat.
                    </p>
                    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn-primary"><Icons.calendar width={15} height={15} />Book Appointment</Link>
                        <a href="https://wa.me/919990421048" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <Icons.whatsapp width={15} height={15} />WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
