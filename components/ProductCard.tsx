'use client'
import { useState } from 'react'
import Icon, { IconName } from './Icon'
import { Product, STOCK_CONFIG, BRAND_COLORS } from '@/lib/products'

interface Props {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: Props) {
  const [hovered, setHovered] = useState(false)
  const stock = STOCK_CONFIG[product.stock]
  const brand = BRAND_COLORS[product.brand] ?? { bg: '#F3F4F6', color: '#374151' }

  return (
    <div
      onClick={() => onClick(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', borderRadius: 10, overflow: 'hidden',
        cursor: 'pointer', transition: 'all 200ms',
        display: 'flex', flexDirection: 'column',
        boxShadow: hovered ? '0 4px 14px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.08)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ height: 100, background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <Icon name="gear" size={44} color="#D1D5DB" />
        <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 10, fontWeight: 700, letterSpacing: 1, borderRadius: 4, padding: '2px 7px', fontFamily: 'var(--font-barlow), sans-serif', background: brand.bg, color: brand.color }}>
          {product.brand}
        </span>
        <span style={{ position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: '50%', background: stock.color, display: 'block' }} />
      </div>

      <div style={{ padding: '10px 14px 8px' }}>
        <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 16, fontWeight: 500, color: '#D41515' }}>{product.code}</div>
        <div style={{ fontSize: 12, color: '#6B7280', margin: '2px 0 4px', lineHeight: 1.3 }}>{product.desc}</div>
        <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: '#9CA3AF' }}>{product.dims}</div>
      </div>

      <div style={{ borderTop: '1px solid #F3F4F6', padding: '8px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, borderRadius: 999, padding: '2px 9px', fontFamily: 'var(--font-barlow), sans-serif', background: stock.bg, color: stock.color }}>
          <Icon name={stock.icon as IconName} size={12} color={stock.color} />
          {stock.label}
        </span>
        <button
          onClick={e => { e.stopPropagation(); window.open('https://wa.me/59100000000', '_blank') }}
          style={{ width: 30, height: 30, borderRadius: '50%', background: '#25D366', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <Icon name="whatsapp" size={15} color="#fff" />
        </button>
      </div>
    </div>
  )
}
