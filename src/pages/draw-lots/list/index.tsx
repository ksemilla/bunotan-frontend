import { Link } from "react-router-dom"
import { useState } from "react"
import RoomCard from "../../../components/RoomCard"

interface Room {
  id: number
  name: string
  dateCreated: string
  totalMembers: number
}

const RoomList = () => {
  const [room, setRoom] = useState<Room>()
  const [rooms, setRooms] = useState<Room[]>([])

  const createSampleRoom = (num: number) => {
    const date = new Date()
    const roomDate =
      (date.getMonth() + 1).toString() +
      "/" +
      date.getDate().toString() +
      "/" +
      date.getFullYear().toString()

    const room: Room = {
      id: num,
      name: "Room " + num,
      dateCreated: roomDate,
      totalMembers: Math.floor(Math.random() * 90 + 10),
    }

    return room
  }

  return (
    <div>
      <RoomCard room={createSampleRoom(1)} />
      <RoomCard room={createSampleRoom(2)} />
      <RoomCard room={createSampleRoom(3)} />
      <RoomCard room={createSampleRoom(4)} />
    </div>
  )
}

export default RoomList
