import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../actions';

const initialTerm = {
  search: ''
};

const GifForm = ({ dispatch }) => {
  const [term, setTerm] = useState(initialTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm({ ...term, search: '' });
    dispatch(changeSearch(term.search));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTerm({ ...term, search: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={term.search}
        placeholder="Search for..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(GifForm);