const items = [
  { id: 1, name: "aaa"},
  { id: 2, name: "bbb"},
  { id: 3, name: "ccc"}
]

export const getItems = () => items
export const getItem = (id) => {
  return items.find((item) => id === item.id)
}