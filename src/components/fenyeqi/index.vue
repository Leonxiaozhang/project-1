<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getpageNo', pageNo - 1)">
      上一页
    </button>
    <button v-if="startAndend.start > 1" @click="$emit('getpageNo', 1)" :class="{'acitave':pageNo == 1}">
      1
    </button>
    <button v-if="startAndend.start > 2">···</button>
    <button
      v-for="(con, index) in startAndend.end"
      :key="index"
      v-if="con >= startAndend.start"
      @click="$emit('getpageNo', con)"
      :class="{'acitave':pageNo == con}"
    >
      {{ con }}
    </button>

    <button v-if="startAndend.end < totalpage - 1">···</button>
    <button
      v-if="startAndend.end < totalpage"
      @click="$emit('getpageNo', totalpage)"
      :class="{'acitave':pageNo == totalpage}"
    >
      {{ totalpage }}
    </button>
    <button
      :disabled="pageNo==totalpage"
      @click="$emit('getpageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalpage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndend() {
      const { totalpage, pageNo, continues } = this;
      let start = 0,
        end = 0;
      if (continues > totalpage) {
        start = 1;
        end = totalpage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalpage) {
          end = totalpage;
          start = totalpage - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  .acitave{
    background: greenyellow;
  }
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>