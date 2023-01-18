import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setinputs] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setinputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center font-lg text-blue-500 text-7xl font-anton tracking-wide my-5">
          <label className="scale-y-95 scale-x-125">NEVER</label>
        </div>
        <div className="outline outline-offset-2 outline-1 outline-gray-300 p-12">
          <form className="flex flex-col">
            <input
              className="outline outline-offset-2 outline-1 my-2 mx-1 w-80 outline-gray-300 rounded p-2"
              placeholder="아이디"
              type="text"
              name="id"
              value={inputs.id}
              onChange={onChange}
            />
            <input
              className="outline outline-offset-2 outline-1 my-2 mx-1 w-80 outline-gray-300 rounded p-2"
              placeholder="비밀번호"
              type="password"
              name="pw"
              value={inputs.pw}
              onChange={onChange}
            />
            {/* to='/Login'으로 Post 요청 */}
            <Link to="/logined" className="flex justify-center">
              <button className="w-80 h-12 text-lg bg-blue-500 text-white font-black rounded mt-5">
                로그인
              </button>
            </Link>
          </form>
        </div>

        <div className="flex justify-center justify-items-center my-4">
          <div className="mx-4">
            <Link to="/join">
              <button className="text-zinc-400 text-sm">비밀번호 찾기</button>
            </Link>
          </div>
          <div className="mx-4">
            <Link to="/join">
              <button className="text-zinc-400 text-sm">아이디 찾기</button>
            </Link>
          </div>
          <div className="mx-4">
            <Link to="/join">
              <button className="text-zinc-400 text-sm">회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
