import HomeFormInput from "./HomeFormInput"
import HomeFormLabel from "./HomeFormLabel"

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  type: string
  htmlFor: string
  text: string
}

const HomeFormSpan = (props: SpanProps) => {
  const { type, id, text, htmlFor, inputValue, setInputValue, ...rest } = props

  return (
    <span>
      <div className="mb-6 flex items-center justify-center">
        <HomeFormLabel htmlFor={htmlFor}>{text}</HomeFormLabel>
        <HomeFormInput
          type={type}
          id={id}
          inputValue={inputValue}
          setInputValue={setInputValue}
          {...rest}
        />
      </div>
    </span>
  )
}

export default HomeFormSpan
