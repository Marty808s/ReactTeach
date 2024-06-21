import React from 'react';
import getData from '../../backend/data';

function Content(){
    var data = getData();
    if (data){
        return(
            <main className='container-xl mt-5 mb-5'>
                <p>{data}</p>
            </main>
        )
    }
    else{
        return (
            <main className='container-xl mt-5 mb-5'>
                <p>Nemám data z API</p>
            </main>
        )
    }
}
export default Content;