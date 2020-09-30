import React from "react";

function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {};
  return <div></div>;
}

export default SearchForm;
