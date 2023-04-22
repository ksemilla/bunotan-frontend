interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    username: string
    setusername: React.Dispatch<React.SetStateAction<string>>
}

const RegisterInput = (props: InputProps) => {
    return <div className="ml-2">
        <input {...props} className="rounded-lg p-2" required />
    </div>
}

export default RegisterInput