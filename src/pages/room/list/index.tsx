import { Link } from "react-router-dom";

const RoomList = () => {
  return (
    <div>
      <h1>room list</h1>
      <div>
        <Link to="1">room 1</Link>
        <Link to="2">Room 2</Link>
      </div>
    </div>
  );
};

export default RoomList;
