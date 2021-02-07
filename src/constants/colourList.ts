type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

export interface ColourInterface {
  label: string;
  hexCode: string;
}

export const colours: FixedArray<ColourInterface, 12> = [
  { label: 'black', hexCode: '#000' },
  { label: 'brown', hexCode: '#78350F' },
  { label: 'red', hexCode: '#EF4444' },
  { label: 'orange', hexCode: '#F59E0B' },
  { label: 'yellow', hexCode: '#FCD34D' },
  { label: 'green', hexCode: '#34D399' },
  { label: 'blue', hexCode: '#3B82F6' },
  { label: 'violet', hexCode: '#A78BFA' },
  { label: 'gray', hexCode: '#9CA3AF' },
  { label: 'white', hexCode: '#FFF' },
  { label: 'gold', hexCode: '#FFD700' },
  { label: 'silver', hexCode: '#F3F4F6' },
];