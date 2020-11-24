<template>
  <div>
    <div
      :key="`row${rowIndex}`"
      v-for="(row, rowIndex) in state.board"
      class="row"
    >
      <div :key="cell.id" v-for="cell in row" class="cell">
        <template v-if="cell.live">
          ■
        </template>

        <template v-if="!cell.live">
          _
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useLifeGame } from "../hooks/useLifeGame";

export default {
  setup() {
    const { state, init, run, stop } = useLifeGame({
      interval: 1000,
      size: 16
    });

    onMounted(() => {
      init();
      run();
    });

    return {
      state,
      init,
      run,
      stop
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}

.cell {
  line-height: 1;
}
</style>
