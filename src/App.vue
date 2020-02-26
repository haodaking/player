<template>
  <div id="app">
    <el-card style="margin-bottom:20px;">
      <div slot="header">
        <span>播放设置</span>
      </div>
      <el-input placeholder="请输入播放地址" v-model="options.video.url">
        <el-select
          v-model="options.video.type"
          slot="prepend"
          style="width:80px;"
        >
          <el-option value="auto"></el-option>
          <el-option value="flv"></el-option>
          <el-option value="hls"></el-option>
          <el-option value="mp4"></el-option>
        </el-select>
        <el-button type="primary" slot="append" @click="play">播放</el-button>
      </el-input>
      <div class="controls" style="margin-top:10px;">
        <el-checkbox v-model="options.live">直播</el-checkbox>
        <el-checkbox v-model="options.autoplay">自动播放</el-checkbox>
      </div>
    </el-card>
    <el-card v-if="isPlay">
      <d-player :options="options" @play="play" ref="player"></d-player>
    </el-card>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  components: {
    'd-player': VueDPlayer
  },
  data() {
    return {
      options: {
        video: {
          url: 'http://podcast.ezijing.com/live/liveteststream.flv',
          type: 'auto'
        },
        live: true,
        autoplay: true
      },
      isPlay: false
    }
  },
  mounted() {
    this.player = this.$refs.player.dp
  },
  methods: {
    play() {
      this.isPlay = true
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 80%;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
