<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">MaliciousTraffic</h5>
            <h3 class="card-title">基于强化学习的异常行为检测</h3>
          </template>

          <div class="typography-line text-left">
            <span>上传文件</span>
              <input type="file" ref="file" @change="upload"/>
          </div>
          <div class="typography-line text-left" style="margin-top: 20px;">
            <span>Result</span>
            <blockquote>
              <p class="blockquote blockquote-primary">
                {{resultInfo}}
              </p>
            </blockquote>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";

import axios from "axios"

export default {
  components: {
    Card
  },
  mounted() {

  },
  data() {
    return {
      resultInfo: "待上传文件（返回的predict为0到9，需要鲁婷婷确认）"
    }
  },
  methods: {
    upload() {
      let formData = new FormData();
      formData.append('file', this.$refs.file.files[0])
      axios.post('/api/malicious_traffic', formData, {
        'Content-Type': 'multipart/form-data'
      }).then(res => {
        this.resultInfo = res.data;
      })
    }
  },
  watch: {

  }
}
</script>
<style>
</style>
