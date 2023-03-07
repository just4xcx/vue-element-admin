const Mock = require('mockjs')
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: [{ roleId: 1, roleName: 'admin' }],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: [{ roleId: 1000, roleName: 'editor' }],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        result: 0,
        payload: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        result: 0,
        payload: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'get',
    response: _ => {
      return {
        result: 0,
        payload: 'success'
      }
    }
  },

  {
    url: '/user/roles',
    type: 'get',
    response: _ => {
      return {
        result: 0,
        payload: [
          {
            roleId: 1,
            roleName: 'admin'
          },
          {
            roleId: 1000,
            roleName: 'editor'
          }
        ]
      }
    }
  },

  {
    url: '/user/get_users',
    type: 'get',
    response: _ => {
      return {
        result: 0,
        payload: Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-100': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'name': '@cname',
            'dt': '@datetime(\'yyyy-MM-dd HH:mm:ss\')',
            'remark': '@csentence(10, 36)'
          }]
        })
      }
    }
  },

  {
    url: '/user/get_domains',
    type: 'get',
    response: _ => {
      return {
        result: 0,
        payload: Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-100': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'name': '@county',
            'dt': '@datetime(\'yyyy-MM-dd HH:mm:ss\')',
            'remark': '@csentence(12, 36)'
          }]
        })
      }
    }
  }
]
