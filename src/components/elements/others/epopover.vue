<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-popover
                ref="popover1"
                placement="top-start"
                title="title"
                width="200"
                trigger="hover"
                content="This is a piece of content, this is a piece of content, this is a piece of content, this is a piece of content.">
        </el-popover>

        <el-popover
                ref="popover2"
                placement="bottom"
                title="title"
                width="200"
                trigger="click"
                content="This is a piece of content, this is a piece of content, this is a piece of content, this is a piece of content.">
        </el-popover>

        <el-button v-popover:popover1>hover activation</el-button>
        <el-button v-popover:popover2>click to activate</el-button>
        <el-popover
                placement="right"
                title="title"
                width="200"
                trigger="focus"
                content="This is a piece of content, this is a piece of content, this is a piece of content, this is a piece of content.">
            <el-button slot="reference">focus activation</el-button>
        </el-popover>

        <hr>
        <h2>Nest information</h2>
        <el-popover
                ref="popover4"
                placement="right"
                width="400"
                trigger="click">
            <el-table :data="gridData">
                <el-table-column width="150" property="date" label="date"></el-table-column>
                <el-table-column width="100" property="name" label="name"></el-table-column>
                <el-table-column width="300" property="address" label="address"></el-table-column>
            </el-table>
        </el-popover>

        <el-button v-popover:popover4>click to activate</el-button>
        <hr>
        <h2>Nested operations</h2>
        <el-popover
                ref="popover5"
                placement="top"
                width="160"
                v-model="visible2">
            <p>This is a piece of content This is a piece of content Are you sure you want to delete it? </p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible2 = false">Cancel</el-button>
                <el-button type="primary" size="mini" @click="visible2 = false">OK</el-button>
            </div>
        </el-popover>

        <el-button v-popover:popover5>Delete</el-button>
    </section>
</template>

<script>
    export default {
        name: "epopover",
        data: () => ({
            gridData: [{
                date: '2016-05-02',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-04',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-01',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-03',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }],
            visible2: false,
        }),
    }
</script>

<style scoped lang='scss'>

</style>