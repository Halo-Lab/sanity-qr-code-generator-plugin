import {forwardRef, useState, Ref, FormEvent} from 'react'
import {Flex, Text} from '@sanity/ui'

const SizeInput = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState(300)

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    setInputValue(Number((e.target as HTMLInputElement).value))

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
        min={100}
        max={1000}
        step={50}
      ></input>
    </Flex>
  )
})

export default SizeInput
