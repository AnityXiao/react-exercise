### 项目点记录
#### react-router@6相对于react-router@5的变化
1. <Switch/>替换成<Routes/>
    - react-router@5之前是支持<Switch />
    - 从react-router@6之后将<Switch />替换成了<Routes/>
    - <Routes/>和<Switch />的用法一样

2. <Redirect/> 替换成 <Nacigate/>
    - 用法已改变

3. 路由跳转的useHistory 替换成 useNavigate
    - 用法差不多
    - history.push() => navigate()
    - history.replace => navigate('/according',{replace:true})

4. <Route/>接收组件由 component/render 替换成 element
5. 类组件中不能使用相关hooks

