import { useState } from 'react';

function ListGroup() {
    const [items] = useState(['První', 'Druhý', 'Třetí', 'Čtvrt']);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Event handler
    const handleClick = (index) => {
        setSelectedIndex(index);
    }

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        key={item} 
                        onClick={() => handleClick(index)} 
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
