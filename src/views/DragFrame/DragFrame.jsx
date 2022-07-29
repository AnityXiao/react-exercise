import React from 'react';
import './DragFrame.scss'
import DragElement from '../../components/DragElement/DragElement';

class DragFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //选择数据信息
            dragMess: [
                {
                    id:'01',
                    motto: '山上不仅有花开，还有我那浪漫的21岁',
                    draggable: true
                }, {
                    id:'02',
                    motto: '喜欢海 喜欢花 喜欢日出和日落',
                    draggable: true
                }, {
                    id:'03',
                    motto: '浪漫的年纪不要活得太过于无趣',
                    draggable: true
                }, {
                    id:'04',
                    motto: '浪漫不一定非要一束花',
                    draggable: true
                }, {
                    id:'05',
                    motto: '你愿意听我讲一堆废话也算是',
                    draggable: true
                }, {
                    id:'06',
                    motto: '你愿意听我讲一堆废话也算是',
                    draggable: true
                }, {
                    id:'07',
                    motto: '你愿意听我讲一堆废话也算是',
                    draggable: true
                },{
                    id:'08',
                    motto:'In My Barren Land, You Are My Only White Rose',
                    draggable:false
                },{
                    id:'09',
                    motto:'在这万物荒芜的阵痛世界，你是我心尖上一尘不染的白色玫瑰',
                    draggable: true,
                }
            ],
            //结果数据信息
            results:[],
            //当前操作的选择数据
            doing:{},
        }
    }
    //使用箭头函数就不用纠结this指向问题
    getResult=(info)=> {
        console.log('子组件传递过来的数据', info)
        this.setState((state)=>{
            state.doing=info
        })
    }
    componentDidMount() {
        var self=this
        let dropBox = document.querySelector('.drag-result')
        dropBox.ondragenter = (e) => {
            e.preventDefault();
        }
        dropBox.ondragover = (e) => {
            e.preventDefault();
        }
        dropBox.ondragleave = (e) => {
            e.preventDefault();
            let newR=self.state.results.filter((item,index) => {
                return item.id !== self.state.doing.id
            });
            self.setState((state)=>{
                state.results=newR
            })
        }
        dropBox.ondrop = (e) => {
            let info=JSON.parse(e.dataTransfer.getData('info'))
            this.setState((state)=>{
                state.results.push(info)
            })
        }
    }
    render() {
        return (
            <div className="drag-container">
                <div className="drag-title">
                    DRAG EFFECT ANIMATION
                </div>
                <div className="drag-content">
                    <div className="drag-left">
                        <p>CHOOSE</p>
                        <div className="drag-choose">
                            <DragElement mess={this.state.dragMess} getM={this.getResult} />
                        </div>
                    </div>
                    <div className="drag-right">
                        <p>RESULT</p>
                        <div className="drag-result">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DragFrame