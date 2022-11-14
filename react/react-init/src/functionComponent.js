// 함수형!!
// 무조건 render 함수 이용
// 클래스형에서는 this로 
FunctionComponent.defaultProps = {
    name : '기본이름',
    location : '기본위치'
}

function FunctionComponent (props) {
    return (
        <div>
            {props.children}
            <h2>ClassComponent - function</h2>
            <h5>name : {props.name}</h5>
            <h5>location : {props.location}</h5>
        </div>
    )
}

ClassComponent.PropTypes = {
    name : PropTypes.string
}

export default FunctionComponent;