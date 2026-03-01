'use client';
import { useState } from 'react';

const services = [
    'Root Canal Treatment',
    'Dental Implants',
    'Braces & Aligners',
    'Teeth Whitening',
    'Kids Dentistry',
    'General Checkup',
    'Other',
];

export default function AppointmentForm({ compact = false }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        date: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `*Appointment Request*\n\n` +
            `👤 *Name:* ${form.name}\n` +
            `📞 *Phone:* ${form.phone}\n` +
            `📅 *Preferred Date:* ${form.date || 'Not specified'}\n` +
            `🦷 *Service:* ${form.service || 'Not specified'}\n` +
            `💬 *Message:* ${form.message || 'None'}\n\n` +
            `Sent via docsitesolutions.online/demo1`
        );
        window.open('https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website', '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    if (submitted) {
        return (
            <div
                style={{
                    textAlign: 'center',
                    padding: '48px 24px',
                    background: '#E8F5E9',
                    borderRadius: '16px',
                    border: '2px solid #4CAF50',
                }}
            >
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ color: '#2E7D32', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                    WhatsApp Opened!
                </h3>
                <p style={{ color: '#388E3C', fontSize: '14px' }}>
                    Your appointment details have been pre-filled. Just send the message to confirm.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '18px' }}>
                <div>
                    <label className="form-label" htmlFor="appt-name">Full Name *</label>
                    <input
                        id="appt-name"
                        className="form-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="appt-phone">Phone Number *</label>
                    <input
                        id="appt-phone"
                        className="form-input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 99904 21048"
                        required
                    />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '18px' }}>
                <div>
                    <label className="form-label" htmlFor="appt-date">Preferred Date</label>
                    <input
                        id="appt-date"
                        className="form-input"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="appt-service">Service Required</label>
                    <select
                        id="appt-service"
                        className="form-input"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ cursor: 'pointer' }}
                    >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label className="form-label" htmlFor="appt-message">Additional Message</label>
                <textarea
                    id="appt-message"
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your dental concern or any special requirements..."
                    rows={compact ? 3 : 4}
                    style={{ resize: 'vertical' }}
                />
            </div>
            <button type="submit" className="btn-accent" style={{ justifyContent: 'center', padding: '14px 28px', fontSize: '16px' }}>
                📲 Send via WhatsApp & Confirm
            </button>
            <p style={{ fontSize: '12px', color: '#78909C', textAlign: 'center' }}>
                🔒 Your details are secure. We&apos;ll contact you within 30 minutes.
            </p>
        </form>
    );
}
