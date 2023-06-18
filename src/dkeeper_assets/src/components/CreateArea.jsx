import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isclicked, setclicked] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function submitNote(event) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  function handleclick(){
    setclicked(true);
  }
  return (
    <div>
      <form className="create-note">
        {isclicked && <Zoom in={isclicked}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        </Zoom>}
        <textarea
          onChange={handleChange}
          onClick={handleclick}
          name="content"
          placeholder="Take a note..."
          rows={isclicked?3:1}
          value={note.content}
        />
        <Zoom in={isclicked}>
        <Fab aria-label="add" onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
