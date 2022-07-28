import React from 'react';
import './AccordingElement.scss'
import withRouter from '../../utils/withRouter'
import {handleSearch} from '../../utils/common'
class AccordingElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        console.log(this.props.location.state.motto,this.props.params.name,handleSearch(this.props.location.search))
    }
    render() {
        return (
            <div className='according-container'>
                <ul className='according-box'>
                    <li>
                        <p className='title'>他强任他强</p>
                        <div>content-one</div>
                    </li>
                    <li>
                        <p className='title'>清风拂山岗</p>
                        <div>content-two</div>
                    </li>
                    <li>
                        <p className='title'>他横任他横</p>
                        <div>content-three</div>
                    </li>
                    <li>
                        <p className='title'>明月照大江</p>
                        <div>content-four</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(AccordingElement)