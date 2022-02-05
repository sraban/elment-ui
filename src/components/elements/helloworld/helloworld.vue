<template>
     <section>
         <el-button @click="visible = true">Button</el-button>
         <el-dialog :visible.sync="visible" title="Hello world">
             <p>Welcome to Element</p>
         </el-dialog>
     </section>
</template>
<script>
     export default {
         name: "helloworld",
         data: () => ({
             visible: false
         })
     }
</script>

<style scoped>

</style>