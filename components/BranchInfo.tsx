import Icon from './Icon'

const BRANCHES = [
  {
    id: 'central',
    name: 'Sucursal Central',
    address: 'Av. La Paz esq. Avaroa Nº 0196',
    city: 'Tarija, Bolivia',
    mapUrl: 'https://maps.google.com/?q=Av.+La+Paz+esq.+Avaroa+0196+Tarija',
    hours: [
      { day: 'Lunes',          open: '08:00–12:00 / 14:30–18:30', note: 'Horario partido' },
      { day: 'Martes–Viernes', open: '08:00–18:30',               note: 'Continuo'        },
      { day: 'Sábado',         open: '08:00–14:00',               note: ''                },
      { day: 'Domingo',        open: 'Cerrado',                   note: ''                },
    ],
  },
  {
    id: 'sur',
    name: 'Sucursal Sur',
    address: 'Salida a Bermejo',
    city: 'Tarija, Bolivia · F824+26M',
    mapUrl: 'https://plus.codes/F824+26M',
    hours: [
      { day: 'Lunes–Viernes', open: '08:00–18:00', note: 'Continuo' },
      { day: 'Sábado',        open: 'Cerrado',      note: ''         },
      { day: 'Domingo',       open: 'Cerrado',      note: ''         },
    ],
  },
]

function BranchCard({ branch }: { branch: typeof BRANCHES[0] }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: '#111827' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{branch.name}</div>
          <div style={{ fontSize: 14, color: '#D1D5DB', lineHeight: 1.4 }}>{branch.address}</div>
          <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{branch.city}</div>
        </div>
        <a href={branch.mapUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#D41515', color: '#fff', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 13, fontWeight: 600, textDecoration: 'none', borderRadius: 8, padding: '8px 14px', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <Icon name="map-pin" size={15} color="#fff" />
          Ver mapa
        </a>
      </div>
      <div style={{ height: 1, background: '#F3F4F6' }} />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {branch.hours.map((h, i) => (
            <tr key={i}>
              <td style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', padding: '8px 24px', width: 140 }}>{h.day}</td>
              <td style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 13, color: '#111827', padding: '8px 0' }}>{h.open}</td>
              <td style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 11, color: '#9CA3AF', padding: '8px 24px 8px 12px' }}>{h.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: '0 24px 20px' }}>
        <a href="https://wa.me/59100000000" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: 8, padding: '10px 16px', justifyContent: 'center' }}>
          <Icon name="whatsapp" size={16} color="#fff" />
          Consultar disponibilidad
        </a>
      </div>
    </div>
  )
}

export default function BranchInfo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      {BRANCHES.map(b => <BranchCard key={b.id} branch={b} />)}
    </div>
  )
}
