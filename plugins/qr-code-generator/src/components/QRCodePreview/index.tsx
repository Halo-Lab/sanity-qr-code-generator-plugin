import styled from 'styled-components'
import QRCode from 'react-qr-code'

const ImageWrapper = styled.div.attrs((props: {size: number}) => props)`
  display: none;
`
const QRCodePreview = ({url, size}: {url: string; size?: number}) => {
  return (
    <ImageWrapper>
      <QRCode value={url} size={size ? size : 300} id="qr-code-image" />
    </ImageWrapper>
  )
}

export default QRCodePreview
