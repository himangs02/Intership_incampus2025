// import React from "react";

// const App = () => {
//   const [counter, setCounter] = React.useState(0);

//   return (
//     <div>
//       <h1>App</h1>
//       <h1 className={`underline ${counter > 0 ? "text-5xl text-red-600" : "text-7xl text-blue-600"}`}>{counter}</h1>
//       <button onClick={()=>setCounter(counter + 1)}>Plus</button>
//       <button onClick={()=>setCounter(counter - 1)}>Minus</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   const [color, setColor] = React.useState("red");
//   return (
//     <div className="m-auto flex justify-center"  style={{
//       background:color,
//       height:'100vh',
//       width:"100vw"
//     }}>
//       <button className="p-5 m-5 border border-slate-600 rounded-md bg-green-700" onClick={()=>setColor('green')} >Green</button>
//       <button className="p-5 m-5 border border-slate-600 rounded-md bg-blue-500 " onClick={()=>setColor('blue')} >Blue</button>
//       <button className="p-5 m-5 border border-slate-600 rounded-md bg-yellow-300" onClick={()=>setColor('yellow')} >Yellow</button>
//       <button className="p-5 m-5 border border-slate-600 rounded-md bg-pink-700" onClick={()=>setColor('pink')} >Pink</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [product, setProduct] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const res = await response.json();
//       console.log(res);
//       setProduct(res);
//     };

//     fetchProduct();
//   }, []);

//   const filterProducts = product.filter((each) =>
//     each.title.toLowerCase().includes(searchInput.toLowerCase())
//   );
//   return (
//     <>
//       <h1>Products</h1>

//       <input
//         className="border border-amber-700 p-3"
//         type="text"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       {filterProducts.map((each) => (
//         <div key={each.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//           <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
//             <img
//               className="w-24 h-24 object-contain mb-4"
//               src={each.image}
//               alt={each.title}
//             />
//             <p className="text-sm font-medium text-gray-800">{each.title}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default App;

// import React,{useRef} from 'react'


// const App = () => {
//   const headingRef = useRef(null);
//   console.log(headingRef?.current)
//   return (
//     <div>
//       <h1 className='text-5xl text-red-600 underline font-bold' ref={headingRef}>hello world</h1>
//     </div>
//   )
// }

// export default App
