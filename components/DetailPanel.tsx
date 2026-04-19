'use client'
import Icon, { IconName } from './Icon'
import { Product, STOCK_CONFIG, getEquivalences } from '@/lib/products'

interface Props {
  product: Product
  onClose: () => void
}

export default function DetailPanel({ product, onClose }: Props) {
  const stock = STOCK_CONFIG[product.stock]

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(17,24,39,0.55)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: 16, width: '100%', maxWidth: 520, maxHeight: '90vh', overflow: 'auto', position: 'relative', boxShadow: '0 24px 48px rgba(0,0,0,0.20)' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, background: '#F3F4F6', border: 'none', borderRadius: 8, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
          <Icon name="x" size={20} />
        </button>

        <div style={{ height: 180, background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px 16px 0 0' }}>
          <Icon name="gear" size={72} color="#D1D5DB" />
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>{product.brand}</div>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 32, fontWeight: 500, color: '#D41515', lineHeight: 1.1, marginBottom: 6 }}>{product.code}</div>
          <div style={{ fontSize: 16, color: '#374151', marginBottom: 20 }}>{product.desc}</div>

          <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>Dimensiones</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#111827', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{product.dims}</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>Categoría</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#111827', fontFamily: 'var(--font-jetbrains-mono), monospace', textTransform: 'capitalize' }}>{product.category}</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>Disponibilidad</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, borderRadius: 999, padding: '4px 12px', background: stock.bg, color: stock.color }}>
                <Icon name={stock.icon as IconName} size={12} color={stock.color} /> {stock.label}
              </span>
            </div>
          </div>

          <div style={{ background: '#111827', borderRadius: 10, padding: '14px 16px', marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#6B7280', marginBottom: 6 }}>Equivalencias conocidas</div>
            <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 13, color: '#FBBF24', lineHeight: 1.6 }}>{getEquivalences(product.brand, product.code)}</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href={`https://wa.me/59100000000?text=Hola! Consulta sobre ${product.brand} ${product.code}`}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 16, fontWeight: 600, borderRadius: 10, padding: '13px', boxShadow: '0 4px 16px rgba(37,211,102,0.30)' }}
            >
              <Icon name="whatsapp" size={20} color="#fff" />
              Consultar por WhatsApp
            </a>
            <button onClick={onClose} style={{ background: '#F3F4F6', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 15, fontWeight: 600, color: '#374151', borderRadius: 10, padding: 12 }}>
              Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
