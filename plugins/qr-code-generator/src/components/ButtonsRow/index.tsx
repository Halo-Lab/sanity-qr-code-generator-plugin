import React, {memo} from 'react'
import {Button, Flex} from '@sanity/ui'
import {GenerateIcon, DownloadIcon} from '@sanity/icons'

const ButtonsRow = memo(function ButtonsRow({
  generateCode,
  downloadImage,
}: {
  generateCode: () => void
  downloadImage: () => void
}) {
  return (
    <Flex align={'center'} gap={5}>
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
        text="Download"
        tone="primary"
        fontSize={3}
        padding={4}
        onClick={downloadImage}
        style={{cursor: 'pointer'}}
      />
    </Flex>
  )
})

export default ButtonsRow
