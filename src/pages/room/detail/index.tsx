import { useParams } from "react-router-dom"

const RoomDetail = () => {
  const { var1 } = useParams()
  console.log("variable", var1)
  return <div>room detail</div>
}

export default RoomDetail
