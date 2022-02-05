<template>
    <section>
        <hr>
        <h2>Linear progress bar - percentage display</h2>
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>

        <hr>
        <h2>Linear Progress Bar - Percent Inline</h2>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>

        <hr>
        <h2>Ring progress bar</h2>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>

    </section>
</template>

<script>
    export default {
        name: "eprogress",
        data: () => ({}),
    }
</script>

<style scoped lang='scss'>

</style>