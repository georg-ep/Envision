<template>
  <div class="plan-tile">
    <div class="name">{{ plan.name }}</div>
    <div class="price">£{{ plan.price }}</div>
    <div class="features mb-24">
      <div
        class="feature"
        v-for="(feature, index) in plan.features"
        :key="`feature_${index}`"
      >
        {{ feature }}
      </div>
    </div>
    <Button
      :text="'Get Started'"
      :background="'transparent'"
      :border="'1px solid var(--primary2)'"
      :text-colour="'white'"
      :border-radius="'3px'"
      :height="'40px'"
      :font-size="'20px'"
    />
  </div>
</template>

<script>
export default {
  name: "PlanTile",
  props: {
    plan: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/plan-tile";
</style>