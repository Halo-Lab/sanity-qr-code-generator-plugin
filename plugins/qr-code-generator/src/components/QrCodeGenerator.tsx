import {useState, createRef, useEffect} from 'react'
import {Button, Container, Flex, useToast} from '@sanity/ui'
import {GenerateIcon} from '@sanity/icons'
import {ImageInputProps, useClient, useFormValue, FormField, ImageInput} from 'sanity'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'

const QrCodeGenerator = (props: ImageInputProps) => {
  const [url, setUrl] = useState('')
  const textInputRef = createRef()
  const client = useClient({apiVersion: '2021-06-07'})
  const documentId = useFormValue(['_id'])
  const fieldName = props.elementProps.id
  const toast = useToast()

  const size = 500

  useEffect(() => {
    if (url !== '') {
      const SVGImage = document.getElementById('qr-code-image')?.outerHTML as string
      
      client.assets
        .upload('image', createSvgBlob(SVGImage), {filename: `qr-code-to-${url}`})
        .then((imageAsset) => {
          return client
            .patch(documentId as string)
            .set({
              [fieldName]: {
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
          toast.push({
            status: 'success',
            title: 'QR code succesfully added to your assets',
          })
        })
        .catch((error) => {
          console.error(error)
          toast.push({status: 'error', title: 'Oooops, something went wrong'})
        })
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
      <Flex direction={'column'} gap={5}>
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
        <FormField>
          <ImageInput {...props} />
        </FormField>
      </Flex>
      {url && <QRCodePreview url={url} size={size} />}
    </Container>
  )
}

export default QrCodeGenerator
