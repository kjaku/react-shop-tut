import React from 'react';

export default function Title({ title }) {
  return (
    <div>
      <div className="row">
        <div className=" col-10 mx-auto my-2 text-center ">
          <h2 className=" text-capitalize font-weight-bold text-title">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
