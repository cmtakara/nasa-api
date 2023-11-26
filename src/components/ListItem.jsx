import React from 'react'

function ListItem(props) {
  return (
    <div>
        ListItem
        <h5>{props.item.data[0].title}</h5>
    </div>
  )
}

export default ListItem