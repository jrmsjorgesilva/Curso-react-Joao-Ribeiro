import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAction, updateAction } from "../Redux/Actions/TodoActions"
const STATUS = ["Pendente", "Completa"];
const INITIAL_TODO = { title: "", date: "", status: "" };

const TodoForm = ({ open, handleClose, todo }) => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INITIAL_TODO);
  const { title, date, status } = formData;

  useEffect(() => {
    if (todo) {
      setFormData(todo);
    } else {
      setFormData(INITIAL_TODO);
    }
  }, [todo]);

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
  };

  const resetFormData = () => {
    setFormData(INITIAL_TODO);
  };

  const handleSubmit = () => {
    dispatch(addAction({ id: Math.random(), ...formData }));
    resetFormData();
    handleClose();
  };

  const hanldeUpdate = () => {
    dispatch(updateAction(formData));
    resetFormData();
    handleClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{todo ? "Atualizar Item Selecionado" : "Adicionar Item à Lista"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha o formulário para criar um novo item da lista
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titulo"
            value={title}
            fullWidth
            variant="standard"
            required
            onChange={(e) => handleInputChange(e, "title")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            value={date}
            type="date"
            label="Data"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            required
            onChange={(e) => handleInputChange(e, "date")}
          />
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={status}
              onChange={(e) => handleInputChange(e, "status")}
              label="Status"
            >
              <MenuItem value="">
                <em>Nenhum(a)</em>
              </MenuItem>
              {STATUS.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        {todo ? (
          <Button onClick={hanldeUpdate}>Atualizar</Button>
        ) : (
          <Button onClick={handleSubmit}>Salvar</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default TodoForm;
