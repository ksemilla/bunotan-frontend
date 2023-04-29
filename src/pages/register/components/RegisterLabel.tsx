interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const RegisterLabel = (props: LabelProps) => {
  return (
    <label {...props} className="font-medium text-gray-900">
      {props.children}
    </label>
  );
};

export default RegisterLabel;
