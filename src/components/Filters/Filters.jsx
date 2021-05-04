import "./Filters.css";

const Filters = (props) => {
  const handleIdChange = (e) => {
    const idFilterValue = e.target.value;
    props.handleIdFiltersChange(idFilterValue);
  };
  const handleGreaterEqualThanChange = (e) => {
    const idGreaterThanValue = e.target.value;
    props.handleGreaterEqualThanFiltersChange(idGreaterThanValue);
  };
  const handleLessEqualThanChange = (e) => {
    const idLessThanValue = e.target.value;
    props.handleLessEqualThanFiltersChange(idLessThanValue);
  };
  return (
    <div className="filters">
      <div className="id-filter-wrapper">
        <div className="id-filter-number">
          <label htmlFor="id-filter">ID</label>
          <input
            type="number"
            name="id-filter"
            id="id-filter"
            placeholder="id number"
            min="0"
            onChange={handleIdChange}
          />
        </div>
        <div className="id-filter-greater-equal-than">
          <label htmlFor="greater-equal-than">Mayor igual que:</label>
          <input
            type="number"
            name="greater-equal-than"
            id="greater-equal-than"
            placeholder="id number"
            min="0"
            onChange={handleGreaterEqualThanChange}
          />
        </div>
        <div className="id-filter-less-equal-than">
          <label htmlFor="less-equal-than">Menor igual que:</label>
          <input
            type="number"
            name="less-equal-than"
            id="less-equal-than"
            placeholder="id number"
            min="0"
            onChange={handleLessEqualThanChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
