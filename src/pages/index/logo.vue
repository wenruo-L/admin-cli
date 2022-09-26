<template>
  <div class="block-logo">
    <span
      v-if="keyCollapse"
      class="block-logo_subtitle animate__animated animate__fadeInRight"
      key="0"
    >
      {{ website.logo }}
    </span>

    <template v-if="!keyCollapse">
      <span
        class="block-logo_title animate__animated animate__fadeInRight"
        key="1"
        >{{ website.indexTitle }}
      </span>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "logo",
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["keyCollapse"]),
  },
  methods: {},
};
</script>
