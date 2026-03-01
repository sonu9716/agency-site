'use client';
import { useState } from 'react';
import { Icons } from '@/components/Icons';

export default function WhatsAppButton() {
    const [showLabel, setShowLabel] = useState(true);
    const waUrl = 'https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website';

    return (
        <div className="wa-btn">
            {showLabel && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="wa-label">Emergency Consult</div>
                    <button
                        onClick={() => setShowLabel(false)}
                        style={{ background: 'rgba(74,16,96,0.7)', border: 'none', color: '#fff', width: '18px', height: '18px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >×</button>
                </div>
            )}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="wa-circle" style={{ position: 'relative' }}>
                    <div className="wa-ring" />
                    <Icons.whatsapp width={28} height={28} color="#fff" />
                </div>
            </a>
        </div>
    );
}
