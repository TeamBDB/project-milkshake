<template>
  <div id="game" class="fullscreen"></div>
  <router-view id="interface" class="fullscreen" v-slot="{ Component }">
    <template v-if="Component">
      <suspense>
        <component :is="Component"></component>
        <template #fallback> Loading... </template>
      </suspense>
    </template>
  </router-view>
</template>

<style>
.fullscreen {
  top: 0;
  left: 0;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
}

#game {
  z-index: 999;
}

#interface {
  z-index: 1000;
}
</style>
