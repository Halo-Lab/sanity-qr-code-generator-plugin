import {Flex, TextInput, Text} from '@sanity/ui'
import {useState, FormEvent, forwardRef, Ref} from 'react'

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value)

  return (
    <Flex direction={'column'} gap={4}>
      <Text size={3}>Your URL</Text>
      <TextInput
        type="text"
        placeholder="Write or paste URL"
        radius={2}
        ref={ref as Ref<HTMLInputElement>}
        value={inputValue}
        onChange={(e) => inputChangeHandler(e)}
      />
    </Flex>
  )
})

export default Input
