import React, { useState } from "react";

const AddForm = ({ handleSubmit }) => {
  //   const [addCharacter, setAddCharacter] = useState({});
  //   const handleNewCharacter = (event) => {
  //     setAddCharacter({
  //       [event.target.name]: event.target.value,
  //       ...addCharacter,
  //     });
  //     console.log(addCharacter);
  //   };
  //   return (
  //     <div>
  //       <h3>Form to add new Character</h3>
  //       <form onSubmit={(event) => handleSubmit(event, addCharacter)}>
  //         <label htmlFor="name">Name</label>
  //         <input
  //           type="text"
  //           name="name"
  //           placeholder="Name"
  //           onChange={handleNewCharacter}
  //         />
  //         <label for="formGroupExampleInput">Image</label>
  //         {/* <input type="text" name="image" placeholder="Image src" onChange={handleNewCharacter} /> */}
  //         <input
  //           name="image"
  //           type="text"
  //           placeholder="image"
  //           onChange={handleNewCharacter}
  //         />
  //         <label htmlFor="status">Status</label>
  //         <input
  //           type="text"
  //           name="status"
  //           placeholder="Status"
  //           onChange={handleNewCharacter}
  //         />
  //         <button type="submit">Add Character</button>
  //       </form>
  //     </div>
  //   );
  // };
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
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <br />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Status</label>
          <input
            name="status"
            id="status"
            type="text"
            placeholder="status"
            onChange={handleChange}
          />
          <br />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Species</label>
          <input
            name="species"
            id="species"
            type="text"
            placeholder="species"
            onChange={handleChange}
          />
          <br />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Image</label>
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
