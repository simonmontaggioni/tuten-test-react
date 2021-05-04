import "./Filters.css";

const Filters = (props) => {
  const handleIdChange = (e) => {
    const idFilterValue = e.target.value;
    props.handleIdFiltersChange(idFilterValue);
  };
  const handleIdGreaterEqualThanChange = (e) => {
    const idGreaterThanValue = e.target.value;
    props.handleGreaterEqualThanFiltersChange(idGreaterThanValue);
  };
  const handleIdLessEqualThanChange = (e) => {
    const idLessThanValue = e.target.value;
    props.handleLessEqualThanFiltersChange(idLessThanValue);
  };
  const handlePriceChange = (e) => {
    const priceFilterValue = e.target.value;
    props.handlePriceFiltersChange(priceFilterValue);
  };
  const handlePriceGreaterEqualThanChange = (e) => {
    const priceGreaterThanValue = e.target.value;
    props.handlePriceGreaterEqualThanFiltersChange(priceGreaterThanValue);
  };
  const handlePriceLessEqualThanChange = (e) => {
    const priceLessThanValue = e.target.value;
    props.handlePriceLessEqualThanFiltersChange(priceLessThanValue);
  };
  return (
    <div className="filters-container">
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
          <label htmlFor="id-greater-equal-than">Mayor igual que:</label>
          <input
            type="number"
            name="id-greater-equal-than"
            id="id-greater-equal-than"
            placeholder="id number"
            min="0"
            onChange={handleIdGreaterEqualThanChange}
          />
        </div>
        <div className="id-filter-less-equal-than">
          <label htmlFor="id-less-equal-than">Menor igual que:</label>
          <input
            type="number"
            name="id-less-equal-than"
            id="id-less-equal-than"
            placeholder="id number"
            min="0"
            onChange={handleIdLessEqualThanChange}
          />
        </div>
      </div>
      <div className="price-filter-wrapper">
        <div className="price-filter-number">
          <label htmlFor="price-filter">Price</label>
          <input
            type="number"
            name="price-filter"
            id="price-filter"
            placeholder="price"
            min="0"
            onChange={handlePriceChange}
          />
        </div>
        <div className="price-filter-greater-equal-than">
          <label htmlFor="price-greater-equal-than">Mayor igual que:</label>
          <input
            type="number"
            name="price-greater-equal-than"
            id="price-greater-equal-than"
            placeholder="price"
            min="0"
            onChange={handlePriceGreaterEqualThanChange}
          />
        </div>
        <div className="price-filter-less-equal-than">
          <label htmlFor="price-less-equal-than">Menor igual que:</label>
          <input
            type="number"
            name="price-less-equal-than"
            id="price-less-equal-than"
            placeholder="price"
            min="0"
            onChange={handlePriceLessEqualThanChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
