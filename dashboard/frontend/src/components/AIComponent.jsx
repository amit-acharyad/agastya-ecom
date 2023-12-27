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
    <div className="question-container">
      <div className="input-component">
        <input
          className="input-question"
          placeholder="Ask me anything realted to your inventory"
        />
      </div>
      <div className="question-wrapper">
        <div className="question">
          Which was the most selling product of mine last year?
        </div>
        <div className="answer">
          <span className="answer-text">
            The most selling product of last year was Muffler. The current stock
            of the product is just 10. Last year your product sales was 100
            Muffler in a day. You must consider restocking it for better sales.
          </span>
        </div>
      </div>
    </div>
  );
}
