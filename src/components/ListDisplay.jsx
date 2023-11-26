import React from 'react'
import ListItem from './ListItem'

function ListDisplay({ nasaList }) {
    const notLoaded = () => {
        return (
            <div>The image results from your search will display here</div>
          )
    }

    const loaded = () => {
        console.log(nasaList)
        return (
            <div>
                {
                    nasaList.map((item) => {
                        console.log(item);
                        return (
                            <ListItem 
                                key = {item.data[0].nasa_id}
                                item = {item}
                            />
                        )
                    })
                }
                </div>
        )
    }

  return nasaList ? loaded() : notLoaded();
}

export default ListDisplay