import { useState, useEffect, useRef } from 'react' 
import Card from './components/Card' 
import Data from './Data' 

function App() {
  const [search, setSearch] = useState("")
let inputSearch = useRef(null); 

useEffect(() => {
  inputSearch.current.focus()
});
  return (
    <>
    <div className='flex flex-col'>
      <div className='flex justify-center py-5 text-3xl'>
        <h1>Filter Contact API</h1>
      </div>
      <div className='flex justify-center py-5'>
      <input
          type="text"
          ref={inputSearch}
          className="border-solid border-2 border-sky-500  px-4"
          placeholder="Example Filter"
          onChange={(e) => setSearch(e.target.value)}
          />
      </div>
      <div className='flex flex-row flex-wrap py-5 px-3'>
     
      {Data.filter((contect) => {
        if(search === ""){
          return contect
        }else if (contect.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return contect;
        }
      }).map((contect) => (<Card  key={contect.id} user={contect} />))}
      </div>
    </div>
    </>
  )
}

export default App
