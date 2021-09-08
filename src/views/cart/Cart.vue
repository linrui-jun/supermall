<template>
  <div class="cart">
    <!--    导航-->
    <nar-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nar-bar>

<!--    商品的列表-->
    <cart-list/>

<!--    底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NarBar from "@/components/common/navbar/NarBar";
  import CartList from "@/views/cart/childComps/CartList";
  import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NarBar,
      CartList,
      CartBottomBar
    },
    computed: {
      //
      ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart {
    height: 100vh;
  }
</style>
