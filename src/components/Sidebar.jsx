import React from "react";
import CreateEventButton from "./CreateEventButton";
import SamallCalendar from "./SamallCalendar";
import Labels from "./Label";
export default function Sidebar() {
  return (
    <aside className=" p-5 w-64 bg-gray-900">
      <CreateEventButton />
      <SamallCalendar />
      <Labels />
    </aside>
  );
}
