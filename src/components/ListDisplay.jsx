import React from 'react'

function ListDisplay({ nasaList }) {
    const notLoaded = () => {
        return (
            <div>The image results from your search will display here</div>
          )
    }

    const loaded = () => {
        console.log(nasaList)
        return (
            <div>{nasaList[0].href}</div>
        )
    }

  return nasaList ? loaded() : notLoaded();
}

export default ListDisplay