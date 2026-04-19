import { Suspense } from 'react'
import CatalogClient from '@/components/CatalogClient'

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div style={{ padding: 32, fontFamily: 'var(--font-barlow), sans-serif', color: '#6B7280' }}>Cargando catálogo…</div>}>
      <CatalogClient />
    </Suspense>
  )
}
