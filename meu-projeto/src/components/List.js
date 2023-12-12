import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari"/>
                <Item marca="Uno"/>
            </ul>        
        </>
    )
}

export default List