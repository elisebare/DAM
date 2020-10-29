/**
 * ************************************
 *
 * @module  Uploads 
 * @author elisebare
 * @date
 * @description stateful component that allows users to submit files to db
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";



const mapStateToProps = (state) => {
  
  return {
    // add pertinent state here
    level: state.users.level,
    file: state.files.file,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fileUploaded: (file) => dispatch(actions.fileUploaded(file)),
  fetchPostFile: (data) => dispatch(actions.fetchPostFile(data))
});

class Uploads extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.level === 'admin') {

    return (
      <div>
         <input type="file" name="file" onChange={(e) => {
           this.props.fileUploaded(e.target.files[0])
         }

         } />
         <button type="button" className="btn btn-success btn-block" onClick={ () => {
           const data = new FormData();
           data.append('file', this.props.file);
           this.props.fetchPostFile(data);
         }
         }>Upload</button> 
      </div>
      );
    }
  
    else {
      return (
        <></>
      );
    }  
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Uploads);
