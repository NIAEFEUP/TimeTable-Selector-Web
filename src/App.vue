<template>
  <div id="app">
    <header>
      <img class="logo" src="/static/img/logo.png" srcset="/static/img/logo@2x.png 2x, /static/img/logo@3x.png 3x"><!--
   --><span><span>Timetable Selector</span></span>
    </header>
    <main>
      <SchedulePage></SchedulePage>
    </main>
  </div>
</template>

<script>
import SchedulePage from './components/SchedulePage';

export default {
  components: {
    SchedulePage,
  },
  name: 'app',
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  color: #2c3e50;
}

main {
  display: block;
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 54px;
  padding: 2px 16px 0 24px;
  box-sizing: border-box;
  background-color: #1b1c26;
  color: #fff;
  font-weight: 500;

  > .logo {
    width: 42px;
    height: 52px;
    object-fit: contain;
    margin-right: 10px;
  }

  > span {
    display: inline-block;
    position: relative;
    height: 100%;
    line-height: 100%;
    > span {
      position: absolute;
      white-space: nowrap;
      font-size: 20px;
      height: 54px;
      line-height: 54px;
    }
  }
}
</style>
