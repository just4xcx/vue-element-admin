<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="角色管理" />
    <div v-for="(item, idx) in roles" :key="idx">{{ item.roleId }} - {{ item.roleName }}</div>
  </div>
</template>

<script>
import { getRoles } from '../../../api/user'

export default {
  name: 'Roles',
  components: {},
  data() {
    return {
      roles: []
    }
  },
  computed: {
  },
  created() {
    this.getUserFromRemote()
  },
  methods: {
    getUserFromRemote() {
      getRoles().then(data => {
        console.log(`getRoles response: ${JSON.stringify(data)}`)
        this.roles = data.payload
      })
    }
  }
}
</script>
