import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    status: "",
  });

  const { title, status } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-3">
      <form onSubmit={() => alert(JSON.stringify(form))}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div class="form-group">
          <label for="Status"></label>
          <select
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
            class="form-control"
          >
            <option value="" holder>
              Select Status
            </option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
