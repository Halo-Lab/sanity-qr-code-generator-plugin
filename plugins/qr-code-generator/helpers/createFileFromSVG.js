export const createFileFromSVG = (svgString, fileName, metadata) => {
  const svgBlob = new Blob([svgString], {type: 'image/svg+xml'})
  const file = new File([svgBlob], fileName, {type: 'image/svg+xml', ...metadata})
  return file
}
