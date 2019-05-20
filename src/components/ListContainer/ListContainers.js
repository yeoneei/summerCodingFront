import React, {Component} from 'react';
import { ListWrapper } from '../../components';
import {Navigator} from'../../components';
import {Board} from '../../components';
class ListContainer extends Component {
    render() {
        return (
            <ListWrapper>
                <Navigator></Navigator>
                <br/>
                <br/>
                <Board></Board>
            </ListWrapper>
        );
    }
}

export default ListContainer;