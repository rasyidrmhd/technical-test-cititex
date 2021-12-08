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
            <th scope="col">Percent %</th>
            <th scope="col">Total Order</th>
          </tr>
        </thead>
        <tbody>
          {data.proformaItem.map((item, idx) => {
            let totalStock = JSON.parse(item.product_stock)
              .map((stock) => Object.values(stock)[0])
              .reduce((prev, curr) => prev + curr);

            let totalOrder = JSON.parse(item.items)
              .map((items) => items.qty)
              .reduce((prev, curr) => prev + curr);

            let percent = (totalOrder / totalStock) * 100;

            return (
              <tr key={item.product_id} className="align-middle text-center">
                <td>{idx + 1}</td>
                {data.location.map((location, idx) => {
                  let locationStock = 0;

                  JSON.parse(item.product_stock).map((stock) => {
                    if (Object.keys(stock) == location.id) {
                      locationStock = Object.values(stock);
                    }
                  });

                  return <td key={idx}>{locationStock}</td>;
                })}
                <td className="text-start">{item.categoryDescription}</td>
                <td className="text-start">{item.productDescription}</td>

                <td>{totalStock}</td>
                <td>{percent.toFixed(2)} %</td>
                <td>{totalOrder}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
