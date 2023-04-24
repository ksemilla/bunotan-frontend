interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {}

const RegisterSpan = (props: SpanProps) => {
    return <span>
        <div className="mb-6 flex items-center justify-center">
            {props.children}
        </div>
    </span>
}

export default RegisterSpan