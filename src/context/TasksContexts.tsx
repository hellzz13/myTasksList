import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  clearTasks(): void;
}

const tasksData = '@MyTasks:Tasks';

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TaskProvider: React.FC<IProps> = ({children}) => {
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    async function loadTasks() {
      const tasksList = await AsyncStorage.getItem(tasksData);
      if (tasksList) {
        setData(JSON.parse(tasksList));
      }
    }
    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (err) {
      throw new Error(err as string);
    }
  };

  const clearTasks = async () => {
    await AsyncStorage.removeItem(tasksData);
    setData([]);
  };

  return (
    // tasks recebe o valor de data como default
    <TasksContext.Provider value={{tasks: data, addTask, clearTasks}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = React.useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em TasksProvider');
  }

  return context;
}
