export type StockStatus = 'instock' | 'outstock' | 'order'

export interface Product {
  id: number
  code: string
  brand: string
  category: string
  desc: string
  dims: string
  stock: StockStatus
}

export const ALL_PRODUCTS: Product[] = [
  { id: 1,  code: '6205-2RS',   brand: 'SKF', category: 'rodamientos',    desc: 'Rodamiento rígido de bolas',          dims: '25×52×15 mm',      stock: 'instock'  },
  { id: 2,  code: '6308-ZZ',    brand: 'NTN', category: 'rodamientos',    desc: 'Rodamiento blindado',                 dims: '40×90×23 mm',      stock: 'order'    },
  { id: 3,  code: '32210',      brand: 'NSK', category: 'rodamientos',    desc: 'Rodamiento de rodillos cónicos',      dims: '50×90×24.75 mm',   stock: 'outstock' },
  { id: 4,  code: '6001-2Z',    brand: 'SKF', category: 'rodamientos',    desc: 'Rodamiento rígido de bolas',          dims: '12×28×8 mm',       stock: 'instock'  },
  { id: 5,  code: '30206',      brand: 'NTN', category: 'rodamientos',    desc: 'Rodamiento de rodillos cónicos',      dims: '30×62×17.25 mm',   stock: 'instock'  },
  { id: 6,  code: '22210-E',    brand: 'NAK', category: 'rodamientos',    desc: 'Rodamiento de rodillos a rótula',     dims: '50×90×23 mm',      stock: 'order'    },
  { id: 7,  code: '51108',      brand: 'ZKL', category: 'rodamientos',    desc: 'Rodamiento de empuje',                dims: '40×60×13 mm',      stock: 'instock'  },
  { id: 8,  code: 'NU210-ECM',  brand: 'SKF', category: 'rodamientos',    desc: 'Rodamiento de rodillos cilíndricos',  dims: '50×90×20 mm',      stock: 'outstock' },
  { id: 9,  code: 'TC-35558',   brand: 'NAK', category: 'retenes',        desc: 'Retén de aceite de labio',            dims: '35×55×8 mm',       stock: 'instock'  },
  { id: 10, code: '12X24X7',    brand: 'NSK', category: 'retenes',        desc: 'Retén radial',                        dims: '12×24×7 mm',       stock: 'instock'  },
  { id: 11, code: 'AVX13-1300', brand: 'NTN', category: 'correas',        desc: 'Correa trapezoidal',                  dims: '13×1300 mm',       stock: 'order'    },
  { id: 12, code: 'KYB-341468', brand: 'NTN', category: 'amortiguadores', desc: 'Amortiguador trasero',                dims: 'Consultar modelo', stock: 'order'    },
  { id: 13, code: 'SPL-1350X',  brand: 'NAK', category: 'crucetas',       desc: 'Cruceta cardán',                      dims: '35×106 mm',        stock: 'instock'  },
  { id: 14, code: 'JG-D-Motor', brand: 'SKF', category: 'juntas',         desc: 'Juego de juntas de motor',            dims: 'Consultar modelo', stock: 'order'    },
  { id: 15, code: 'WD-40-400',  brand: 'NAK', category: 'lubricantes',    desc: 'Lubricante multipropósito',           dims: '400 ml',           stock: 'instock'  },
  { id: 16, code: 'PB-BLASTER', brand: 'NAK', category: 'herramientas',   desc: 'Extractor de tornillos',              dims: '—',                stock: 'instock'  },
]

export const CATEGORIES = [
  { id: 'rodamientos',    label: 'Rodamientos',    icon: 'gear'          },
  { id: 'retenes',        label: 'Retenes',        icon: 'circle-dashed' },
  { id: 'correas',        label: 'Correas',        icon: 'activity'      },
  { id: 'amortiguadores', label: 'Amortiguadores', icon: 'car'           },
  { id: 'crucetas',       label: 'Crucetas',       icon: 'plus-circle'   },
  { id: 'juntas',         label: 'Juntas',         icon: 'grid'          },
  { id: 'herramientas',   label: 'Herramientas',   icon: 'wrench'        },
  { id: 'lubricantes',    label: 'Lubricantes',    icon: 'drop'          },
]

export const STOCK_CONFIG = {
  instock:  { label: 'En stock',   icon: 'check-circle', bg: '#DCFCE7', color: '#16A34A' },
  outstock: { label: 'Sin stock',  icon: 'x-circle',     bg: '#FEE2E2', color: '#DC2626' },
  order:    { label: 'A encargar', icon: 'clock',         bg: '#FEF3C7', color: '#D97706' },
} as const

export const BRAND_COLORS: Record<string, { bg: string; color: string }> = {
  SKF: { bg: '#EFF6FF', color: '#003087' },
  NSK: { bg: '#FEF2F2', color: '#DC2626' },
  NTN: { bg: '#F9FAFB', color: '#374151' },
  NAK: { bg: '#F0FDF4', color: '#166534' },
  ZKL: { bg: '#FFF7ED', color: '#9A3412' },
}

export function getEquivalences(brand: string, code: string): string {
  const map: Record<string, string> = {
    SKF: `NSK · ${code}DDU / NTN · ${code}LLU`,
    NSK: `SKF · ${code}-2RS / NTN · ${code}LLB`,
    NTN: `SKF · ${code}-2Z / NSK · ${code}ZZ`,
    NAK: `SKF · ${code}`,
    ZKL: `NSK · ${code}`,
  }
  return map[brand] ?? '—'
}
