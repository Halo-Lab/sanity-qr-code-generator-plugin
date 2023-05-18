import {useState, createRef, useCallback} from 'react'
import {Container, Flex} from '@sanity/ui'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import ButtonsRow from './ButtonsRow'
import {saveAs} from 'file-saver'
import SizeInput from './SizeInput'
import SVGToImage from '../../helpers/SVGToImage'

const PluginContainer = () => {
  const [url, setUrl] = useState('https://www.halo-lab.com/')
  const [size, setSize] = useState(300)
  const textInputRef = createRef()
  const sizeInputRef = createRef()

  const generateCode = useCallback(() => {
    const inputValue = (textInputRef.current as HTMLInputElement)?.value
    const size = +(sizeInputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      setUrl(inputValue)
      setSize(size)
    }
  }, [size, url])

  const downloadImage = useCallback(() => {
    const SVGImage: string | undefined = document.getElementById('qr-code-image')?.innerHTML

    if (SVGImage) {
      const imageName = `${url}-qrcode.jpeg`
      // TODO add image type selection before download
      // const blob: Blob = new Blob([qrCodeImage.innerHTML], {
      //   type: 'image/svg+xml',
      // })
      // saveAs(blob, imageName)
      SVGToImage({
        svg: SVGImage,
        mimetype: 'image/jpeg',
        quality: 1,
        width: size,
        height: size,
        outputFormat: 'base64',
      })
        .then((data: Blob) => saveAs(data, imageName))
        .catch((err: Error) => console.log(err))
    }
  }, [url])

  return (
    <Container width={[0, 0, 1]} paddingX={3} paddingTop={5}>
      <Flex direction={'column'} gap={3}>
        <Input ref={textInputRef} />
        <SizeInput ref={sizeInputRef} />
      </Flex>
      <Flex direction={'column'} align={'center'} gap={5} marginTop={4}>
        <QRCodePreview url={url} size={size} />
        <ButtonsRow generateCode={generateCode} downloadImage={downloadImage} />
      </Flex>
    </Container>
  )
}

export default PluginContainer
