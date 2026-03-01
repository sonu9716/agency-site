'use client';
import { useState } from 'react';
import { Icons } from '@/components/Icons';

export default function AppointmentForm({ compact = false }) {
    const [form, setForm] = useState({ name: '', issue: '', date: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.issue) return;
        const msg = `Hi, I want a free consultation for my clinic website`;
        window.open('https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website', '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#F0FFF4', border: '2px solid #25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icons.check width={24} height={24} color="#25D366" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '16px', color: '#1A0A2E', marginBottom: '6px' }}>WhatsApp Opening!</div>
                <div style={{ fontSize: '13px', color: '#987AB0' }}>Complete your booking on WhatsApp. We&apos;ll confirm shortly.</div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: compact ? '14px' : '18px' }}>
            <div>
                <label className="form-label">Your Name *</label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div>
                <label className="form-label">Your Concern *</label>
                <select
                    name="issue"
                    value={form.issue}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                >
                    <option value="">Select your concern</option>
                    <option>Pregnancy / Antenatal Care</option>
                    <option>PCOS / Hormonal Issues</option>
                    <option>Menopause Management</option>
                    <option>IVF / Fertility Counseling</option>
                    <option>Regular Gynaecology Checkup</option>
                    <option>Other / General Consultation</option>
                </select>
            </div>
            <div>
                <label className="form-label">Preferred Date</label>
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                <Icons.whatsapp width={16} height={16} />
                Book via WhatsApp
            </button>
            <p style={{ fontSize: '12px', color: '#987AB0', textAlign: 'center' }}>
                Your details are private. We respond within 30 minutes.
            </p>
        </form>
    );
}
