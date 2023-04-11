import axiosInstance from "./axiosInstance";
import React from 'react'

interface Update {
  check?: boolean;
  value?: string;
}

export const updateTodo = async (id: number, update: Update) => {
  const todoId = id;
  axiosInstance.patch(`todolist/${todoId}`, update);
}