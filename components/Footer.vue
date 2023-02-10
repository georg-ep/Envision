<template>
  <div class="footer">
    <div class="container">
      <div class="footer-blocks">
        <!-- <div class="block">
          <div class="heading">Quick Links</div>
          <div class="link">Delivery Information</div>
          <div class="link">Returns & Refunds</div>
          <div class="link">Terms & Conditions</div>
          <div class="link">Privacy Policy</div>
        </div> -->
        <div class="block">
          <div class="heading">Get In Touch</div>
          <div class="link">contactus@envisiondigital.co.uk</div>
          <div class="link">(+44) 7490730003</div>
        </div>
        <!-- <div class="block">
          <div class="heading">Newsletter</div>
          <div class="mb-12 subheading">
            Keep up to date with our latest offers, events and promotions
          </div>
          <Input
            :model.sync="email"
            :background="'transparent'"
            :border="'1px solid white'"
            :placeholder="'Email'"
            class="mb-8"
          />
          <Button
            :text="'Subscribe'"
            :width="'100%'"
            :text-colour="'white'"
            :background="'transparent'"
            :border="'1px solid white'"
            :height="'30px'"
          />
        </div> -->
      </div>
      <div class="flex col w-100 align-center mt-48">
        <div class="copyright">Copyright © 2022 Envision Digital</div>
        <!-- <div class="flex">
          <img
            class="payment-icon"
            src="~/assets/icons/payments/amex.svg"
            alt="amex"
          />
          <img
            class="payment-icon"
            src="~/assets/icons/payments/apple-pay.svg"
            alt="apple-pay"
          />
          <img
            class="payment-icon"
            src="~/assets/icons/payments/mastercard.svg"
            alt="mastercard"
          />
          <img
            class="payment-icon"
            src="~/assets/icons/payments/visa.svg"
            alt="visa"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/footer";
</style>