export const metadata = {
    title: 'About Dr. Amit Sharma | Root Canal Specialist Indirapuram',
    description:
        'Learn about Dr. Amit Sharma – BDS, MDS with 20+ years of experience as a Root Canal and Cosmetic Dentistry specialist in Indirapuram, Ghaziabad.',
};

const credentials = [
    { year: '2003', degree: 'BDS (Bachelor of Dental Surgery)', college: 'King George Medical University, Lucknow' },
    { year: '2006', degree: 'MDS – Endodontics (Root Canal)', college: 'Aligarh Muslim University, Aligarh' },
    { year: '2008', degree: 'Fellowship – Implantology', college: 'ICOI – International Congress of Oral Implantologists' },
];

const achievements = [
    { icon: '🏆', label: 'Best Dentist Award – Indirapuram (2022, 2023, 2024)' },
    { icon: '👥', label: '500+ successfully treated patients' },
    { icon: '🎓', label: 'Resource person at UP Dental Conference 2021' },
    { icon: '💉', label: 'Certified in advanced digital dentistry' },
    { icon: '📋', label: 'Member – Indian Dental Association (IDA)' },
    { icon: '⭐', label: '4.9/5 average Google rating from 250+ reviews' },
];

const skills = [
    { name: 'Root Canal (Endodontics)', pct: 99 },
    { name: 'Dental Implants', pct: 96 },
    { name: 'Cosmetic Dentistry', pct: 94 },
    { name: 'Paediatric Dentistry', pct: 92 },
    { name: 'Orthodontics (Braces)', pct: 88 },
];

export default function AboutPage() {
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
                    <span className="badge" style={{ marginBottom: '20px' }}>🦷 About the Doctor</span>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
                        Dr. Amit Sharma
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
                        BDS, MDS – Root Canal Specialist & Cosmetic Dentist with 20+ years of dedicated service
                        to the Indirapuram community.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#F8FBFF" />
                    </svg>
                </div>
            </section>

            {/* MAIN BIO */}
            <section className="section-padding" style={{ background: '#F8FBFF' }}>
                <div className="container-custom">
                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'start' }}
                        className="about-main-grid"
                    >
                        {/* Photo column */}
                        <div style={{ position: 'sticky', top: '90px' }}>
                            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(21,101,192,0.2)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=90&fit=crop&crop=faces"
                                    alt="Dr. Amit Sharma – Dental Surgeon Indirapuram"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'top' }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(13,27,62,0.95), transparent)',
                                        padding: '32px 24px 24px',
                                    }}
                                >
                                    <div style={{ color: '#fff', fontWeight: '800', fontSize: '20px' }}>Dr. Amit Sharma</div>
                                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', marginTop: '4px' }}>
                                        BDS, MDS (Endodontics)
                                    </div>
                                    <div style={{ display: 'flex', gap: '2px', marginTop: '8px' }}>
                                        {'★★★★★'.split('').map((s, i) => (
                                            <span key={i} style={{ color: '#FFB300', fontSize: '14px' }}>{s}</span>
                                        ))}
                                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginLeft: '8px' }}>4.9 · 250+ Reviews</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact card */}
                            <div className="card" style={{ padding: '24px', marginTop: '24px' }}>
                                <h4 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '15px', color: '#1A1A2E' }}>Get in Touch</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <a href="tel:+919990421048" style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#1565C0', fontSize: '14px', fontWeight: '500' }}>
                                        <span>📞</span> +91 99904 21048
                                    </a>
                                    <a
                                        href="https://wa.me/919990421048"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-accent"
                                        style={{ fontSize: '14px', padding: '10px 20px', justifyContent: 'center' }}
                                    >
                                        💬 WhatsApp for Appointment
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Text column */}
                        <div>
                            <span className="section-tag">Personal Bio</span>
                            <h2 className="section-title">Passionate About Your Dental Health</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#546E7A', fontSize: '15px', lineHeight: '1.8', marginBottom: '36px' }}>
                                <p>
                                    Dr. Amit Sharma is one of Indirapuram&apos;s most respected and experienced dental surgeons,
                                    serving the community for over two decades. With a specialization in Endodontics (Root Canal
                                    Therapy) and a fellowship in Implantology, he brings an unmatched depth of expertise to
                                    every patient he treats.
                                </p>
                                <p>
                                    Having completed his BDS from the prestigious King George Medical University, Lucknow, and
                                    his MDS (Endodontics) from Aligarh Muslim University, Dr. Sharma has consistently stayed
                                    at the forefront of dental science, regularly attending national and international
                                    conferences and workshops.
                                </p>
                                <p>
                                    His clinic, Sharma Dental Clinic, in Vaibhav Khand, Indirapuram, is equipped with
                                    state-of-the-art technologies including digital X-rays, rotary endodontic systems, laser
                                    whitening units, and advanced sterilisation equipment — ensuring world-class care for every
                                    patient, young or old.
                                </p>
                                <p>
                                    Dr. Sharma is known for his gentle, patient-first approach, particularly appreciated by
                                    patients who have previously had dental anxiety. He believes in transparent communication
                                    and affordable pricing, making quality dental care accessible to all.
                                </p>
                            </div>

                            {/* Skills */}
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A2E', marginBottom: '20px' }}>
                                Areas of Expertise
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', color: '#1A1A2E' }}>{skill.name}</span>
                                            <span style={{ fontSize: '13px', color: '#1565C0', fontWeight: '700' }}>{skill.pct}%</span>
                                        </div>
                                        <div style={{ height: '8px', background: '#E3F2FD', borderRadius: '50px', overflow: 'hidden' }}>
                                            <div
                                                style={{
                                                    height: '100%',
                                                    width: `${skill.pct}%`,
                                                    background: 'linear-gradient(90deg, #1565C0, #4CAF50)',
                                                    borderRadius: '50px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Credentials */}
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A2E', marginBottom: '20px' }}>
                                Education & Credentials
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
                                {credentials.map((c, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px', flexShrink: 0 }}>
                                            <div style={{ fontSize: '12px', fontWeight: '700', color: '#1565C0', background: '#E3F2FD', padding: '4px 8px', borderRadius: '6px', whiteSpace: 'nowrap' }}>{c.year}</div>
                                            {i < credentials.length - 1 && (
                                                <div style={{ width: '2px', flex: 1, background: '#E3F2FD', margin: '8px 0', minHeight: '32px' }} />
                                            )}
                                        </div>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E' }}>{c.degree}</div>
                                            <div style={{ fontSize: '13px', color: '#546E7A', marginTop: '4px' }}>{c.college}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Achievements */}
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A2E', marginBottom: '20px' }}>
                                Awards & Achievements
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {achievements.map((a) => (
                                    <div
                                        key={a.label}
                                        style={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'flex-start',
                                            background: '#F8FBFF',
                                            padding: '14px',
                                            borderRadius: '12px',
                                            border: '1px solid #E0E7EF',
                                        }}
                                    >
                                        <span style={{ fontSize: '18px', flexShrink: 0 }}>{a.icon}</span>
                                        <span style={{ fontSize: '13px', color: '#546E7A', lineHeight: '1.5' }}>{a.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
