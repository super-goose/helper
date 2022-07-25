export type UUID = string

let uuid = 0;

export const generate = (prefix = ''): UUID => {
  return `${prefix}${uuid++}`;
}