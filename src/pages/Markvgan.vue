<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">Markvgan</h5>
            <h3 class="card-title">基于马尔可夫图和GAN的加密流量检测</h3>
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
      resultInfo: "待上传文件（返回的predict为0到9，需要LTT确认）"
    }
  },
  methods: {
    upload() {
      let formData = new FormData();
      formData.append('file', this.$refs.file.files[0])
      axios.post('/api/markvgan', formData, {
        'Content-Type': 'multipart/form-data'
      }).then(res => {
        this.resultInfo = res.data.predict;
      })
    }
  },
  watch: {

  }
}
</script>
<style>
</style>
