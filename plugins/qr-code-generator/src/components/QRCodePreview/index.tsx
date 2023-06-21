import styled from 'styled-components'
import QRCode from 'react-qr-code'

const ImageWrapper = styled.div.attrs((props: {size: number}) => props)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  max-width: 200px;
  max-height: 200px;

  > * {
    max-width: 200px;
    max-height: 200px;
  }
`
const QRCodePreview = ({url, size}: {url: string; size?: number}) => {
  return (
    <ImageWrapper id="qr-code-image" size={size ? size : 300}>
      <QRCode value={url} size={size ? size : 300} />
    </ImageWrapper>
  )
}

export default QRCodePreview
