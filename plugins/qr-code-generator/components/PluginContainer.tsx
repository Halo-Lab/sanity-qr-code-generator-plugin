import React, {useState, createRef, useCallback} from 'react'
import {Container, Flex, ThemeColorProvider} from '@sanity/ui'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import ButtonsRow from './ButtonsRow'
import {saveAs} from 'file-saver'

const PluginContainer = () => {
  const [url, setUrl] = useState('https://www.halo-lab.com/')
  const inputRef = createRef()

  const generateCode = useCallback(() => {
    const inputValue = (inputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      setUrl(inputValue)
    }
  }, [inputRef])

  const downloadImage = useCallback(() => {
    const imageSrc: string | null = (
      document.getElementById('qr-code-image')?.childNodes[0] as HTMLImageElement
    ).getAttribute('src')

    if (imageSrc) {
      saveAs(imageSrc, 'qr-code.jpg')
    }
  }, [])

  return (
    <ThemeColorProvider>
      <Container width={[0, 0, 1]} paddingX={3} paddingTop={5}>
        <Input ref={inputRef} />
        <Flex direction={'column'} align={'center'} gap={5} marginTop={4}>
          <QRCodePreview url={url} />
          <ButtonsRow generateCode={generateCode} downloadImage={downloadImage} />
        </Flex>
      </Container>
    </ThemeColorProvider>
  )
}

export default PluginContainer
