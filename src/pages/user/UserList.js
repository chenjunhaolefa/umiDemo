import React from 'react'
import Column from 'antd/lib/table/Column';
import { Table, Divider, Tag } from 'antd';

const data = [{
    key: '1',
    name:'张三',
    age:32,
    address:'上海市',
    tags:['程序员','帅气'],
},{
    key: '2',
    name:'李四',
    age: 42,
    address:'北京市',
    tags:['测试'],
},{
    key:'3',
    name:'王五',
    age: 32,
    address: '杭州市',
    tags:['高富帅','富二代'],
}];

class UserList extends React.Component{
    render(){
        return(
            <div>
                <Table dataSource={data} pagination={{pagination:"bottom",total:500,pageSize:10,defaultCurrent:3}}>
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
                        key="name"
                    />
                </Table>
            </div>
        );
    }
}

export default UserList;