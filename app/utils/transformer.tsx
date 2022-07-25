import { ListItem } from "../modules/list/slice";

export interface SectionListData {
  title: string,
  data: Array<ListItem>,
}

// export const listStateToSectionList = (list: Array<ListItem>): Array<SectionListData> => {
//   const dataObject = {};

//   list.forEach((item: ListItem) => {
//     dataObject[item.store as keyof typeof dataObject] = dataObject[item.store] || [];
//     acc[cur.store].push(cur);
//     return acc
//   }, {});
//   return Object.keys(dataObject).map((store) => {
//     return {
//       title: store,
//       data: dataObject[store],
//     };
//   });
// }