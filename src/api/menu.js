import request from './utils/request'
export default {
  getMenu (params) {
    request.get('/menu/getMenuList', params)
  }
}
