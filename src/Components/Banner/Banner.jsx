import React from "react";
import BookImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 mt-6 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="rounded-lg"
          src={BookImg}
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
