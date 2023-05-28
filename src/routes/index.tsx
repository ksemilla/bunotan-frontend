import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import {
  Account,
  Home,
  Signup,
  Login,
  MyRooms,
  RoomDetail,
  RoomList,
} from "../pages"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="my-account" element={<Account />} />
      <Route path="draw-lots" element={<MyRooms />}>
        <Route path="" element={<RoomList />} />
        <Route path=":var1" element={<RoomDetail />} />
      </Route>
    </Route>
  )
)
