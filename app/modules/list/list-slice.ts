import { createSlice } from '@reduxjs/toolkit'
import { generate as uuid } from '../../utils/uuid'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { UUID } from '../../utils/uuid'
import type { SectionListData } from 'react-native'

// Define a type for the slice state
export interface ListItem {
  id: UUID,
  item: string,
  done: boolean,
};

export interface ListItemIncoming {
  store: string,
  item: string,
};

export interface ListState {
  [key: string]: Array<ListItem>
}

// Define the initial state using that type
const initialState: ListState = {
  'aldi': [
    { id: uuid(), item: 'milk', done: false },
    { id: uuid(), item: 'eggs', done: false },
  ],
  'hyvee': [
    { id: uuid(), item: 'ice', done: false },
  ],
}

export const counterSlice = createSlice({
  name: 'list',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ListItemIncoming>) => {
      const { store, item } = payload;
      if (item) {
        state[store] = state[store] || [];
        state[store].push({ item, id: uuid(), done: false });
      }
    },
    // deleteItem: (state, action: PayloadAction<UUID>) => {
    //   state.value = state.value.filter((item: ListItem) => item.id !== action.payload);
    // },
    toggleDone: (state, { payload }: PayloadAction<{ store: string, id: UUID }>) => {
      const { store, id } = payload;
      state[store] = state[store].map((item: ListItem) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const {
  addItem,
  // deleteItem,
  toggleDone,
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export const getList = (state: RootState): SectionListData<ListItem, string>[] => {
  const list = [] as SectionListData<ListItem, string>[]
  Object.keys(state.list).forEach((key: string) => {
    list.push({
      title: key,
      data: state.list[key] as ListItem[],
    } as unknown as SectionListData<ListItem, string>);
  });
  return list
}
export default counterSlice.reducer