import "./BookingsGrid.css";

const BookingsGrid = (props) => {
  console.log(props.data);
  const Row = ({ id, client, date, address, price } = props) => {
    if (id === undefined) {
      return (
        <tr className="table-row">
          <td colSpan={5}>No hay datos </td>
        </tr>
      );
    }
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
          <th id="bookingId">BookingId</th>
          <th id="client">Cliente</th>
          <th id="date">Fecha de Creación</th>
          <th id="address">Dirección</th>
          <th id="price">Precio</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.data.length > 0 ? renderRows : <Row />}
      </tbody>
    </table>
  );
};

export default BookingsGrid;
