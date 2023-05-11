import React, {forwardRef, useState, Ref} from 'react'
import {Flex, Text} from '@sanity/ui'

const SizeInput = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState(250)

  const inputChangeHandler = (e) => setInputValue(e.target.value)
  return (
    <Flex direction={'column'} gap={3}>
      <Text align={'center'} size={2} weight="bold">
        {`${inputValue} x ${inputValue} px`}
      </Text>
      <input
        type="range"
        ref={ref as Ref<HTMLInputElement>}
        value={inputValue}
        onChange={(e) => inputChangeHandler(e)}
        min={50}
        max={500}
        step={50}
      ></input>
    </Flex>
  )
})

export default SizeInput
