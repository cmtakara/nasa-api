import React from 'react'

function ListItem(props) {
    return (
        <div>
            <img src={props.item.links?.[0].href} alt={props.item.data[0].title} />

            < div>
                <h5>{props.item.data[0].title}</h5>
                <p>Location: {props.item.data[0].location}</p>
                <p>Created: {props.item.data[0].date_created}</p>
            </div>

        </div>
    )
}

export default ListItem