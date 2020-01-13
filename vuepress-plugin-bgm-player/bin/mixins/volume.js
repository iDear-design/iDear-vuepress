export default {
  data() {
    return {
      volumeKey: 'iu-bgm-volume'
    }
  },
  methods: {
    setVolume (val) {
      sessionStorage.setItem(this.volumeKey, val)
    },
    getVolume () {
      return sessionStorage.getItem(this.volumeKey)
    },
    removeVolume () {
      sessionStorage.removeItem(this.volumeKey);
    }
  }
}
