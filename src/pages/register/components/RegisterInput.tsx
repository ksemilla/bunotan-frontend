interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterInput = (props: InputProps) => {
  const {
    inputValue,
    setInputValue,
    value,
    onChange,
    className,
    required,
    ...rest
  } = props;
  return (
    <div className="ml-2">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...rest}
        className="rounded-lg p-2"
        required
      />
    </div>
  );
};

export default RegisterInput;
