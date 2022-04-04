<template>
  <div>
    <button @click="test">Test</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    test() {
      fetch('http://localhost:3000/getCourses').then(res => console.log(res));
    }
  }
}
</script>
