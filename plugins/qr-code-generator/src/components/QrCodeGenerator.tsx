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

      setImageField(SVGImage, url)
        .then(() => pushToast('success'))
        .catch(() => pushToast('error'))
    }
  }, [url])

  const createSvgBlob = (svgString: string): Blob => {
    const svgData = new Blob([svgString], {type: 'image/svg+xml'})
    return svgData
  }

  const setImageField = (image: string, url: string): Promise<any> =>
    client.assets
      .upload('image', createSvgBlob(image), {filename: `qr-code-to-${url}`})
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

  const pushToast = (toastType: string) =>
    toastType === 'success'
      ? toast.push({
          status: 'success',
          title: 'QR code succesfully added to your assets',
        })
      : toast.push({status: 'error', title: 'Oooops, something went wrong'})

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
