import * as Types from '../constant/actionType';
import callApi from './../ultils/apiCaller';
// Get danh sách
export const actGetAllCategoryRequest = () => {
    return (dispatch) => {
        callApi('Category/getall', 'GET', null).then(res => {
            //     this.props.getAllCategories(res.data);
            dispatch(actGetAllCategory(res.data));
        })
    }
}
export const actGetAllCategory = (categories) => {
    return {
        type: Types.GetAllCategories,
        categories
    }
}
// Thêm 
export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return callApi('Category/create', 'POST', category).then(res => {
            dispatch(actAddCategory(res.data));
        })
    }
}
export const actAddCategory = (category) => {
    return {
        type: Types.AddCategory,
        category
    }
}

// Xóa
export const actDeleteCategoryRequest = (id) => {
    debugger;
    return (dispatch) => {
        callApi(`Category/delete/?id=${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteCategory(id));
        })
    }
}
export const actDeleteCategory = (id) => {
    return {
        type: Types.DeleteCategory,
        id
    }
}