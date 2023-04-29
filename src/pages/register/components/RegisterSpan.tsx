import RegisterInput from "./RegisterInput";
import RegisterLabel from "./RegisterLabel";

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  htmlFor: string;
  text: string;
}

const RegisterSpan = (props: SpanProps) => {
  const { type, id, text, htmlFor, inputValue, setInputValue, ...rest } = props;

  return (
    <span>
      <div className="mb-6 flex items-center justify-center">
        <RegisterLabel htmlFor={htmlFor}>{text}</RegisterLabel>
        <RegisterInput
          type={type}
          id={id}
          inputValue={inputValue}
          setInputValue={setInputValue}
          {...rest}
        />
      </div>
    </span>
  );
};

export default RegisterSpan;
