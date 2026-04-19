'use client'
import Icon, { IconName } from './Icon'
import { CATEGORIES } from '@/lib/products'

interface Props {
  activeCategory: string | null
  onSelect: (id: string | null) => void
}

export default function CategoryGrid({ activeCategory, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 10 }}>
      {CATEGORIES.map(cat => {
        const active = activeCategory === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(active ? null : cat.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              padding: '16px 8px', border: '1.5px solid', borderRadius: 10,
              cursor: 'pointer', transition: 'all 200ms', background: 'none',
              borderColor: active ? '#111827' : '#E5E7EB',
              backgroundColor: active ? '#111827' : '#fff',
              transform: active ? 'translateY(-2px)' : 'none',
              boxShadow: active ? '0 4px 12px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.07)',
            }}
          >
            <Icon name={cat.icon as IconName} size={26} color={active ? '#D41515' : '#6B7280'} />
            <span style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 11, fontWeight: 600, textAlign: 'center', lineHeight: 1.2, color: active ? '#fff' : '#374151' }}>
              {cat.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
