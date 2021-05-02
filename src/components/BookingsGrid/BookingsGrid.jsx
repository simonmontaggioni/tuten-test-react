import "./BookingsGrid.css";

const BookingsGrid = (props) => {
  const Row = ({ id, client, date, address, price } = props) => {
    return (
      <tr className="table-row">
        <td>{id}</td>
        <td>{client}</td>
        <td>{date}</td>
        <td>{address}</td>
        <td>{price}</td>
      </tr>
    );
  };
  const renderRows = props.rows.map((row) => {
    return (
      <Row
        key={row.id}
        id={row.id}
        client={row.client}
        date={row.date}
        address={row.address}
        price={row.price}
      />
    );
  });
  return (
    <table className="table">
      <thead className="table-header">
        <tr className="table-header-row">
          <th>BookingId</th>
          <th>Cliente</th>
          <th>Fecha de Creación</th>
          <th>Dirección</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default BookingsGrid;
