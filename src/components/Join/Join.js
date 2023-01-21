import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Join = () => {
  const [values, setValues] = useState({email: '', pw: ''});

  const handleChange = event => {
    const {name, value} = event.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/join', values)
      .then(data => {
        console.log(data);
      })
      .catch(data => {
        console.log('errors');
        console.log(data);
      });
  };

  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col justify-center'>
        <div className='my-2'>
          <div className='flex justify-center font-lg text-blue-500 text-7xl font-anton tracking-wide'>
            <label className='scale-y-95 scale-x-125'>NEVER</label>
          </div>
          <div className='flex justify-center'>
            <span className='text-blue-400 font-black'>회원가입</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <input
            className='outline outline-offset-2 outline-1 my-5 mx-1 w-80 outline-gray-300 rounded p-2'
            placeholder='아이디'
            type='text'
            name='userId'
          />
          <label>아이디문제있음!</label>
          <input
            className='outline outline-offset-2 outline-1 my-5 mx-1 w-80 outline-gray-300 rounded p-2'
            placeholder='비밀번호'
            type='password'
            name='userPassword'
          />
          <label>비밀번호문제있음!</label>
          <input
            className='outline outline-offset-2 outline-1 my-5 mx-1 w-80 outline-gray-300 rounded p-2'
            placeholder='이름'
            type='text'
            name='userName'
          />
          <label>이름문제있음!</label>
          <input
            className='outline outline-offset-2 outline-1 my-5 mx-1 w-80 outline-gray-300 rounded p-2'
            placeholder='이메일'
            type='email'
            name='userEmail'
          />
          <label>이메일문제있음!</label>
        </div>
        <div>
          {/* 백엔드로 전송 */}
          <Link to='/sendJoinForm' className='flex justify-center my-5'>
            <button className='bg-blue-500 w-full h-10 text-white text-lg font-black'>
              가입하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Join;
