import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

import './AddTask.scss';

const AddTask = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const buttonHandler = () => {
    if (searchValue) {
      dispatch(addTask(searchValue));
    } else {
      alert('Please, enter your task');
    }
    setSearchValue('');
  };

  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Add a new task"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={buttonHandler}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.25 9C17.25 9.18234 17.1776 9.35721 17.0486 9.48614C16.9197 9.61507 16.7448 9.6875 16.5625 9.6875H9.6875V16.5625C9.6875 16.7448 9.61507 16.9197 9.48614 17.0486C9.35721 17.1776 9.18234 17.25 9 17.25C8.81766 17.25 8.6428 17.1776 8.51386 17.0486C8.38493 16.9197 8.3125 16.7448 8.3125 16.5625V9.6875H1.4375C1.25516 9.6875 1.0803 9.61507 0.951364 9.48614C0.822433 9.35721 0.75 9.18234 0.75 9C0.75 8.81766 0.822433 8.6428 0.951364 8.51386C1.0803 8.38493 1.25516 8.3125 1.4375 8.3125H8.3125V1.4375C8.3125 1.25516 8.38493 1.0803 8.51386 0.951364C8.6428 0.822433 8.81766 0.75 9 0.75C9.18234 0.75 9.35721 0.822433 9.48614 0.951364C9.61507 1.0803 9.6875 1.25516 9.6875 1.4375V8.3125H16.5625C16.7448 8.3125 16.9197 8.38493 17.0486 8.51386C17.1776 8.6428 17.25 8.81766 17.25 9Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTask;
