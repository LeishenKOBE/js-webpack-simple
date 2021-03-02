// 引入组件
import Button from "./Button";
// 组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
Button.install = Vue => Vue.component(Button.name, Button); //注册组件

export default Button;
