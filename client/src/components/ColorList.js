import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(initialColor);
  const {id} = useParams();
  const {push, go} = useHistory();

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth().put(`/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(response => {
      setEditing(false)
      console.log(response.data)
      updateColors(colors.map((item) => {
        return item.id === colorToEdit.id ? colorToEdit: item;
      }));
      // go(0)
    })
    .catch((error) => console.log(error))
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth().delete(`/api/colors/${color.id}`)
    .then(response => {
      console.log(response.data)
      go(0)
    })
  };

  const handleNewColor = (event) => {
    setNewColor({
      ...newColor,
      [event.target.name]: event.target.value
    })
  }

  const addNewColor = (event) => {
    axiosWithAuth().post("/api/colors", newColor)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      <form onSubmit={addNewColor}>
        <label> color name:
          <input 
            onChange={handleNewColor}
            name="color"
            value={newColor.color}
          /> 
        </label>
        <label> hex code:
          <input 
              onChange={e =>
                setNewColor({
                  ...newColor,
                  code: { hex: e.target.value }
                })
              }
              name="hex"
              value={newColor.code.hex}
            /> 
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ColorList;
