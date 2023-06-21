import {memo} from 'react'
import {Button, Flex} from '@sanity/ui'
import {GenerateIcon, DownloadIcon} from '@sanity/icons'

const ButtonsRow = memo(function ButtonsRow({
  generateCode,
  uploadImage,
}: {
  generateCode: () => void
  uploadImage: any
}) {
  return (
    <Flex align={'center'} justify={'center'} gap={5} marginTop={3}>
      <Button
        icon={GenerateIcon}
        text="Generate QR"
        fontSize={3}
        padding={4}
        onClick={generateCode}
        style={{cursor: 'pointer'}}
      />
      <Button
        icon={DownloadIcon}
        text="Upload"
        tone="primary"
        fontSize={3}
        padding={4}
        onClick={uploadImage}
        style={{cursor: 'pointer'}}
      />
    </Flex>
  )
})

export default ButtonsRow
