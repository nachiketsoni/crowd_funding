import React from 'react'

const CustomeButton = ({styles ,title , btnType,handleClick}) => {
  return (
   <button className={`${styles} px-[15px] py-[8px] text-white rounded-[10px]`}
   onClick={handleClick}
   >
    {title}
   </button>
  )
}

export default CustomeButton