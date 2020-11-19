<template>
  <div>
    <div class="row">
      <div class="cell">
        <template v-if="item.live">
          ■
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import useLifeGame from "../hooks/useLifeGame";

export default {
  setup() {
    return {
      ...useLifeGame()
    };
  }
};
</script>

<style lang="scss" scoped></style>
