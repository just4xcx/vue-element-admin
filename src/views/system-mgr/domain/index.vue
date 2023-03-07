<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="域管理" />
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" min-width="90" />
      <el-table-column prop="name" label="名称" min-width="120" />
      <el-table-column prop="remark" label="备注" min-width="300" />
      <el-table-column prop="dt" label="日期时间" min-width="160" />
    </el-table>
  </div>
</template>

<script>
import { getDomains } from '../../../api/user'

export default {
  name: 'Users',
  components: {},
  data() {
    return {
      users: []
    }
  },
  computed: {
  },
  created() {
    this.getDomainsFromRemote()
  },
  methods: {
    getDomainsFromRemote() {
      getDomains().then(data => {
        console.log(`getUsers response: ${JSON.stringify(data)}`)
        this.users = data.payload.list
      })
    }
  }
}
</script>
