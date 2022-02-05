<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-button :plain="true" @click="open">Open message prompt</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
        <hr>
        <h2>Different states</h2>
        <el-button :plain="true" @click="open2">success</el-button>
        <el-button :plain="true" @click="open3">Warning</el-button>
        <el-button :plain="true" @click="open">message</el-button>
        <el-button :plain="true" @click="open4">error</el-button>

        <hr>
        <h2>Closeable</h2>
        <el-button :plain="true" @click="open5">message</el-button>
        <el-button :plain="true" @click="open6">Success</el-button>
        <el-button :plain="true" @click="open7">Warning</el-button>
        <el-button :plain="true" @click="open8">error</el-button>

        <hr>
        <h2>Center text</h2>
        <el-button :plain="true" @click="openCenter">Center text</el-button>

        <hr>
        <h2>Use HTML Fragments</h2>
        <el-button :plain="true" @click="openHTML">Use HTML snippet</el-button>

    </section>
</template>

<script>
    export default {
        name: "emessage",
        data: () => ({}),
        methods: {
            open() {
                this.$message('This is a message prompt');
            },
            open2() {
                this.$message({
                    message: 'Congratulations, this is a success message',
                    type: 'success'
                });
            },

            open3() {
                this.$message({
                    message: 'Warning, this is a warning message',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error('wrong, this is an error message');
            },
            open5() {
                this.$message({
                    showClose: true,
                    message: 'This is a message prompt'
                });
            },

            open6() {
                this.$message({
                    showClose: true,
                    message: 'Congratulations, this is a success message',
                    type: 'success'
                });
            },

            open7() {
                this.$message({
                    showClose: true,
                    message: 'Warning, this is a warning message',
                    type: 'warning'
                });
            },

            open8() {
                this.$message({
                    showClose: true,
                    message: 'Wrong, this is an error message',
                    type: 'error'
                });
            },

            openCenter() {
                this.$message({
                    message: 'Centered text',
                    center: true
                });
            },
            openHTML() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>This is an <i>HTML</i> fragment</strong>'
                });
            },

            openVn() {
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, 'The content can be '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                });
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>