interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="py-2 px-6 bg-blue-500 inline-block text-3xl"
    />
  );
};

export default Button;
