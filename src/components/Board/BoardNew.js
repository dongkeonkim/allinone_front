import React, { useState } from "react";
import axios from "axios";

const BoardNew = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/board/create", values)
      .then((data) => {
        console.log(data);
      })
      .catch((data) => console.log("error!"));
  };

  return (
    <>
      <div className="flex flex-col mb-2 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={values.title}
            className="rounded-lg w-4/12 border-transparent m-2 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="제목을 입력하세요"
            onChange={handleChange}
          />
          <textarea
            className="block p-2.5 w-8/12 h-4/6 text-sm rounded-lg m-2 border border-gray-300"
            placeholder="입력하세요"
            name="content"
            value={values.content}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end w-8/12">
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BoardNew;
