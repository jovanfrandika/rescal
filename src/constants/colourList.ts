type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

export interface ColourInterface {
  label: string;
  hexCode: string;
  theme: string;
}

export interface BandCodeInterface {
  multiplier: number;
  tolerance: string;
}

export const colours: FixedArray<ColourInterface, 12> = [
  { label: 'black', hexCode: '#000', theme: 'text-black' },
  { label: 'brown', hexCode: '#78350F', theme: 'text-yellow-900' },
  { label: 'red', hexCode: '#EF4444', theme: 'text-red-500' },
  { label: 'orange', hexCode: '#F59E0B', theme: 'text-yellow-500' },
  { label: 'yellow', hexCode: '#FCD34D', theme: 'text-yellow-300' },
  { label: 'green', hexCode: '#34D399', theme: 'text-green-400' },
  { label: 'blue', hexCode: '#3B82F6', theme: 'text-green-500' },
  { label: 'violet', hexCode: '#A78BFA', theme: 'text-purple-400' },
  { label: 'gray', hexCode: '#9CA3AF', theme: 'text-gray-400' },
  { label: 'white', hexCode: '#FFF', theme: 'text-white' },
  { label: 'gold', hexCode: '#FBBF24', theme: 'text-yellow-400' },
  { label: 'silver', hexCode: '#F3F4F6', theme: 'text-gray-100' },
];

export const bandCode: FixedArray<BandCodeInterface, 12> = [
  { multiplier: 1, tolerance: '' },
  { multiplier: 10, tolerance: '± 1%' },
  { multiplier: 100, tolerance: '± 2%' },
  { multiplier: 1, tolerance: '' },
  { multiplier: 10, tolerance: '' },
  { multiplier: 100, tolerance: '± 0.5%' },
  { multiplier: 1, tolerance: '± 0.25%' },
  { multiplier: 10, tolerance: '± 0.10%' },
  { multiplier: 100, tolerance: '± 0.05%' },
  { multiplier: 1, tolerance: '' },
  { multiplier: 0.1, tolerance: '± 5%' },
  { multiplier: 0.01, tolerance: '± 10%' },
]