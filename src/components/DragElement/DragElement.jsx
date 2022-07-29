import React from 'react';
import './DragElement.scss'
import withRouter from '../../utils/withRouter'


class DragElement extends React.Component {
    constructor(props) {
        super(props);
        //单个拖拽
        // this.state = {
        //     mouseX: 0,
        //     mouseY: 0,
        //     divX: 0,
        //     divY: 0,
        // }
        //多个拖拽
        this.state = {
            positions: []
        }
    }
    componentDidMount() {
        for (let i = 0; i < this.props.mess.length; i++) {
            let obj = {
                mouseX: 0,
                mouseY: 0,
                divX: 0,
                divY: 0,
            }
            this.setState((state) => {
                state.positions.push(obj)
            })
        }
        var self = this
        let disableDrag =Array.from(document.getElementsByClassName('drag-box'))
        // const disableDrap=document.querySelector('.drag-content')
        // 使用drag/drop实现拖拽

        //单个
        // disableDrag.ondragstart = function (e) {
        //     self.setState({
        //         mouseX: e.clientX,
        //         mouseY: e.clientY,
        //         divX: this.offsetLeft,
        //         divY: this.offsetTop
        //     }, () => {
        //         console.log('state', self.state);
        //     })
        //     e.dataTransfer.setData('index', 1023)
        // }
        // disableDrag.ondragend = (e) => {
        //     let disX = e.clientX - self.state.mouseX
        //     let disY = e.clientY - self.state.mouseY
        //     disableDrag.style.position='absolute'
        //     disableDrag.style.left = disX + self.state.divX + 'px'
        //     disableDrag.style.top = disY + self.state.divY + 'px'
        // }
        //放置被拖拽物的容器的事件
        // disableDrap.ondragenter=(e) => {
        //     e.preventDefault();
        // }
        // disableDrap.ondragover=(e) => {
        //     e.preventDefault();
        // }
        // disableDrap.ondrop=(e) => {
        //     console.log(e.dataTransfer.getData('index'));
        // }

        //多个
        disableDrag.forEach((item, index) => {
            item.ondragstart = function (e) {
                self.setState((state) => {
                    state.positions[index] = {
                        mouseX: e.clientX,
                        mouseY: e.clientY,
                        divX: this.offsetLeft,
                        divY: this.offsetTop
                    }
                })
                e.dataTransfer.setData('info', JSON.stringify(self.props.mess[index]))
                self.props.getM(self.props.mess[index])
            }
            item.ondragend = (e) => {
                let disX = e.clientX - self.state.positions[index].mouseX
                let disY = e.clientY - self.state.positions[index].mouseY
                item.style.position = 'absolute'
                item.style.left = disX + self.state.positions[index].divX + 'px'
                item.style.top = disY + self.state.positions[index].divY + 'px'
            }
        });

        // 使用鼠标事件实现拖拽
        // let divX=0,divY=0,mouseX=0,mouseY=0;
        // disableDrag.onmousedown=function(e){
        //     //获取盒子距离浏览器可视窗口的水平距离和垂直距离
        //     divX=this.offsetLeft
        //     divY=this.offsetTop
        //     mouseX=e.clientX
        //     mouseY=e.clientY
        //     document.onmousemove=function(e){
        //         let disX=e.clientX - mouseX
        //         let disY=e.clientY - mouseY
        //         disableDrag.style.left=disX+divX+"px"
        //         disableDrag.style.top=disY+divY+'px'
        //         return false
        //     }
        //     document.onmouseup=function(e){
        //         document.onmousemove=null
        //         document.onmouseup=null
        //     }
        // }

    }
    render() {
        return (
            <div className="drag-element">
                {/* <div className='drag-box' draggable={true}>
                </div>
                <div className='drag-box' draggable={true}>
                </div>
                <div className='drag-box' draggable={true}>
                </div> */}
                {
                    this.props.mess.map((item)=>{
                        return(
                            <div className='drag-box' draggable={item.draggable} key={item.id} data-id={item.id}>
                                {item.motto}
                            </div>
                        )
                    })
                }
                {/* <div className='drag-content'>
                </div> */}
            </div>
        )
    }
}
export default withRouter(DragElement)