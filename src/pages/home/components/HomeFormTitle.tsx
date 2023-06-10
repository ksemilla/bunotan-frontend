interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const HomeFormTitle = (props: TitleProps) => {
  return (
    <div className="pb-7">
      <h3 className="items-center justify-center flex p-3 text-3xl font-Nunito">
        {props.children}
      </h3>
    </div>
  )
}

export default HomeFormTitle
