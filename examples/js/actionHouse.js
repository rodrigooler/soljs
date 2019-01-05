const actionHouse = {
  item: [
    {
      itemName: '',
      basePrice: 0,
      itemId: 0,
    },
  ],
}

const set = _item => (item = _item)
const get = () => item
const _generateItemId = () => {}
const _createItem = _item => actionHouse.item.push(_item)
