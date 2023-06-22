import {useState, createRef, useEffect} from 'react'
import {Button, Container, Flex} from '@sanity/ui'
import {GenerateIcon} from '@sanity/icons'
import {AssetFromSource, AssetSourceComponentProps} from 'sanity'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import SVGToImage from '../../helpers/SVGToImage'

const PluginContainer = ({onSelect}: AssetSourceComponentProps) => {
  const [url, setUrl] = useState('')
  const textInputRef = createRef()

  const size = 500

  useEffect(() => {
    if (url !== '') {
      const SVGImage = document.getElementById('qr-code-image')?.outerHTML as string

      SVGToImage({svg: SVGImage}).then((res: string) => {
        const description = `qr-code-to-${url}`
        const asset: AssetFromSource = {
          kind: 'base64',
          value: res,
          assetDocumentProps: {
            _type: 'sanity.imageAsset',
            originalFileName: description,
            source: {
              id: `${Math.floor(Math.random() * 1000)}`,
              name: 'qr-code-image',
            },
            description,
          } as any,
        }
        onSelect([asset])
      })
    }
  }, [url])

  const generateCode = () => {
    const inputValue = (textInputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      setUrl(inputValue)
    }
  }

  return (
    <Container>
      <Flex gap={3} justify={'space-between'} align={'center'}>
        <Input ref={textInputRef} />
        <Button
          icon={GenerateIcon}
          text="Generate QR"
          fontSize={2}
          padding={3}
          onClick={generateCode}
          style={{cursor: 'pointer'}}
          tone={'primary'}
        />
      </Flex>
      {url && <QRCodePreview url={url} size={size} />}
    </Container>
  )
}

export default PluginContainer
