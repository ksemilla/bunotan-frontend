import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Account, Home, Jebaited, RoomDetail, RoomList } from "../pages";

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="my-account" element={<Account />} />
      <Route path="rooms" element={<Jebaited />}>
        <Route path="" element={<RoomList />} />
        <Route path=":var1" element={<RoomDetail />} />
      </Route>
    </Route>
  )
);
