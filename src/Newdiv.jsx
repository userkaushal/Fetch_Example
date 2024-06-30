import React from "react";

function Newdiv({ data }) {
  return (
    <>
      {/* <div className="w-1/4 min-h-52 rounded bg-gray-50 max-sm:w-full max-md:w-1/2 m-auto shadow-lg p-4"> */}
      <div className="min-h-52 rounded bg-gray-50 shadow-lg p-4">
        <div>
          <p className="text-center font-mono font-bold p-1">{data.id}</p>
          <hr />
          <p className="text-center font-mono font-bold p-1">{data.title}</p>
          <hr />
          <p className="font-mono font-normal p-1">{data.body}</p>
        </div>
      </div>

      {/* <div className='w-1/4 min-h-52 rounded bg-gray-50 max-sm:w-full  max-md:w-1/2 m-auto'>
          <div className=''>
            <div>
            <p className='text-center font-mono font-bold p-1'>id</p><hr/>
            <p className='text-center font-mono font-bold p-1'>title</p><hr/>
            <p className='font-mono font-normal p-1'>body</p>
            </div>
          </div>
         </div> */}
    </>
  );
}

export default Newdiv;
