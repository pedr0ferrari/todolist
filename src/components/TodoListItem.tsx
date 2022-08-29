import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <Flex gap={2}>
      <Text>{todo.complete}</Text>
      <Checkbox
        size="lg"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        borderColor="white"
        colorScheme="green"
      />
      <Text fontSize="xl" fontWeight={"medium"}>
        {todo.text}
      </Text>
    </Flex>
  );
};
