import React from 'react'
import { Pagination } from 'antd';
import ImgComponent from './ImgComponent'

export default ({ imgs, onChange}) => {
    const total = imgs.length
    return (
        <div>
            <ImgComponent src="http://p1.xiaoshidi.net/2019/01/09153047180201.jpg" />
            <Pagination defaultCurrent={1} pageSize={1} total={total} onChange={onChange}/>
        </div>
    )
}