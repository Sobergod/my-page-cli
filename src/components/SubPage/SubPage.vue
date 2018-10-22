<template>
    <div>
        <header-item></header-item>
        <slot>一级页面</slot>
        <footer-item></footer-item>
    </div>
</template>

<script>
import FooterItem from "./FooterItem";
import HeaderItem from "./HeaderItem";
export default {
  components: {
    FooterItem,
    HeaderItem
  }
};
</script>

<style scoped>
</style>