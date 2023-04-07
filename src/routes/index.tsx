import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Account, Home, Register, Login, MyRooms, RoomDetail, RoomList } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="my-account" element={<Account />} />
      <Route path="rooms" element={<MyRooms />}>
        <Route path="" element={<RoomList />} />
        <Route path=":var1" element={<RoomDetail />} />
      </Route>
    </Route>
  )
);
