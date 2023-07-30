import {theme} from "../styles/Theme";

/*export function adaptiveValue(fMin: number, fMax: number, vMin: number, vMax: number): string {
  const k = (fMax - fMin) / (vMax - vMin);
  const b = fMin - k * vMin;

  return ` calc(${k} * 100vw + ${b}px)`;
}*/
type adaptiveValuePropsType = {
  value: string
  Fmin: number
  Fmax: number
  vMin: number
  vMax: number
}

export const adaptiveValue = ({value, Fmin, Fmax, vMin, vMax}: adaptiveValuePropsType) => `
    ${value}: calc( (100vw - ${vMin}px)/(${vMax} - ${vMin}) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Popins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1};
    font-size: calc( (100vw - 360px)/(1170 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`



