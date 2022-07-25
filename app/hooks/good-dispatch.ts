import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useGoodDispatch = (actionCreator: (value: any) => PayloadAction<any>) => {
  const dispatch = useDispatch();
  return (value?: any) => {
    dispatch(actionCreator(value))
  }
};