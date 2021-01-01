---
to: "src/app/components/<%= h.changeCase.kebab(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script>
export default {}
</script>
<%
}

if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div></div>
</template>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module></style><%
}
%>
