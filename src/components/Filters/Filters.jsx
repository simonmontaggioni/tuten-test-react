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
  const handleAddressChange = (e) => {
    const addressFilterValue = e.target.value;
    props.handleAddressFiltersChange(addressFilterValue);
  };
  return (
    <div className="filters-container">
      <fieldset className="id-filter-wrapper">
        <legend>Filtros por ID</legend>
        <div className="input-wrapper id-filter-number">
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
        <div className="input-wrapper id-filter-greater-equal-than">
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
        <div className="input-wrapper id-filter-less-equal-than">
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
      </fieldset>
      <fieldset className="price-filter-wrapper">
        <legend>Filtros por precio</legend>
        <div className="input-wrapper price-filter-number">
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
        <div className="input-wrapper price-filter-greater-equal-than">
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
        <div className="input-wrapper price-filter-less-equal-than">
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
      </fieldset>
      <fieldset className="address-filter-wrapper">
        <legend>Filtrar por dirrección</legend>
        <div className="input-wrapper address-filter">
          <label htmlFor="address-filter">Address</label>
          <input
            type="text"
            name="address-filter"
            id="address-filter"
            placeholder="address"
            onChange={handleAddressChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Filters;
