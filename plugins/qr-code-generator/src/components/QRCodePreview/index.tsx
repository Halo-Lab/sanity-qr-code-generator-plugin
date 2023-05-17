import {useRef} from 'react'
import {useQRCode} from 'next-qrcode'
import styled from 'styled-components'

const ImageWrapper = styled.div.attrs((props: {size: number}) => props)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  max-width: 500px;
  max-height: 500px;

  > img {
    object-fit: contain;
    width: 100%;
  }
`

const QRCodePreview = ({url, size}: {url: string; size?: number}) => {
  const {Image} = useQRCode()
  const imageRef = useRef(null)

  const defaultOptions = {
    type: 'image/jpeg',
    level: 'H',
    margin: 0,
    scale: 5,
    width: size ? size : 200,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  }

  return (
    <ImageWrapper id="qr-code-image" ref={imageRef} size={size ? size : defaultOptions.width}>
      <Image
        text={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
        options={defaultOptions}
      />
    </ImageWrapper>
  )
}

export default QRCodePreview
