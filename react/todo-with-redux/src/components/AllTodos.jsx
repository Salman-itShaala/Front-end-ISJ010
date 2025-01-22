import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo, toggleComplete, updateTodo } from "../slices/todoSlice";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AllTodos = () => {
  const todoState = useSelector((state) => state.todo);

  return (
    <>
      <p className="text-2xl font-bold text-center  py-8">All Todos</p>
      <div className="grid grid-cols-4 gap-4 py-8">
        {todoState.todos.map((todo, index) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
};

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newTodoTitle, setNewTodoTitle] = useState(todo.title);

  return (
    <Card>
      <CardActionArea
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
        }}
      >
        <CardContent sx={{ height: "100%" }}>
          <Typography variant="h5" component="div">
            {todo.title}
          </Typography>
          <Typography
            variant="body2"
            color={`${todo.isComplete ? "success" : "error"}`}
          >
            <Button onClick={() => dispatch(toggleComplete(todo.id))}>
              Toggle complete
            </Button>
            {todo.isComplete ? "Completed" : "Incomplete"}
          </Typography>
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>
            <DeleteIcon color="error" />
          </Button>

          <Button onClick={handleClickOpen}>Edit Todo</Button>

          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();

                // dispatch
                dispatch(updateTodo({ id: todo.id, title: newTodoTitle }));
                handleClose();
              },
            }}
          >
            <DialogTitle>Edit todo</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText> */}
              <TextField
                autoFocus
                required
                margin="dense"
                label="Edit todo"
                type="text"
                fullWidth
                variant="standard"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Edit</Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AllTodos;
