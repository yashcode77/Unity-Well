import React, { useState, useEffect } from "react";

const Diary = () => {
  const [diaries, setDiaries] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [selectedDiaryId, setSelectedDiaryId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDiaryContent, setSelectedDiaryContent] = useState("");

  useEffect(() => {
    const storedDiaries = JSON.parse(localStorage.getItem("diaries")) || [];
    setDiaries(storedDiaries);
  }, []);

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  const handleCreateDiary = () => {
    if (!newTitle || !newContent) {
      return alert("Please enter both title and content");
    }

    const newDiary = {
      id: Date.now(),
      title: newTitle,
      content: newContent,
    };

    setDiaries([...diaries, newDiary]);
    setNewTitle("");
    setNewContent("");
  };

  const handleUpdateDiary = () => {
    if (!selectedDiaryId) {
      return alert("Please select a diary to update");
    }

    if (!newTitle || !newContent) {
      return alert("Please enter both title and content");
    }

    const updatedDiaries = diaries.map((diary) =>
      diary.id === selectedDiaryId
        ? { ...diary, title: newTitle, content: newContent }
        : diary
    );

    setDiaries(updatedDiaries);
    setSelectedDiaryId(null);
    setNewTitle("");
    setNewContent("");
  };

  const handleDeleteDiary = (diaryId) => {
    const updatedDiaries = diaries.filter((diary) => diary.id !== diaryId);
    setDiaries(updatedDiaries);
  };

  const handleSelectDiary = (diaryId) => {
    setSelectedDiaryId(diaryId);

    const selectedDiary = diaries.find((diary) => diary.id === diaryId);

    setNewTitle(selectedDiary.title);
    setNewContent(selectedDiary.content);
  };

  const handleReadDiary = (content) => {
    setSelectedDiaryContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDiaryContent("");
  };

  return (
    <div className="mt-8 flex">
      <div className=" pr-4 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">My Diary</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            selectedDiaryId ? handleUpdateDiary() : handleCreateDiary();
          }}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              placeholder="e.g. Today I won the Hackthon ❤️ "
              type="text"
              id="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-white text-sm font-bold mb-2"
            >
              Buddy, How was your day?
            </label>
            <textarea
              placeholder="Express your thoughts here"
              id="content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {selectedDiaryId ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className=" pl-4 overflow-y-auto max-h-96 w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Diary Pages</h2>
        <ul>
          {diaries.map((diary) => (
            <li
              key={diary.id}
              className="bg-white shadow-md rounded mb-4 p-4 border-l-4 border-blue-500 text-gray-700"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {diary.title}
              </h3>
              {/* Displaying a truncated preview of content */}
              <p className="text-gray-700 mb-2">
                {diary.content.slice(0, 40)}...
              </p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {new Date(diary.id).toLocaleDateString()}{" "}
                | <strong>Time:</strong>{" "}
                {new Date(diary.id).toLocaleTimeString()}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => handleReadDiary(diary.content)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Read
                </button>
                <button
                  onClick={() => handleSelectDiary(diary.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDiary(diary.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for reading full diary content */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-1xl font-semibold text-gray-700">
                  Read Diary
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none ">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto text-gray-800 text-justify">
                {selectedDiaryContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diary;
