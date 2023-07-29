export function adaptiveValue(fMin: number, fMax: number, vMin: number, vMax: number): string {
  const k = (fMax - fMin) / (vMax - vMin);
  const b = fMin - k * vMin;

  return ` calc(${k} * 100vw + ${b}px)`;
}

type AdaptivePropsType = {
  value: string
  fMin: number
  fMax: number
  vMin: number
  vMax: number
}

export const adaptive = ({value, fMin, fMax, vMin, vMax}: AdaptivePropsType) => `
 ${value}: calc(${fMin}px + (${fMax} - ${fMin}) * ((100vw - ${vMin}px) / (${vMax} - ${vMin})))
`




