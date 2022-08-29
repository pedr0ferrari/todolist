import * as React from "react";
import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: AddTodo = (newTodo: string) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <>
      <Box zIndex={100} bgGradient="linear(to-t, #0d0d0c, #69695b)">
        <Container as="main" minHeight="100vh" h="100%" w="100%" zIndex={1}>
          <Flex direction="column">
            <Heading
              padding={4}
              zIndex={1}
              alignSelf="center"
              color="white"
              marginBottom="3vh"
            >
              Todo app
            </Heading>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default App;
