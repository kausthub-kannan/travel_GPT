// import React, { useState, useEffect } from "react";
// import OpenAIApi from 'openai-api';
// // const { } = require("openai");


// const [messages, setMessages] = useState([]);

// const ChatSupport = () => {
//   async function getAiResponse(topic) {
//     try {
//       const openai = new OpenAIApi(configuration.apiKey);
//       const completion = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: topic,
//         max_tokens: 1024,
//         n: 1,
//         stop: null,
//         temperature: 0.7,
//       });
//       console.log(completion.data.choices[0].text);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getAiResponse('Your Prompt here');
  
//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };
//     const handleSendMessage = async (message) => {
//       setMessages([...messages, { text: message, fromUser:true}]);

    
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         prompt: "Select a vacation place for the following data: " + "From Bengaluru, Karnataka, India to Srirangam, Tamilnadu, India From 25/03/2023 to 27/03/2023",
//         model: 'text-davinci-003',
//         max_tokens: 1000,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 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`,
//         },
//       }
//     );  
//     console.log(response.data.choices[0].text)  
//   } catch (error) {
//     console.log(error)
//   }
//   };

//   return (
//     <div className="fixed bottom-0 right-0 p-4">
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
//         onClick={toggleChat}
//       >
//         {isOpen ? "Close chat" : "Open chat"}
//       </button>
//       {isOpen && (
//         <div className="bg-gray-100 rounded-lg mt-4">
//           <div className="p-4">
//             {messages.map((msg, index) => (
//               <div key={index} className="mb-2">
//                 <div
//                   className={`${
//                     msg.fromUser ? "text-right" : "text-left"
//                   } font-bold mb-1`}
//                 >
//                   {msg.fromUser ? "You" : "Support"}
//                 </div>
//                 <div
//                   className={`${
//                     msg.fromUser
//                       ? "bg-blue-500 text-white rounded-br-none"
//                       : "bg-gray-200 text-gray-700 rounded-bl-none"
//                   } px-3 py-2 rounded-lg inline-block`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="px-4 py-2 bg-gray-200">
//             <input
//               type="text"
//               placeholder="Type your message"
//               className="w-full px-3 py-2 rounded-full bg-white focus:outline-none"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSendMessage(e.target.value);
//                   e.target.value = "";
//                 }
//               }}
//             />
//           </div>
//         </div>
//       )}
//       </div>
//    )}

// export default ChatSupport;