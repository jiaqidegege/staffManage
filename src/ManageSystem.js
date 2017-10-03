
import React from 'react';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import Staff from './STAFF.js';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            staff : new Staff(),
            staffDetail: null
        };
    }
   

    addStaffItem(item){
        this.setState({
            staff : this.state.staff.addStaffItem(item)
        })
    };

    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        });
    }
    
    filterStaff(id){
        this.setState({
           staff : this.state.staff.filterStaff(id)
        })
    }

    sortStaff(sortType){
        this.setState({
            staff : this.state.staff.sortStaff(sortType)
        })
    }

    removeStaff(key){
        this.setState({
            staff : this.state.staff.removeStaff(key)
        });
    }

    editDetail(item){
      this.setState({
        staff: this.state.staff.editStaffItem(item)
      });
    }

    closeDetail(item){
      this.setState({
        staffDetail: null
      });
    }

    detailStaffItem(key){
      this.setState({
         staffDetail: this.state.staff.staff.filter(item =>{
            return item.key==key
         })[0]
      })
    }
    render(){
      return (
        <div>
          <StaffHeader searchStaff={this.searchStaff.bind(this)} filterStaff={this.filterStaff.bind(this)} sortStaff={this.sortStaff.bind(this)}/>
          <StaffItemPanel removeStaff={this.removeStaff.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)} items={this.state.staff.staff} />
          <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
          <StaffDetail staffDetail={this.state.staffDetail} editDetail={this.editDetail.bind(this)} closeDetail={this.closeDetail.bind(this)}/>
        </div>
      );
    }
}

React.render(<App />, document.getElementById('app'))