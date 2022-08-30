import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <div className="flex justify-center align-middle mt-5">
      <button
        onClick={() => setShowEventModal(true)}
        className="border-2 p-2 rounded-full flex items-center justify-center w-full"
      >
        <span className="pl-3 pr-7 text-white font-bold">+ Создать</span>
      </button>
    </div>
  );
}
