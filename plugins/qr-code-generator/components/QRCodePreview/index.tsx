import {useQRCode} from 'next-qrcode'
import {useRef} from 'react'

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
    <div
      id="qr-code-image"
      style={{
        width: defaultOptions.width + 'px',
        height: defaultOptions.width + 'px',
      }}
      ref={imageRef}
    >
      <Image
        text={`${url ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}`}
        options={defaultOptions}
      />
    </div>
  )
}

export default QRCodePreview
