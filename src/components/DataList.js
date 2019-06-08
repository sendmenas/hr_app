import React from 'react'

function DataList(props) {
    return (
        <section>
            <picture>
                <img/>
            </picture>
            <dl>
                <dt>Name:</dt>
                <dd>{props.data.name}</dd>
                <dt>BOD:</dt>
                <dd>{props.data.bod}</dd>
            </dl>
            <label htmlFor="hired">Hired:</label>
            <input
                id="hired"
                type="checkbox"
                selected={props.data.hired}
                onInput={props.handleCheck}
            />
        </section>
    )
}

export default DataList