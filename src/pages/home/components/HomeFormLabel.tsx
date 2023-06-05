interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const HomeFormLabel = (props: LabelProps) => {
  return (
    <label {...props} className="font-medium text-gray-900">
      {props.children}
    </label>
  )
}

export default HomeFormLabel
