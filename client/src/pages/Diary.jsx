import React, { useState, useEffect } from 'react';
import { Diary } from '../../'; // Assuming diary.model.js is in the same directory

const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [selectedDiaryId, setSelectedDiaryId] = useState(null);

  useEffect(() => {
    const fetchDiaries = async () => {
      // Replace with actual user ID
      const userId = 'YOUR_USER_ID';
      const fetchedDiaries = await Diary.find({ userId });
      setDiaries(fetchedDiaries);
    };

    fetchDiaries();
  }, []);

  const handleCreateDiary = async () => {
    if (!newTitle || !newContent) {
      return alert('Please enter both title and content');
    }

    const newDiary = new Diary({
      userId: 'YOUR_USER_ID', // Replace with actual user ID
      title: newTitle,
      content: newContent,
    });

    await newDiary.save();
    setDiaries([...diaries, newDiary]);
    setNewTitle('');
    setNewContent('');
  };

  const handleUpdateDiary = async () => {
    if (!selectedDiaryId) {
      return alert('Please select a diary to update');
    }

    if (!newTitle || !newContent) {
      return alert('Please enter both title and content');
    }

    await Diary.findByIdAndUpdate(selectedDiaryId, {
      title: newTitle,
      content: newContent,
    });

    const updatedDiaries = diaries.map((diary) =>
      diary._id.toString() === selectedDiaryId
        ? { ...diary, title: newTitle, content: newContent }
        : diary
    );
    setDiaries(updatedDiaries);
    setSelectedDiaryId(null);
    setNewTitle('');
    setNewContent('');
  };

  const handleDeleteDiary = async (diaryId) => {
    await Diary.findByIdAndDelete(diaryId);
    setDiaries(diaries.filter((diary) => diary._id.toString() !== diaryId));
  };

  const handleSelectDiary = (diaryId) => {
    setSelectedDiaryId(diaryId);
    const selectedDiary = diaries.find((diary) => diary._id.toString() === diaryId);
    setNewTitle(selectedDiary.title);
    setNewContent(selectedDiary.content);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">My Diary</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          selectedDiaryId ? handleUpdateDiary() : handleCreateDiary();
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            placeholder='e.g. Connected with Shiksha NGO'
            type="text"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Buddy, How was your day?
          </label>
          <textarea
            placeholder='Express your thoughts here'
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
          {selectedDiaryId ? 'Update' : 'Create'} Diary
        </button>
      </form>
      <ul>
        {diaries.map((diary) => (
          <li
            key={diary._id}
            className="bg-white shadow-md rounded mb-4 p-4 border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-bold mb-2">{diary.title}</h3>
            <p className="text-gray-700">{diary.content}</p>
            <div className="mt-2">
              <button
                onClick={() => handleSelectDiary(diary._id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteDiary(diary._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryPage;
