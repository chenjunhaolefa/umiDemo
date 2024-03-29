import React from 'react';
import { Table, Divider, Tag , Pagination} from 'antd';
import { connect } from 'dva';


const { Column } = Table;

const namespace = 'userList';

const data = [{
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市',
    tags: ['程序员', '帅气'],
},{
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市',
    tags: ['测试'],
},{
    key: '3',
    name: '王五',
    age: 32,
    address: '杭州市',
    tags:['高富帅','富二代'],
}];

@connect((state) =>{
    return {
        data: state[namespace].list
    }
},(dispatch) => {
    return {
        initData : () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
})
class UserList extends React.Component{

    componentDidMount(){
        this.props.initData();
    }

    render(){
        return(
            <div>
                <Table dataSource={this.props.data} pagination={{position:"bottom",total:500,pageSize:10,defaultCurrent:1}}>
                    <Column
                        title="姓名"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="标签"
                        dataIndex="tags"
                        key="name1"
                        render={tags =>(
                            <span>
                                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                            </span>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="javascript:;">编辑</a>
                                <Divider type="vertical"/>
                                <a href="javascript:;">删除</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default UserList;