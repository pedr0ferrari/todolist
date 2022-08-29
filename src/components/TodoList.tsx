import { Flex, List } from "@chakra-ui/react";
import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <Flex padding={3} zIndex={1}>
      <List color="white">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </List>
    </Flex>
  );
};
