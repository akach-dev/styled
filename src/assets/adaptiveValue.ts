export function adaptiveValue(fMin: number, fMax: number, vMin: number, vMax: number): string {
  const k = (fMax - fMin) / (vMax - vMin);
  const b = fMin - k * vMin;

  return `calc(${k} * 100vw + ${b}px)`;
}

