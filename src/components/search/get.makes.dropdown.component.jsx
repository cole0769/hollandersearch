import React, { Component } from 'react';
import axios from 'axios';


class HollanderMakes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturers: []
    };
  } 
//   const response = await axios.get('http://localhost:3003/hollanderapi/manufacturers');
async componentDidMount() {
    const response = await axios.get('http://localhost:3003/hollanderapi/manufacturers');
    this.setState({ manufacturers: response.data.results });
    console.log(this.state.manufacturers)
}
render() {
    return(
        <div className="container mt-4">
            {/* <ImageList images={ this.state.manufacturers }/>     */}
        </div>
    );
}
} 

export default HollanderMakes;
// function HollanderMakesDropDown() {
//   const [loading, setLoading] = React.useState(true);
//   const [items, setItems] = React.useState([]);
//   const [value, setValue] = React.useState("Manufacturers");
//   React.useEffect(() => {
//     let unmounted = false;
//     async function getHollanderMakes() {
//       const response = await fetch(
//         "http://172.16.10.230:3003/hollanderapi/manufacturers"
//       );
//       const body = await response.json();
//       if (!unmounted) {
//         setItems(
//           body.results.map(({ MfrCd, MrfName }) => ({ label: MrfName, value: MfrCd }))
//         );
//         setLoading(false);
//       }
//     }
//     getHollanderMakes();
//     return () => {
//       unmounted = true;
//     };
//   }, []);

//   return (
//     <select
//       disabled={loading}
//       value={value}
//       onChange={(e) => setValue(e.currentTarget.value)}
//     >
//       {items.map(({ label, value }) => (
//         <option key={value} value={value}>
//           {label}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default function SearchHollanderMakes() {
//   return (
//     <div className="SearchMake">
//       <HollanderMakesDropDown />
//     </div>
//   );
// }
