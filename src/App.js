import "./App.css";
import data from "./data/data.json";

function App() {
  return (
    <div className="container-fluid my-5">
      <table className="table table-striped">
        <thead>
          <tr className="align-middle text-center">
            <th scope="col">No</th>
            {data.location.map((location) => {
              return <th scope="col">{location.name}</th>;
            })}
            <th scope="col">Category</th>
            <th scope="col">Product</th>
            <th scope="col">Total Stock</th>
            <th scope="col">Percent</th>
            <th scope="col">Total Order</th>
          </tr>
        </thead>
        <tbody>
          {data.proformaItem.map((item, idx) => {
            return (
              <tr key={item.product_id} className="align-middle text-center">
                <td>{idx + 1}</td>
                {data.location.map((location, idx) => {
                  return (
                    <td>
                      {JSON.parse(item.product_stock).map((stock) => {
                        if (Number(Object.keys(stock)[0]) === location.id) {
                          return Number(Object.values(stock)[0]);
                        }
                      })}
                    </td>
                  );
                })}
                <td className="text-start">{item.categoryDescription}</td>
                <td className="text-start">{item.productDescription}</td>
                <td>
                  {JSON.parse(item.product_stock)
                    .map((stock) => Object.values(stock)[0])
                    .reduce((prev, curr) => prev + curr, 0)}
                </td>
                <td></td>
                <td>
                  {JSON.parse(item.items).map((items) => {
                    return items.qty;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="text-success">Hello World</h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    //   {data.proformaItem.map((dat) => {
    //     return <span>{dat.productDescription}</span>;
    //   })}
    // </div>
  );
}

export default App;
