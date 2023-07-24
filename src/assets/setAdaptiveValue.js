// function setAdaptiveValue(property, startSize, minSize, widthFrom, widthTo, keepSize) {
//     let slope = (startSize - minSize) / (widthFrom - widthTo);
//     let yIntersection = -widthTo * slope + minSize;
//     let flyValue = clamp(`${yIntersection}rem`, `${slope * 100}vw`, `${startSize}rem`);
//
//     if (widthFrom === 'containerWidth' || widthFrom === 'maxWidth' || keepSize === 1 || keepSize === 2) {
//         let mediaQuery = (`min-width: ${widthFrom}px`);
//         let element = document.querySelector('body'); // or any other element you want to target
//         element.style.setProperty(property, `${startSize}rem`);
//         window.matchMedia(mediaQuery).addListener((mq) => {
//             if (mq.matches) {
//                 element.style.setProperty(property, `${startSize}rem`);
//             }
//         });
//     }
//
//     let mediaQuery = (`min-width:``${widthTo}px`)`and`(`max-width: ${widthFrom}px`);
//     let element = document.querySelector('body'); // or any other element you want to target
//     element.style.setProperty(property, flyValue);
//     window.matchMedia(mediaQuery).addListener((mq) => {
//         if (mq.matches) {
//             element.style.setProperty(property, flyValue);
//         }
//     });
//
//     if (widthTo === 'minWidth' || keepSize === 1 || keepSize === 3) {
//         let mediaQuery = (`max-width: ${widthTo}px`);
//         let element = document.querySelector('body'); // or any other element you want to target
//         element.style.setProperty(property, `${minSize}rem`);
//         window.matchMedia(mediaQuery).addListener((mq) => {
//             if (mq.matches) {
//                 element.style.setProperty(property, `${minSize}rem`);
//             }
//         });
//     }
// }

// const setAdaptiveValue = (property, startSize, minSize, widthFrom, widthTo, keepSize) => {
//     const slope = (startSize - minSize) / (widthFrom - widthTo);
//     const yIntersection = -widthTo * slope + minSize;
//     const flyValue = clamp(${yIntersection}rem, ${slope * 100}vw, ${startSize}rem);
//
//     if ((widthFrom === 'containerWidth' || widthFrom === 'maxWidth') && (keepSize === 1 || keepSize === 2)) {
//         const mediaQuery = (min-width: ${widthFrom}px);
//         const element = document.querySelector('body'); // or any other element you want to target
//         element.style.setProperty(property, ${startSize}rem);
//         window.matchMedia(mediaQuery).addListener((mq) => {
//             if (mq.matches) {
//                 element.style.setProperty(property, ${startSize}rem);
//             }
//         });
//     }
//
//     const mediaQuery = (min-width: ${widthTo}px) and (max-width: ${widthFrom}px);
//     const element = document.querySelector('body'); // or any other element you want to target
//     element.style.setProperty(property, flyValue);
//     window.matchMedia(mediaQuery).addListener((mq) => {
//         if (mq.matches) {
//             element.style.setProperty(property, flyValue);
//         }
//     });
//
//     if ((widthTo === 'minWidth' && keepSize === 1) || keepSize === 3) {
//         const mediaQuery = (max-width: ${widthTo}px);
//         const element = document.querySelector('body'); // or any other element you want to target
//         element.style.setProperty(property, ${minSize}rem);
//         window.matchMedia(mediaQuery).addListener((mq) => {
//             if (mq.matches) {
//                 element.style.setProperty(property, ${minSize}rem);
//             }
//         });
//     }
// };