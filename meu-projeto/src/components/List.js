import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Uno" ano_lancamento={1964}/>
                <Item/>
            </ul>        
        </>
    )
}

export default List