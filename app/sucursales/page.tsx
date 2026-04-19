import BranchInfo from '@/components/BranchInfo'

export default function SucursalesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Sucursales</h1>
        <p style={{ fontSize: 15, color: '#6B7280' }}>Dos ubicaciones en Tarija — retiro en el día o coordinamos envío.</p>
      </div>
      <BranchInfo />
    </div>
  )
}
