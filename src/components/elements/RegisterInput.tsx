interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const RegisterInput = (props: InputProps) => {
    return <input {...props} className="rounded-lg p-2 ml-2" required />
}

export default RegisterInput