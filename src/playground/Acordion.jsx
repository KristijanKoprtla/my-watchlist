import { useState } from "react";

const Acordion = () => {
  const accordionStyle = {
    border: "1px solid black",
    margin: 20,
  };

  const [isOpened, SetIsOpened] = useState(false);

  return (
    <>
      <div style={accordionStyle}>
        <div onClick={() => SetIsOpened(!isOpened)}>Pitanje 1 ↓</div>
        {isOpened && 
          <div style={{ borderTop: "1px solid silver", padding: "10px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            necessitatibus voluptatibus unde, animi repudiandae veniam sint
            minus fugit debitis qui?
          </div>
        }
        

        
      </div>

      

      
    </>
  );
};

export default Acordion;
