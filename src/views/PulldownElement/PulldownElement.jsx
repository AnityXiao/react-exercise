import React from "react";
import './PulldownElement.scss'
export default class PulldownAnimation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="animation_container">
                <ul className="ul_list">
                    <li>
                        他强
                        <ul className="sub_menu">
                            <li>In My</li>
                            <li>Barren Land</li>
                            <li>You Are</li>
                            <li>My Only</li>
                            <li>White Rose</li>
                        </ul>
                    </li>
                    <li>
                        任他强
                        <ul className="sub_menu">
                            <li>又何必</li>
                            <li>在意</li>
                            <li>繁文缛节</li>
                            <li>在一起</li>
                            <li>就可以</li>
                        </ul>
                    </li>
                    <li>
                        清风
                        <ul className="sub_menu">
                            <li>喜欢海</li>
                            <li>喜欢花</li>
                            <li>喜欢日出</li>
                            <li>和日落</li>
                        </ul>
                    </li>
                    <li>
                        拂山岗
                        <ul className="sub_menu">
                            <li>山上</li>
                            <li>不仅有</li>
                            <li>花开</li>
                            <li>还有我那</li>
                            <li>浪漫的21岁</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}