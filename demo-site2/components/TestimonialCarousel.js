'use client';
import { useState } from 'react';
import { Icons } from '@/components/Icons';

const testimonials = [
    { initials: 'A.M.', concern: 'PCOS Treatment', text: 'Dr. Priya understood my PCOS journey without any judgement. Her treatment plan actually worked — my cycles are regular for the first time in 4 years. So grateful.', rating: 5 },
    { initials: 'R.S.', concern: 'Pregnancy Care', text: 'I was a first-time mother and terrified. Dr. Priya made every visit feel reassuring. My delivery was smooth and I felt completely supported throughout.', rating: 5 },
    { initials: 'K.J.', concern: 'Menopause', text: 'Finally a doctor who takes menopause symptoms seriously. No dismissal, just proper care. She explained everything clearly and my quality of life has improved dramatically.', rating: 5 },
    { initials: 'N.T.', concern: 'IVF Counseling', text: 'We were going through a very emotional time with fertility issues. Dr. Priya was not just our doctor but also a compassionate guide. We now have a beautiful baby girl.', rating: 5 },
    { initials: 'S.V.', concern: 'Regular Checkup', text: 'I was always anxious about gynaecology appointments but the clinic is so welcoming. Everything is private and comfortable. Now I come every 6 months without hesitation.', rating: 5 },
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const t = testimonials[current];

    return (
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
            <div className="card" style={{ padding: '48px 52px', position: 'relative', overflow: 'hidden', border: '1px solid #E2D4EC', minHeight: '260px' }}>
                {/* Quote mark background */}
                <div className="quote-mark">&ldquo;</div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                    {[...Array(t.rating)].map((_, i) => (
                        <Icons.star key={i} width={16} height={16} color="#D4AF37" />
                    ))}
                </div>

                <p style={{ fontSize: '16px', color: '#1A0A2E', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
                    &ldquo;{t.text}&rdquo;
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid #E2D4EC', position: 'relative', zIndex: 1 }}>
                    <div style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #7B2D8B, #4A1060)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: '800', fontSize: '14px',
                    }}>
                        {t.initials}
                    </div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A0A2E' }}>Anonymous Patient</div>
                        <div style={{ fontSize: '12px', color: '#987AB0', marginTop: '2px' }}>{t.concern} · Indirapuram</div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button onClick={prev} style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '1.5px solid #E2D4EC', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                }} aria-label="Previous">
                    <Icons.chevronLeft width={16} height={16} color="#7B2D8B" />
                </button>

                {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} style={{
                        width: i === current ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: i === current ? '#7B2D8B' : '#E2D4EC',
                        border: 'none', cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                    }} aria-label={`Go to ${i + 1}`} />
                ))}

                <button onClick={next} style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '1.5px solid #E2D4EC', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                }} aria-label="Next">
                    <Icons.chevronRight width={16} height={16} color="#7B2D8B" />
                </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#987AB0' }}>
                {current + 1} / {testimonials.length} — All testimonials are anonymous for privacy
            </div>
        </div>
    );
}
