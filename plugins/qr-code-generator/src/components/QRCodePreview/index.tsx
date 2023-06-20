import {useRef} from 'react'
import styled from 'styled-components'
import QRCode from 'react-qr-code'
import {useClient} from 'sanity'
import {createFileFromSVG} from '../../../helpers/createFileFromSVG'
import SVGToImage from '../../../helpers/SVGToImage'

const ImageWrapper = styled.div.attrs((props: {size: number}) => props)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  max-width: 400px;
  max-height: 400px;

  > * {
    max-width: 400px;
    max-height: 400px;
  }
`
const QRCodePreview = ({url, size}: {url: string; size?: number}) => {
  const imageRef = useRef(null)
  const client = useClient({apiVersion: '2021-06-07'})

  const handleDownload = async () => {
    const SVGImage: any = document.getElementById('qr-code-image')?.firstChild
    if (SVGImage) {
      const imageName = `${url}-qrcode.jpeg`
      // TODO add image type selection before download
      // const blob: Blob = new Blob([qrCodeImage.innerHTML], {
      //   type: 'image/svg+xml',
      // })
      // saveAs(blob, imageName)
      // SVGToImage({
      //   svg: SVGImage,
      //   mimetype: 'image/jpeg',
      //   quality: 1,
      //   width: size,
      //   height: size,
      //   outputFormat: 'base64',
      // })
      //   .then(async (data: Blob) => {
      //     console.log(data, imageName)
      //     const myFile = new File([data], imageName, {type: 'image/jpeg'})
      //     console.log(myFile)
      //     try {
      //       const uploadedAsset = await client.assets.upload('image', myFile)
      //       const fileURL = `${uploadedAsset.url}?dl`

      //       // Create a temporary link element to initiate the download
      //       const link = document.createElement('a')
      //       link.href = fileURL
      //       link.download = myFile.name
      //       link.click()
      //     } catch (error) {
      //       console.error('Error uploading and downloading the file:', error)
      //     }
      //   })
      //   .catch((err: Error) => console.log(err))
    }
    // const myFileMetadata = {
    //   name: 'metaImage',
    //   title: 'Image with metadata',
    //   type: 'image',
    //   options: {
    //     metadata: [
    //       'blurhash', // Default: included
    //       'lqip', // Default: included
    //       'palette', // Default: included
    //       'exif', // Default: not included
    //       'location', // Default: not included
    //     ],
    //   },
    // }
    // const myFile = createFileFromSVG(SVGImage, 'myFile.svg', myFileMetadata)
  }

  return (
    <ImageWrapper
      id="qr-code-image"
      ref={imageRef}
      size={size ? size : 300}
      onClick={handleDownload}
    >
      <QRCode
        value={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
        size={size ? size : 300}
      />
    </ImageWrapper>
  )
}

export default QRCodePreview
