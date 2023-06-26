import {useState, createRef, useEffect} from 'react'
import {Button, Container, Flex} from '@sanity/ui'
import {GenerateIcon} from '@sanity/icons'
import {AssetFromSource, ImageInputProps, useClient, set, unset, useFormValue} from 'sanity'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import SVGToImage from '../../helpers/SVGToImage'

const PluginContainer = ({schemaType, onChange}: ImageInputProps) => {
  const [url, setUrl] = useState('')
  const textInputRef = createRef()
  const client = useClient({apiVersion: '2021-06-07'})
  const documentId = useFormValue(['_id'])

  const size = 500

  useEffect(() => {
    // const documentID = client.getDocument('qrCode').then((document) => console.log(document))
    console.log(documentId, 'documentId')
    if (url !== '') {
      const SVGImage = document.getElementById('qr-code-image')?.outerHTML as string
      // if (documentId) {
      client.assets
        .upload('image', createSvgBlob(SVGImage), {filename: `qr-code-to-${url}`})
        .then((imageAsset) => {
          console.log(imageAsset, 'imageAsset')
          // onChange([
          //   asset: {
          //     _type: 'reference',
          //     _ref: imageAsset._id, // assuming you want to store a reference to the uploaded asset
          //   },
          // ])
          return client
            .patch(documentId as string)
            .set({
              qrCode: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageAsset._id,
                },
              },
            })
            .commit()
        })
        .then(() => {
          console.log('Done')
        })
      // }

      // SVGToImage({svg: SVGImage}).then((res: string) => {
      //   const description = `qr-code-to-${url}`
      //   const asset: AssetFromSource = {
      //     kind: 'base64',
      //     value: res,
      //     assetDocumentProps: {
      //       _type: 'sanity.imageAsset',
      //       originalFileName: description,
      //       source: {
      //         id: `${Math.floor(Math.random() * 1000)}`,
      //         name: 'qr-code-image',
      //       },
      //       description,
      //     } as any,
      //   }
      //   // onChange([asset])
      // })
    }
  }, [url])

  const createSvgBlob = (svgString: string): Blob => {
    const svgData = new Blob([svgString], {type: 'image/svg+xml'})
    return svgData
  }

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
