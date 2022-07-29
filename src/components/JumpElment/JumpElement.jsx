import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './JumpElement.scss'
import {Divider} from 'antd'
const JumpElement = () => {
    let navigate = useNavigate()
    function jumpAccording() {
        // navigate('/according/anity?id=001023', {
        //     state: { motto: "山上不仅有花开，还有我那浪漫的21岁" },
        //     replace: true
        // })
        // navigate('/other')
        navigate('/drag',{
            state:{motto:'喜欢山喜欢海 喜欢日出和你'},
            replace:true
        })
    }
    return (
        <div className="jump-element">
            <Divider orientation="center" orientationMargin={50}>
            "In My Barren Land, You Are My Only White Rose"
            </Divider>
            <Divider orientation="center" orientationMargin={50}>
            "在这万物荒芜的阵痛世界，你是我心尖上一尘不染的白色玫瑰"
            </Divider>
            <p>路由跳转组件</p>
            <Button type="primary" onClick={jumpAccording}>
                Click me!
            </Button>
        </div>
    )
}
export default JumpElement