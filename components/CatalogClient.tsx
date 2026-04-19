'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import CategoryGrid from './CategoryGrid'
import ProductCard from './ProductCard'
import DetailPanel from './DetailPanel'
import Icon from './Icon'
import { ALL_PRODUCTS, Product } from '@/lib/products'

export default function CatalogClient() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<string | null>(searchParams.get('cat'))
  const [search, setSearch] = useState(searchParams.get('q') ?? '')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = ALL_PRODUCTS.filter(p => {
    const matchCat = !activeCategory || p.category === activeCategory
    const q = search.toLowerCase()
    const matchQ = !q || p.code.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    return matchCat && matchQ
  })

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Catálogo</h1>
        <p style={{ fontSize: 15, color: '#6B7280' }}>{ALL_PRODUCTS.length} productos · Consultá disponibilidad por WhatsApp</p>
      </div>

      <div style={{ position: 'relative', marginBottom: 24, maxWidth: 480 }}>
        <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex' }}>
          <Icon name="search" size={18} color="#9CA3AF" />
        </span>
        <input
          type="text"
          placeholder="Buscar por código, descripción o marca…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 15, border: '1.5px solid #D1D5DB', borderRadius: 10, padding: '11px 14px 11px 40px', outline: 'none', color: '#111827' }}
        />
      </div>

      <div style={{ marginBottom: 28 }}>
        <CategoryGrid activeCategory={activeCategory} onSelect={setActiveCategory} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#9CA3AF' }}>
          <Icon name="search" size={48} color="#9CA3AF" style={{ display: 'block', marginBottom: 12 }} />
          <div style={{ fontSize: 18, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Sin resultados</div>
          <div style={{ fontSize: 14 }}>Probá con otro código o consultanos por WhatsApp.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />)}
        </div>
      )}

      {selectedProduct && <DetailPanel product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
