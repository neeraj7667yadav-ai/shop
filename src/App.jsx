// import Card from "./Component/Card";
// import "./App.css";

// function App() {

//   const info = [
//     {
//       imgadd: "1.im.jpg",
//       time: "4days ago",
//       post: "post one",
//       color: "text-danger",
//       bg: "bg-danger",

//       foot: [
//         {
//           num: 21,
//           foottext: "read",
//         },
//         {
//           num: 3421,
//           foottext: "view",
//         },
//         {
//           num: 547,
//           foottext: "comment",
//         },
//       ],
//     },

//     {
//       imgadd: "2.im.jpg",
//       time: "1week ago",
//       post: "post two",
//       color: "text-warning",
//        bg: "bg-warning",

//       foot: [
//         {
//           num: 50,
//           foottext: "read",
//         },
//         {
//           num: 2500,
//           foottext: "view",
//         },
//         {
//           num: 300,
//           foottext: "comment",
//         },
//       ],
//     },

//     {
//       imgadd: "3.im.jpg",
//       time: "4week ago",
//       post: "post three",
//       color: "text-success",
//       bg: "bg-success",

//       foot: [
//         {
//           num: 75,
//           foottext: "read",
//         },
//         {
//           num: 5000,
//           foottext: "view",
//         },
//         {
//           num: 700,
//           foottext: "comment",
//         },
        
//       ],
//     },
//   ];

//   return (
//     <>
//       <div className="container mt-3">
//         <div className="row">

//           {info.map((item, index) => (
//             <Card key={index} item={item}/>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// import Counts from "./Count/counts"
import Shopshendle from "./Shops/Shopshendle"
function App() {
  return (
    <>
      {/* <Counts/> */}
      <Shopshendle/>
    </>
  )
}

export default App
