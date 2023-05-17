import {useRef} from 'react'
import styled from 'styled-components'
import QRCode from 'react-qr-code'

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

  return (
    <ImageWrapper id="qr-code-image" ref={imageRef} size={size ? size : 300}>
      <QRCode
        value={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
        size={size ? size : 300}
      />
    </ImageWrapper>
  )
}

export default QRCodePreview
