<template>
  <div>
    <Header />
    <Menu />
    <Ad />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from '../layout/Header'
import Menu from '../layout/Menu'
import Footer from '../layout/Footer'
import List from '../views/List'
import Ad from '../views/Ad'
export default {
  components: {
    Header,
    Menu,
    List,
    Ad,
    Footer
  }
}
</script>

<style scoped></style>
