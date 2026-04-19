'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CategoryGrid from './CategoryGrid'
import ProductCard from './ProductCard'
import DetailPanel from './DetailPanel'
import Icon from './Icon'
import { ALL_PRODUCTS, Product } from '@/lib/products'

export default function HomeClient() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#111827', position: 'relative', overflow: 'hidden', padding: '72px 0 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(30,59,184,0.18)', color: '#7B9BFF', fontSize: 12, fontWeight: 600, borderRadius: 999, padding: '4px 12px', border: '1px solid rgba(30,59,184,0.30)' }}>
              <Icon name="map-pin" size={12} /> Tarija, Bolivia
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 72, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.0, marginBottom: 16 }}>
            Rodamientos al toque.
          </h1>
          <p style={{ fontSize: 18, color: '#9CA3AF', lineHeight: 1.6, maxWidth: 520, marginBottom: 32 }}>
            Si no lo tenemos, te lo conseguimos. Traenos tu rodamiento viejo y te damos el equivalente exacto.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
            <button onClick={() => router.push('/catalogo')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D41515', color: '#fff', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 16, fontWeight: 600, border: 'none', borderRadius: 10, padding: '13px 26px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(212,21,21,0.30)' }}>
              <Icon name="search" size={18} color="#fff" /> Buscar repuesto
            </button>
            <a href="https://wa.me/59100000000" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 16, fontWeight: 600, textDecoration: 'none', borderRadius: 10, padding: '13px 26px', boxShadow: '0 4px 16px rgba(37,211,102,0.30)' }}>
              <Icon name="whatsapp" size={18} color="#fff" /> Consultanos
            </a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['SKF', 'NSK', 'NTN', 'NAK', 'ZKL'].map(b => (
              <span key={b} style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#6B7280', background: '#1F2937', borderRadius: 6, padding: '5px 12px' }}>{b}</span>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Icon name="gear" size={240} color="rgba(212,21,21,0.08)" style={{ position: 'absolute', right: -40, top: -40, transform: 'rotate(15deg)' }} />
          <Icon name="gear" size={120} color="rgba(212,21,21,0.06)" style={{ position: 'absolute', right: 140, bottom: 20 }} />
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '64px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#1E3BB8', marginBottom: 6 }}>Nuestro catálogo</div>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 40, fontWeight: 700, color: '#111827', lineHeight: 1.1 }}>Todo lo que necesitás</h2>
          </div>
          <CategoryGrid activeCategory={null} onSelect={id => router.push(`/catalogo${id ? `?cat=${id}` : ''}`)} />
        </div>
      </section>

      {/* Value props */}
      <section style={{ padding: '64px 0', background: '#111827' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {([
              { icon: 'zap',      title: 'Al toque',              body: 'Confirmamos stock y precio por WhatsApp antes de que salgas de casa.' },
              { icon: 'refresh',  title: 'Equivalencias exactas', body: 'Traenos tu rodamiento viejo y encontramos el reemplazo exacto, sin importar la marca.' },
              { icon: 'map-pin',  title: 'Dos sucursales',        body: 'Sucursal Central y Sucursal Sur en Tarija. Retiro en el día o coordinamos envío.' },
            ] as const).map(p => (
              <div key={p.title} style={{ padding: 28, borderRadius: 12, background: '#1F2937' }}>
                <Icon name={p.icon} size={32} color="#D41515" style={{ marginBottom: 12 }} />
                <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section style={{ padding: '64px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#1E3BB8', marginBottom: 6 }}>Más consultados</div>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 40, fontWeight: 700, color: '#111827', lineHeight: 1.1 }}>Rodamientos más buscados</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {ALL_PRODUCTS.filter(p => p.category === 'rodamientos').slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => router.push('/catalogo')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#D41515', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 15, fontWeight: 600, border: '2px solid #D41515', borderRadius: 10, padding: '11px 24px', cursor: 'pointer' }}>
              Ver catálogo completo
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && <DetailPanel product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
