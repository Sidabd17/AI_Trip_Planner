import React from 'react';

// const DialogBox = ({ isOpen, onClose, title, children, actionText, onAction, icon: Icon }) => {
//   if (!isOpen) return null;

// //   return (
// //     <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex items-center justify-center">
// //       <div className="p-5 bg-white rounded-md w-[350px] shadow-lg relative">
// //         <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>×</button>
// //         {Icon && <div className="mb-4 flex justify-center text-3xl"><Icon /></div>}
// //         <h2 className="text-xl font-bold text-center">{title}</h2>
// //         <div className="my-4 text-center">{children}</div>
// //         <button
// //           onClick={onAction}
// //           className="p-2 px-4 bg-black w-full text-white rounded-md mt-3 hover:bg-gray-800"
// //         >
// //           {actionText}
// //         </button>
// //       </div>
// //     </div>
// //   );
// };
   
const DialogBox = ({ isOpen, onClose, title, children, actionText, onAction, icon: Icon }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/80  flex items-center justify-center">
        <div className="p-5 bg-white  rounded-md w-[320px] shadow-lg relative" >
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>×</button>
          <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
          <div className="my-4 text-center">{children}</div>
          <button
            onClick={onAction}
            className="p-2 px-4 bg-black  w-full text-white rounded-md mt-3 flex items-center justify-center gap-2"
          >
            {Icon && <Icon className="w-7 h-7" />} {actionText}
          </button>
        </div>
      </div>
    );
};

export default DialogBox;
