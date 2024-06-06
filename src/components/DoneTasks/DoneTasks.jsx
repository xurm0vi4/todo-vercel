import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoneTask } from '../../redux/taskSlice';

import './DoneTasks.scss';

const DoneTasks = () => {
  const dispatch = useDispatch();
  const { doneTasks } = useSelector((state) => state.task);
  return (
    <div className="done">
      <h2>Done - {doneTasks?.length}</h2>
      {doneTasks?.length ? (
        doneTasks.map((task, id) => (
          <div key={id} className="done__task">
            <span className="done__task-text">{task}</span>
            <span className="done__task-delete" onClick={() => dispatch(deleteDoneTask(id))}>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6112 3.125H1.48621C1.30387 3.125 1.129 3.19743 1.00007 3.32636C0.871139 3.4553 0.798706 3.63016 0.798706 3.8125C0.798706 3.99484 0.871139 4.1697 1.00007 4.29864C1.129 4.42757 1.30387 4.5 1.48621 4.5H2.17371V16.875C2.17371 17.2397 2.31857 17.5894 2.57643 17.8473C2.8343 18.1051 3.18403 18.25 3.54871 18.25H14.5487C14.9134 18.25 15.2631 18.1051 15.521 17.8473C15.7788 17.5894 15.9237 17.2397 15.9237 16.875V4.5H16.6112C16.7935 4.5 16.9684 4.42757 17.0973 4.29864C17.2263 4.1697 17.2987 3.99484 17.2987 3.8125C17.2987 3.63016 17.2263 3.4553 17.0973 3.32636C16.9684 3.19743 16.7935 3.125 16.6112 3.125ZM14.5487 16.875H3.54871V4.5H14.5487V16.875ZM4.92371 1.0625C4.92371 0.880164 4.99614 0.705295 5.12507 0.576364C5.254 0.447433 5.42887 0.375 5.61121 0.375H12.4862C12.6685 0.375 12.8434 0.447433 12.9723 0.576364C13.1013 0.705295 13.1737 0.880164 13.1737 1.0625C13.1737 1.24484 13.1013 1.4197 12.9723 1.54864C12.8434 1.67757 12.6685 1.75 12.4862 1.75H5.61121C5.42887 1.75 5.254 1.67757 5.12507 1.54864C4.99614 1.4197 4.92371 1.24484 4.92371 1.0625Z"
                  fill="#78cfb0"
                />
              </svg>
            </span>
          </div>
        ))
      ) : (
        <div style={{ color: '#9E78CF', marginTop: 20, fontSize: 24 }}>
          You didn't any tasks yet
        </div>
      )}
    </div>
  );
};

export default DoneTasks;
