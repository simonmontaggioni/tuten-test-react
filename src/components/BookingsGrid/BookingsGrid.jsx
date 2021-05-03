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
  const renderRows = props.data.map((row, index) => {
    const time = new Date(row.bookingTime);
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    return (
      <Row
        key={index}
        id={row.bookingId}
        client={`${row.tutenUserClient.firstName} ${row.tutenUserClient.lastName} `}
        date={`${day}/${month}/${year}`}
        address={row.locationId.streetAddress}
        price={row.bookingPrice}
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
