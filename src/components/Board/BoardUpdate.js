import React from 'react';

const BoardUpate = () => {
  return (
    <>
      <div className='border py-3'>
        <div className='flex flex-row items-center mb-1'>
          <input
            className='font-KB text-black text-2xl w-full pb-2'
            placeholder='제목을 입력해주세요.'
            value='1/19(목) 넥슨 정기점검 안내'
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
          placeholder='내용을 입력해주세요.'>
          매주 목요일은 넥슨 정기점검으로 1월 19일(목) 오전 6시부터 오전 9시까지
          넥슨캐시 충전이 원활하지 않습니다. 고객 여러분들의 너그러운 양해
          부탁드리며 자세한 점검시간과 작업영향은 아래 내용을 확인해 주시기
          바랍니다. ▣ 점검시간과 작업영향 - 오전 6시 ~ 오전 9시(3시간) :
          넥슨캐시 충전이 원활하지 않습니다. : 직접결제 서비스가 원활하지
          않습니다. 안내 드리는 내용 참고하셔서 이용에 불편 없으시길 바랍니다.
          감사합니다.
        </textarea>
      </div>
      <div className='flex flex-col border py-2'>
        <ul className='flex py-2'>
          <li className='mr-2 font-KR'>▲</li>
          <li className='mr-2 font-KR'>[공지]</li>
          <li>설 연휴 고객센터 휴무 안내 1월21일(토)~1월24일(화)</li>
        </ul>
        <ul className='flex py-2'>
          <li className='mr-2 font-KR'>▼</li>
          <li className='mr-2 font-KR'>[공지]</li>
          <li>(수정) 1월 문화상품권 10% 리워드 이벤트 안내</li>
        </ul>
      </div>
      <div className='flex justify-center my-8'>
        <button className='bg-blue-500 w-16 h-9 text-white font-black rounded mr-2 font-KR'>
          수정
        </button>
        <button className='bg-gray-500 w-16 h-9 text-white font-black rounded mr-2 font-KR'>
          삭제
        </button>
        <button className='bg-blue-500 w-16 h-9 text-white font-black rounded mr-2 font-KR'>
          목록
        </button>
      </div>
    </>
  );
};
export default BoardUpate;
