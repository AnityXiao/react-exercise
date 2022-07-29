import React from 'react';
import './DragElement.scss'
import withRouter from '../../utils/withRouter'


class DragElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            divX: 0,
            divY: 0,
        }
    }
    componentDidMount() {
        var self=this
        console.log(this.props.location.state)
        const disableDrag = document.querySelector('.drag-box')
        const disableDrap=document.querySelector('.drag-content')
        // 使用drag/drop实现拖拽
        disableDrag.ondragstart=function (e){ 
            console.log("开始拖拽")
            self.setState({
                mouseX:e.clientX,
                mouseY:e.clientY,
                divX:this.offsetLeft,
                divY:this.offsetTop},()=>{
                    console.log('state',self.state);
                })
            e.dataTransfer.setData('index',1023)
        }
        disableDrag.ondragend=(e) => {
            console.log('拖拽结束')
            let disX=e.clientX - self.state.mouseX
            let disY=e.clientY - self.state.mouseY
            disableDrag.style.left=disX+self.state.divX+'px'
            disableDrag.style.top=disY+self.state.divY+'px'
        }
        disableDrap.ondragenter=(e) => {
            e.preventDefault();
        }
        disableDrap.ondragover=(e) => {
            e.preventDefault();
        }
        disableDrap.ondrop=(e) => {
            // e.preventDefault();
            // e.stopPragation()
            console.log('在目标元素中拖放');
            console.log(e.dataTransfer.getData('index'));
        }

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
                <p className='title'>DRAG EFFECT ANIMATION</p>
                <div className='drag-box' draggable={true}>
                </div>
                <div className='drag-content'>
                </div>
            </div>
        )
    }
}
export default withRouter(DragElement)