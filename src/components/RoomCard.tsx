import { Link } from "react-router-dom"

interface Room {
  id: number
  name: string
  dateCreated: string
  totalMembers: number
}

interface RoomCardProps {
  room: Room
}

const RoomCard = (props: RoomCardProps) => {
  return (
    <div className="border-4 p-3">
      <span className="flex">
        <Link to={`/draw-lots/${props.room.id}`}>
          <h1 className="font-Nunito text-2xl p-3">{props.room.name}</h1>
        </Link>
        <h2 className="font-Nunito items-center flex p-3">
          {props.room.totalMembers} Members
        </h2>
      </span>
      <h5 className="font-Nunito italic">Created: {props.room.dateCreated}</h5>
    </div>
  )
}

export default RoomCard
