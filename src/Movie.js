import React from "react";

const Movie = ({ title, year }) => {
  return (
    <>
      {" "}
      <span>
        {title} - {year}
      </span>
    </>
  );
};

export default Movie;
