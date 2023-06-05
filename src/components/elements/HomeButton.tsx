interface HomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const HomeButton = (props: HomeButtonProps) => {
  const { className, ...rest } = props
  return (
    <button
      {...rest}
      className={
        className ?? "py-2 px-6 bg-blue-500 inline-block text-xl rounded-2xl"
      }
    />
  )
}

export default HomeButton
