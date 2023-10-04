// // Class Component
// class Nilai extends React.Component {
//   // State Declaration
//   state = {
//     diClick: 0
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.diClick}</h1>
//         <button
//           onClick={() => {
//             this.setState((prevState) => ({ diClick: prevState.diClick - 1 }));
//           }}
//         >
//           -1
//         </button>
//         <button
//           onClick={() => {
//             this.setState((prevState) => ({ diClick: prevState.diClick + 1 }));
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// };

// // Show Component
// class Show extends React.Component {
//   render() {
//       return (
//           <div>
//               <Nilai />
//           </div>
//       );
//   }
// };
// const myElement = <Show />;
// const myApp = myElement;
// ReactDOM.createRoot(document.getElementById('root')).render(myApp);



// Functional Component
const Nilai = () => {
  // State Declaration
  const [diClick, setDiClick] = React.useState(0);

  return (
    <div>
      <h1>{diClick}</h1>
      <button
        onClick={() => {
          setDiClick((prevDiClick) => prevDiClick - 1);
        }}
      >
        - 1
      </button>
      <button
        onClick={() => {
          setDiClick((prevDiClick) => prevDiClick + 1);
        }}
      >
        + 1
      </button>
    </div>
  );
};

// Show Component
const Show = () => {
  return (
    <div>
      <Nilai />
    </div>
  );
};
const myElement = <Show />;
const myApp = myElement;
ReactDOM.createRoot(document.getElementById('root')).render(myApp);
