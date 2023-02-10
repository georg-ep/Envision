<template>
  <div class="landing">
    <div class="container">
      <div class="section center">
        <div class="animate title mb-24">Seamless eCommerce Web Design</div>
        <div class="flex animate w-100 mb-48">
          <div class="subheading">
            Providing top-notch eCommerce experiences, we simplify the process
            of browsing and purchasing from your online store.
          </div>
        </div>
        <div class="animate flex button-bottom">
          <Button
            :text="'Let\'s make something great'"
            :background="'var(--primary2)'"
            :text-colour="'black'"
            :font-size="'18px'"
            :font-weight="'bold'"
            :height="'40px'"
          />
        </div>
      </div>
      <!-- <div class="flex center">
        <div class="b-container">
          <div class="b-container_title">Your business without EnVision</div>
          <div class="b-container_point">
            Your eCommerce platform is falling short in driving product sales
          </div>
          <div class="b-container_point">
            Struggling to keep your website updated with the latest products,
            promotions, and deals
          </div>
          <div class="b-container_point">
            Your online store's navigation and product discovery are
            challenging, and it delivers an unsatisfactory mobile experience
          </div>
        </div>
        <div class="b-container b-container_coloured">
          <div class="b-container_title">Your business with EnVision</div>
          <div class="b-container_point">
            Your eCommerce platform's sales are consistently increasing month
            over month
          </div>
          <div class="b-container_point">
            Keeping everything current is a breeze thanks to a user-friendly
            content management system
          </div>
          <div class="b-container_point">
            With a mobile-first approach, we aim to attract on-the-go shoppers
            and increase conversions
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "landing",
  data() {
    return {
      search: "",
      plans: [
        {
          name: "Basic",
          price: "899.99",
          features: ["3 edits /month", "Custom Coded", "Super Fast"],
        },
        {
          name: "Premium",
          price: "2499.99",
          features: ["Unlimited Edits", "Custom Coded", "Super Fast"],
        },
        {
          name: "Enterprise",
          price: "9999.99",
          features: ["Unlimited Edits", "Custom Coded", "Super Fast"],
        },
      ],
    };
  },
  mounted() {
    document.querySelectorAll(".animate").forEach((title, index) => {
      setTimeout(() => title.classList.add("animate_active"), 200 * index);
    });
  },
  computed: {
    imgSrc() {
      return (idx) => require(`~/assets/images/store-images/${idx + 1}.jpeg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/landing.scss";
</style>
