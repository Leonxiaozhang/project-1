<template>
  <div class="spec-preview" @mousemove="fangdajing">
    <img :src="objsku.imgUrl" />
    <div class="event"></div>
    <div class="big" >
      <img :src="objsku.imgUrl" ref="datu"/>
    </div>
    <div class="mask" ref="diid"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      ooo: 0,
    };
  },
  computed: {
    objsku() {
      return this.skuImageList[this.ooo] || {};
    },
  },
  mounted() {
    this.$bus.$on("getindex", (index) => {
      this.ooo = index;
    });
  },
  methods: {
    fangdajing(e) {
      let diid = this.$refs.diid;
      let datu = this.$refs.datu;
      let left = e.offsetX - diid.offsetWidth / 2;
      let top = e.offsetY - diid.offsetHeight / 2;
      if (left < 0) {
        left = 0;
      }
      if (left >= diid.offsetWidth) {
        left = diid.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      }
      if (top >= diid.offsetHeight) {
        top = diid.offsetHeight;
      }
      diid.style.left = left + "px";
      diid.style.top = top + "px";
      datu.style.left = -2 * left + "px";
      datu.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(255, 81, 0, .3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>