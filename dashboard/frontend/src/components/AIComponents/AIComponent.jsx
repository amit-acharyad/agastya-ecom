// import "./component.css";

// export const AiComponent = () => {
//   return (
//     <div className="container">
//       <div className="container-header">
//         <input
//           className="ask-question"
//           placeholder="Ask me anything regarding your query on your inventory"
//         ></input>
//         <div className="question-wrapper">
//           <div className="question">
//             Which was the most selling product last year and do I have current
//             stock of it?
//           </div>
//           <div className="answer">
//             <span>
//               The most selling product of last year was Muffler. The current
//               stock of the product is just 10. Last year your product sales was
//               100 Muffler in a day. You must consider restocking it for better
//               sales.
//             </span>
//           </div>
//           <div className="question">What is my profit this year?</div>
//           <div className="answer">
//             <span>
//               You profit this year is NRS 12,000. Ten lakhs at the same time
//               last year your prodit was NRS. Five lakhs. Congratulations, your
//               sales is increasing.
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import "./component.css";

export function AiComponent() {
  return (
    <div className="ml-56">
      <div className="w-[57%] mt-10 font-semibold text-3xl  rounded-md  py-2 px-2">
        <p>Might these AI Analysis be relevant for you!!</p>
      </div>
      <div className="mt-10 w-full h-[529px] overflow-scroll overflow-x-hidden">
        <div className="w-[60%]">
          <p className="text-lg font-semibold pl-2">You</p>
          <p className="text-md font-normal  p-2">
            What was the product that sold out in large numbers?
          </p>
          <div>
            <p className="text-lg font-semibold pl-2">AI</p>
            <p className="text-md px-3 ">
              Smart watch of Apple was the product that was sold out in large
              numbers which falls on the category of your Electronics, so i
              suggest you to go with smart watch and electronic products
            </p>
          </div>
        </div>
        <div className="w-[60%]">
          <p className="text-lg font-semibold pl-2">You</p>
          <p className="text-md font-normal  p-2">
            What was the product that sold out in large numbers?
          </p>
          <div>
            <p className="text-lg font-semibold pl-2">AI</p>
            <p className="text-lg p-3 ">
              Smart watch of Apple was the product that was sold out in large
              numbers which falls on the category of your Electronics, so i
              suggest you to go with smart watch and electronic products
            </p>
          </div>
        </div>
        <div className="w-[60%]">
          <p className="text-lg font-semibold pl-2">You</p>
          <p className="text-md font-normal  p-2">
            What was the product that sold out in large numbers?
          </p>
          <div>
            <p className="text-lg font-semibold pl-2">AI</p>
            <p className="text-lg p-3 ">
              Smart watch of Apple was the product that was sold out in large
              numbers which falls on the category of your Electronics, so i
              suggest you to go with smart watch and electronic products
            </p>
          </div>
        </div>
        <div className="w-[60%]">
          <p className="text-2xl font-medium  p-2">
            What was the product that sold out in large numbers?
          </p>
          <div>
            <p className="text-lg p-3 ">
              Smart watch of Apple was the product that was sold out in large
              numbers which falls on the category of your Electronics, so i
              suggest you to go with smart watch and electronic products
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[60%] absolute bottom-5 ">
          <input
            className="bg-slate-100 w-[68%] py-4 px-3 rounded-lg text-md outline-none shadow-sm border border-spacing-8 border-black hover:bg-gray-200  "
            type="text"
            name="text"
            placeholder="Search"
            id="101"
          />
        </div>
      </div>
    </div>
  );
}
