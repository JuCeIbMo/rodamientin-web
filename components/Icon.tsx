import { CSSProperties } from 'react'

export type IconName =
  | 'search' | 'whatsapp' | 'gear' | 'check-circle' | 'x-circle'
  | 'clock' | 'map-pin' | 'wrench' | 'drop' | 'zap' | 'refresh'
  | 'x' | 'grid' | 'activity' | 'car' | 'plus-circle' | 'circle-dashed'

interface IconProps {
  name: IconName
  size?: number
  color?: string
  style?: CSSProperties
}

const paths: Record<IconName, React.ReactNode> = {
  search: (<><circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m21 21-4.35-4.35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>),
  whatsapp: (<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>),
  gear: (<><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/></>),
  'check-circle': (<><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4"/></>),
  'x-circle': (<><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m15 9-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m9 9 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>),
  clock: (<><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>),
  'map-pin': (<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2"/></>),
  wrench: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>),
  drop: (<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>),
  zap: (<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>),
  refresh: (<><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 16H3v5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>),
  x: (<><path d="M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m6 6 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>),
  grid: (<><rect width="7" height="7" x="3" y="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><rect width="7" height="7" x="14" y="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><rect width="7" height="7" x="14" y="14" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><rect width="7" height="7" x="3" y="14" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/></>),
  activity: (<path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>),
  car: (<><path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 .68-1.5L5.5 5h13l1.82 2.5A2 2 0 0 1 21 9v6a2 2 0 0 1-2 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="2"/></>),
  'plus-circle': (<><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>),
  'circle-dashed': (<><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>),
}

export default function Icon({ name, size = 18, color = 'currentColor', style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', color, ...style }}
    >
      {paths[name]}
    </svg>
  )
}
