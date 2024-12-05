import React, { useState } from 'react';

const Modal = ({ activeType, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [vote_average, setVoteAverage] = useState('');
  const [vote_count, setVoteCount] = useState('');
  const [poster_path, setPosterPath] = useState('');

  const handleSubmit = () => {
    if (!title || !vote_average || !vote_count || !poster_path) {
      alert('Please fill all fields!');
      return;
    }

    const newItem = {
      id: Date.now(),
      title,
      vote_average: parseFloat(vote_average),
      vote_count: parseInt(vote_count, 10),
      poster_path,
    };

    onAdd(newItem); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New {activeType === 'movies' ? 'Movie' : 'Show'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="number"
            step="0.1"
            className="w-full border rounded p-2"
            value={vote_average}
            onChange={(e) => setVoteAverage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vote Count</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={vote_count}
            onChange={(e) => setVoteCount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Poster URL</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={poster_path}
            onChange={(e) => setPosterPath(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
