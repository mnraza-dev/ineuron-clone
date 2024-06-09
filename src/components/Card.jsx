import React from "react";

const Card = ({ details }) => {
  const { picture, name, phone, email } = details;
  return (
    <div className="max-w-48 flex items-center  justify-center flex-col rounded-md border border-sky-100 shadow-lg p-4 ">
      <img
        src={picture?.large}
        alt=""
        className="object-cover rounded-full flex items-center justify-center"
      />
      <div className="mt-2">{name?.first}</div>
      <p className="mt-2 font-thin text-xs italic">{email}</p>
      <p className="mt-2 font-thin text-xs italic">{phone}</p>
    </div>
  );
};

export default Card;
