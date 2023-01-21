import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const BoardNew = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const handleChange = event => {
    const {name, value} = event.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/board/create', values)
      .then(data => {
        console.log(data);
      })
      .catch(data => console.log('error!'));
  };

  return (
    <>
      <div className='border py-3'>
        <div className='flex flex-row items-center mb-1'>
          <input
            className='font-KB text-black text-2xl w-full pb-2'
            placeholder='제목을 입력해주세요.'
            value=''
          />
        </div>
        <div className='flex'>
          <select>
            <option className='flex font-KR text-sm'>공지</option>
            <option className='flex font-KR text-sm'>블로그</option>
          </select>
        </div>
      </div>
      <div className='py-5 w-full h-2/3 border'>
        <textarea
          className='font-KR w-full h-full block resize-none p-2'
          placeholder='내용을 입력해주세요.'></textarea>
      </div>
      <div className='flex justify-center my-8'>
        <button className='bg-blue-500 w-16 h-9 text-white font-black rounded mr-2 font-KR'>
          등록
        </button>
        <button className='bg-gray-500 w-16 h-9 text-white font-black rounded mr-2 font-KR'>
          취소
        </button>
      </div>
    </>
  );
};

export default BoardNew;
