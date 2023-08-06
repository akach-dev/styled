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


//===========================//===========================//===========================//===========================
//
// const minWidth: number = 360;
// const maxWidth: number = 1440;
// const maxWidthContainer: number = 1140;
// const containerPadding: number = 30;
// const containerWidth: number = maxWidthContainer + containerPadding;
//
//
// function rem(px: number) {
//   return px / 16;
// }
//
// function em(px: number, current = 16) {
//   return px / current;
// }
//
// export function adaptive(
//    property: string,
//    startSize: number,
//    minSize: number,
//    widthFrom: number = containerWidth,
//    widthTo: number = minWidth,
//    keepSize: number = 0
// ) {
//   if (widthFrom == containerWidth && maxWidthContainer == 0) {
//     widthFrom = maxWidth;
//   }
//
//   const widthFromMedia: string = `${em(widthFrom)}`;
//   const widthToMedia: string = `${em(widthTo)}`;
//
//   const slope: number = (startSize - minSize) / (widthFrom - widthTo);
//   const yIntersection: number = -widthTo * slope + minSize;
//   const flyValue: string = `${rem(yIntersection)} + ${slope * 100}vw`;
//
//   const propertyValue: string = `clamp(${rem(minSize)}, ${flyValue}, ${rem(startSize)})`;
//
//   if (widthFrom == containerWidth || widthFrom == maxWidth || keepSize == 1 || keepSize == 2) {
//     console.log(`@media screen and  (min-width: ${widthFromMedia}) {
//       ${property}: ${rem(startSize)};
//     }`);
//   }
//
//   console.log(`@media screen and (min-width: ${widthToMedia}) and (max-width: ${widthFromMedia}) {
//     ${property}: ${propertyValue};
//   }`);
//
//   if (widthTo == minWidth || keepSize == 1 || keepSize == 3) {
//     console.log(`@media screen and  (max-width: ${widthToMedia}) {
//       ${property}: ${rem(minSize)};
//     }`);
//   }
// }
//

