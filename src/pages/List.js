import React from 'react';
import {connect} from 'dva';


const namespace = "list";

//说明：第一个回调函数，作用：将page层和model层进行链接，返回modle中的数据
//并且，将返回的数据，绑定到this.props

//接收第二个函数，这个函数的作用：将定义的函数绑定到this.props中，可以调用model层中定于的函数
@connect((state) => {
    return{
        dataList : state[namespace].data,
        maxNum : state[namespace].maxNum
    }
}, (dispatch) => { //dispatch的作用：可以调用model层定义的函数
        return { //将返回的函数，绑定到this.props中
            addNewData : function(){
                dispatch({
                    type : namespace + "/addNewData"
                });
            },
            initData : () => {
                dispatch({
                    type : namespace + "/initData"
                });
            }
        }
})
class List extends React.Component{

    componentDidMount(){
        //初始化操作
        this.props.initData();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.dataList.map((value,index)=>{
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button onClick={() => {
                    this.props.addNewData();
                }}>click</button>
            </div>
        );
    }
}

export default List;
