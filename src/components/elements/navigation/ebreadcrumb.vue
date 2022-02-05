<template>
     <section>
         <hr>
         <h2>Basic usage</h2>
         <el-breadcrumb separator="/">
             <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
             <el-breadcrumb-item>Event Management</el-breadcrumb-item>
             <el-breadcrumb-item>Event List</el-breadcrumb-item>
             <el-breadcrumb-item>Event Details</el-breadcrumb-item>
         </el-breadcrumb>
         <hr>
         <h2>Icon separator</h2>
         <el-breadcrumb separator-class="el-icon-arrow-right">
             <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
             <el-breadcrumb-item>Event Management</el-breadcrumb-item>
             <el-breadcrumb-item>Event List</el-breadcrumb-item>
             <el-breadcrumb-item>Event Details</el-breadcrumb-item>
         </el-breadcrumb>
     </section>
</template>

<script>
     export default {
         name: "ebreadcrumb",
         data: () => ({}),
     }
</script>

<style scoped lang='scss'>

</style>