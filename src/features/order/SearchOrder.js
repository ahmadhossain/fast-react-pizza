import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, seQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    seQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => seQuery(e.target.value)}
        value={query}
        placeholder="Sreach order #"
      />
    </form>
  );
};

export default SearchOrder;
