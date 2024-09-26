import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";


const Dropdown= ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const listItems=["ML","EDA"]

  return (
    <div className="bg-blue-600 width-48 border border-indigo-600 " >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        
      >
        Analysis{" "}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div>
          {listItems.map((item, index) => (
            <div      
              key={index}
            >
              <h3 >{item}</h3>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
