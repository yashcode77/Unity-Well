import React, { useState, useEffect } from "react";
import "../styles/pages/Diary.css"; 

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
    <div className="diary-container">
      <div className="diary-form">
        <h1 className="text-3xl font-bold mb-4 text-center">My Diary</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            selectedDiaryId ? handleUpdateDiary() : handleCreateDiary();
          }}
          className="diary-form-container"
        >
          <div className="input-group">
            <label htmlFor="title" className="input-label">
              Title:
            </label>
            <input
              placeholder="e.g. Today I won the Hackthon ❤️ "
              type="text"
              id="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-field title-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="content" className="input-label">
              Buddy, How was your day?
            </label>
            <textarea
              placeholder="Express your thoughts here"
              id="content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            {selectedDiaryId ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="diary-list">
        <h2 className="text-3xl font-bold mb-4 text-center">Diary Pages</h2>
        <ul>
          {diaries.map((diary) => (
            <li
              key={diary.id}
              className="diary-item"
            >
              <h3 className="diary-title">
                {diary.title}
              </h3>
              <p className="diary-preview">
                {diary.content.slice(0, 40)}...
              </p>
              <p className="diary-meta">
                <strong>Date:</strong> {new Date(diary.id).toLocaleDateString()}{" "}
                | <strong>Time:</strong>{" "}
                {new Date(diary.id).toLocaleTimeString()}
              </p>
              <div className="btn-group">
                <button
                  onClick={() => handleReadDiary(diary.content)}
                  className="btn-secondary read"
                >
                  Read
                </button>
                <button
                  onClick={() => handleSelectDiary(diary.id)}
                  className="btn-secondary edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDiary(diary.id)}
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Read Diary</h3>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              {selectedDiaryContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diary;
