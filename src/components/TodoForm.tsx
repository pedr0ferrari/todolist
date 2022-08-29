import { Button, Flex, Input } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Flex gap={4} marginBottom="1vh">
      <Input
        id="todo-input"
        type="text"
        value={newTodo}
        placeholder="Add a todo"
        onChange={handleChange}
        w="50vh"
        borderColor="black"
        bgColor="white"
      />
      <Button
        id="todo-button"
        type="submit"
        onClick={handleSubmit}
        bgColor="grey"
        borderColor="black"
        variant="outline"
      >
        add
      </Button>
    </Flex>
  );
};

export default TodoForm;
