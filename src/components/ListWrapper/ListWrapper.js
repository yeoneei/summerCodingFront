import React from 'react';
import './ListWrapper.css'

const ListWrapper = ({children}) => {
    return (
        <div className="ListWrapper">
            {children}
        </div>
    );
};

export default ListWrapper;