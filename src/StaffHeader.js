import React from 'react';
export default class StaffHeader extends React.Component{
    handlerSearch(){
        let bar = React.findDOMNode(this.refs['input']);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    handlerFilter(){
        let filter = React.findDOMNode(this.refs['filter']);
        let id = filter.options[filter.selectedIndex].value;
        this.props.filterStaff(id);
    }

    handlerSort(){
        let sort = React.findDOMNode(this.refs['sort']);
        let sortType = sort.options[sort.selectedIndex].value;
        this.props.sortStaff(sortType);
    }

    render(){
        return (
          <div>
              <h3 style={{'text-align':'center'}}>人员管理系统</h3>
              <table className="optHeader">
                <tbody>
                  <tr>
                    <td className="headerTd"><input onChange={this.handlerSearch.bind(this)} ref='input' type='text' placeholder='Search...' /></td>
                    <td className="headerTd">
                        <label for='idSelect'>人员筛选</label>
                        <select id='idSelect' ref='filter' onChange={this.handlerFilter.bind(this)}>
                            <option value=''>全部</option>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </td>
                    <td>
                        <label for='orderSelect'>排列方式</label>
                        <select id='orderSelect' ref="sort" onChange={this.handlerSort.bind(this)}>
                            <option value='0'>身份</option>
                            <option value='1'>年龄升</option>
                            <option value='2'>年龄降</option>
                        </select>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
    }
}