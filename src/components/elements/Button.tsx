interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      className={className ?? "py-2 px-6 bg-blue-500 inline-block text-3xl"}
    />
  );
};

export default Button;
