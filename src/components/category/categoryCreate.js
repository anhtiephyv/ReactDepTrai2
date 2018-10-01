import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddCategoryRequest } from './../../action/index'
class CategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    };
    inputOnChange = (e, key) => {
        debugger;
        let category = this.state.category;
        category[key] = e.target.value;
        this.setState({ category })
    };
    createData = () => {
  //      this.props.onAddCategory(this.state.category);

    };
    render() {

        var { category } = this.state;
        return (
            <div className="modal fade" id="largeModal" tabIndex={-1} role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="largeModalLabel">Large Modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" encType="multipart/form-data" className="form-horizontal">

                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="text-input" className=" form-control-label">Tên loại sản phẩm <span style={{ color: 'red' }}>(*)</span></label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input type="text"
                                            id="text-input"
                                            name="CategoryName"
                                            placeholder="Tên loại sản phẩm"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'CategoryName')}
                                        />
                                        <small className="form-text text-muted">Nhập tên loại sản phẩm</small>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="email-input" className=" form-control-label">Loại cha</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input
                                            type="email"
                                            id="email-input"
                                            name="ParentName"
                                            placeholder="Enter Email"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'ParentCategory')} />
                                        <small className="help-block form-text">Please enter your email</small>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="text-sort" className=" form-control-label">Sắp xếp <span style={{ color: 'red' }}>(*)</span></label>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <input
                                            type="number"
                                            id="text-sort"
                                            name="DisplayOrder"
                                            placeholder="Sắp xếp"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'DisplayOrder')} />

                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="textarea-input" className=" form-control-label">Mô tả</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <textarea
                                            name="Description"
                                            id="textarea-input" rows={9}
                                            placeholder="Content..."
                                            className="form-control"
                                            defaultValue={""}
                                            onChange={(e) => this.inputOnChange(e, 'Description')} />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="select" className=" form-control-label">Level</label>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <select
                                            name="categoryLevel"
                                            id="select"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'categoryLevel')}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={() => this.createData()}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddCategory: (category) => {
            dispatch(actAddCategoryRequest(category))
        },
        // onDeleteCategory: (id) => {
        //     dispatch(actDeleteCategoryRequest(id))
        // }
    }
}
export default connect(null, mapDispatchToProps)(CategoryCreate);
//export default CategoryCreate;


