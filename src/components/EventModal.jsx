import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";

const labelsClasses = ["orange", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left to-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-900 px-4 py-2 flex justify-end items-center gap-5">
          {selectedEvent && (
            <span
              onClick={() => {
                dispatchCalEvent({
                  type: "delete",
                  payload: selectedEvent,
                });
                setShowEventModal(false);
              }}
              className="text-white hover:text-red-600 text-2xl cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </span>
          )}
          <button onClick={() => setShowEventModal(false)}>
            <span className="text-white hover:text-red-600 text-2xl">
              <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
            </span>
          </button>
        </header>
        <div className="p-4">
          <input
            type="text"
            name="title"
            placeholder="Добавить название задачи"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoComplete="no"
            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-900"
          />
          <div className="flex w-full justify-around flex-col">
            <div className="flex items-center mt-5">
              <span className="text-3xl text-gray-700">
                <FontAwesomeIcon icon="fa-solid fa-clock" />
              </span>
              <p className="text-2xl ml-5">
                {daySelected.format("dddd, MMMM DD")}
              </p>
            </div>
            <div className="flex items-center mt-10">
              <span className="text-3xl text-gray-700">
                <FontAwesomeIcon icon="fa-solid fa-align-right" />
              </span>
              <input
                type="text"
                name="title"
                placeholder="Добавить описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="no"
                className="ml-5 border-0 text-gray-600 text-base pb-1 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-900"
              />
            </div>
            <div className="flex items-center mt-10">
              <span className="text-3xl text-gray-700">
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
              </span>
              <div className="ml-5 flex items-center gap-2.5">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="text-base text-white">
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-900 px-6 py-2 text-white rounded w-1/4"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
