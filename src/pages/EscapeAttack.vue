<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">逃逸攻击检测</h5>
            <h3 class="card-title">逃逸攻击检测</h3>
          </template>
          <!-- <div class="typography-line text-left">
            <span>上传文件</span>
            <input type="file" ref="file" @change="upload" />
          </div> -->
          <!-- <div class="typography-line text-left" style="margin-top: 20px">
            <span>Result</span>
            <blockquote>
              <p class="blockquote blockquote-primary">
                {{ resultInfo }}
              </p>
            </blockquote>
          </div> -->
          <div style="margin: 20px 40px">
            <!-- <div style="text-align: left; margin-bottom: 10px">
              <i
                style="font-size: 1.73em"
                class="tim-icons icon-chart-bar-32 big"
              ></i>
              <span
                style="
                  font-size: 24px;
                  font-weight: bold;
                  text-align: left;
                  margin-bottom: 10px;
                "
              >
                检测结果分析
              </span>
            </div> -->

            <!-- <div class="engines">
              <div class="circle">
                <div class="positives" clean="">0</div>
                <div class="total">/ 56</div>
              </div>
              <svg
                id="circularProgressbar"
                class="circle-progressbar"
                height="100"
                width="100"
                style="stroke-dashoffset: 0; stroke-dasharray: 282.743"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke-width="10"
                  fill="transparent"
                  stroke="var(--vt-green-500)"
                ></circle>
              </svg>
            </div> -->

            <div class="alert">
              <i class="tim-icons icon-bell-55"></i>
              <span> "未检测到异常或威胁信息" </span>
            </div>

            <div style="text-align: left; margin-bottom: 10px">
              <i
                style="font-size: 1.73em"
                class="tim-icons icon-chart-bar-32 big"
              ></i>
              <span
                style="
                  font-size: 24px;
                  font-weight: bold;
                  text-align: left;
                  margin-bottom: 10px;
                "
              >
                基本画像
              </span>
            </div>
            <template>
              <base-table :data="tableData2">
                <template slot-scope="{ row }">
                  <template v-if="row.key == '样本评级'">
                    <td>{{ row.key }}</td>
                    <td>
                      <div class="label">{{ row.value }}</div>
                    </td>
                  </template>
                  <template v-else>
                    <td>{{ row.key }}</td>
                    <td>{{ row.value }}</td>
                  </template>
                </template>
              </base-table>
            </template>

            <!-- <div style="text-align: left; margin-bottom: 10px">
              <i
                style="font-size: 1.73em"
                class="tim-icons icon-chart-bar-32 big"
              ></i>
              <span
                style="
                  font-size: 24px;
                  font-weight: bold;
                  text-align: left;
                  margin-bottom: 10px;
                "
              >
                检测结果
              </span>
            </div> -->
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";
import BaseTable from "@/components/BaseTable";

import axios from "axios";

export default {
  components: {
    Card,
    BaseTable,
  },
  mounted() {},
  data() {
    return {
      resultInfo: "待上传文件（检测结果共返回5种网络流量类型）",
      columns: [
        "SrcPacketIP",
        "DstPacketIP",
        "SrcPacketPort",
        "DstPacketPort",
        "Protocol",
        "Classfication",
        "DetailLabel",
      ],
      tableData: [
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Normal",
          DetailLabel: "Normal",
        },
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Normal",
          DetailLabel: "Normal",
        },
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Normal",
          DetailLabel: "Normal",
        },
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Anomaly",
          DetailLabel: "SSH Patator",
        },
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Anomaly",
          DetailLabel: "DDoS",
        },
        {
          SrcPacketIP: "130.232.242.21",
          DstPacketIP: "129.232.242.21",
          SrcPacketPort: 2002,
          DstPacketPort: 80,
          Protocol: "Tcp",
          Classfication: "Normal",
          DetailLabel: "Normal",
        },
      ],
      tableData2: [
        { key: "检测时间", value: "2021-11-02 13:22:24" },
        { key: "检测文件", value: "flow.pcap" },
        { key: "检测文件类型", value: "pcap" },
        { key: "检测文件大小", value: "1.9MB" },
        { key: "检测文件MD5", value: "05c212142f2988e5c950cfd6c9bb6201" },
        {
          key: "检测文件SHA-1",
          value: "0abfd5abe1936f9f7555d849dcbad5e07242e08c",
        },
        {
          key: "检测文件SHA-256",
          value:
            "865e994201266b48ef0750c945c6ea471f80d15d04759bd8b8f71562de0221ef",
        },
        { key: "", value: "" },
        { key: "样本评级", value: "正常" },
        { key: "样本类型", value: "类型A、类型B" },
      ],
    };
  },
  computed: {
    rowCount: function () {
      return Math.ceil(this.tableData.length / 2);
    },
  },
  methods: {
    upload() {
      let formData = new FormData();
      formData.append("file", this.$refs.file.files[0]);
      axios
        .post("/api/fewshot_traffic", formData, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          this.resultInfo = res.data.predict;
        });
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.mailTable {
  margin: 0 auto;
}
.column {
  height: 54px;
  border: 1px solid #e8e8e8;
  text-align: center;
}
.engines {
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  width: 100px;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0px auto 20px;
}

.engines .circle {
  box-shadow: rgb(102, 102, 102) 0px 5px 20px 0px;
  background-color: white;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  text-align: center;
  color: var(--vt-grey-500);
  padding-top: 15px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.engines .circle-progressbar {
  transform: rotate(-90deg);
  position: relative;
  top: -90px;
  left: -10px;
  stroke-linecap: round;
  transition: all 0.5s ease-in-out 0s;
}

.engines .circle .positives[clean] {
  color: rgb(34, 181, 115);
  // color: rgb(221, 37, 37);
}

.engines .circle .positives {
  font-size: 35px;
  line-height: 35px;
  transition: color 0.2s ease 0s;
}

circle {
  cx: 50;
  cy: 50;
  r: 45;
  stroke-width: 10;
  fill: transparent;
  stroke: rgb(34, 181, 115);
  // stroke: rgb(221, 37, 37);
}

.alert {
  text-align: center;
  margin: 30px 0;
  font-weight: bold;
  background-color: rgba(212, 212, 212, 0.562);
  padding: 20px 30px;
  color: rgb(34, 181, 115);
}

.label {
  background: rgb(34, 181, 115);
  color: whitesmoke;
  padding: 5px 3px;
  font-size: 10px;
  border-radius: 5px;
  width: 30px;
  margin: 0 auto;
  text-align: center;
}

.error {
  background: rgb(221, 37, 37);
}
</style>
