import React, { useState } from "react";

const AddForm = ({ handleSubmit }) => {
  const [addCharacter, setAddCharacter] = useState({
    name: "",
    status: "",
    image: "",
    species: "",
  });
  const handleChange = (e) => {
    const newValue = e.target.value;
    const newName = e.target.name;
    setAddCharacter({ ...addCharacter, [newName]: newValue });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, addCharacter)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            name="status"
            id="status"
            type="text"
            placeholder="status"
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="species">Species</label>
          <input
            name="species"
            id="species"
            type="text"
            placeholder="species"
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            name="image"
            id="image"
            type="text"
            placeholder="image"
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-3" type="submit">
            Submit Character
          </button>
        </div>
      </form>
      <br/>
    </div>
  );
};

export default AddForm;
