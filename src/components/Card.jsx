import { data } from "autoprefixer"

function Card({user}) {

  return (
    <>
  
      <div className='flex flex-row py-5 px-3'>
      <div
        className="block w-[275px] rounded-lg bg-blue-400">
        <div className="border-b-2 border-[#0000002d] rounded-lg px-6 py-3 text-white bg-blue-800 ">
        {user.name}       </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-black">
            Info User title
          </h5>
         <ul>
             <li>Last Name : {user.name}</li>
             <li>Email : {user.email}</li>
             <li>Phon : {user.phone}</li>
             <li>User Name : {user.username}</li>
         </ul>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default Card
