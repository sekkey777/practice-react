import { getItems, getItem } from "../functions/items"

const GetItemCopmonent = () => {
  const items = getItems()
  const item = getItem(2)

  return (
    <>
      <ul>
        { items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      { item.name }
    </>
  )
}

export default GetItemCopmonent