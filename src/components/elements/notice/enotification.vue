<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-button
                plain
                @click="open">
            Can be closed automatically
        </el-button>
        <el-button
                plain
                @click="open2">
            does not close automatically
        </el-button>
        <hr>
        <h2>Tendency</h2>
        <el-button
                plain
                @click="open3">
            success
        </el-button>
        <el-button
                plain
                @click="open4">
            warn
        </el-button>
        <el-button
                plain
                @click="open5">
            information
        </el-button>
        <el-button
                plain
                @click="open6">
            Mistake
        </el-button>

        <hr>
        <h2>Custom popup position</h2>
        <el-button
                plain
                @click="open7">
            top right
        </el-button>
        <el-button
                plain
                @click="open8">
            bottom right
        </el-button>
        <el-button
                plain
                @click="open9">
            bottom left
        </el-button>
        <el-button
                plain
                @click="open10">
            top left
        </el-button>

        <hr>
        <h2>with offset</h2>
        <el-button
                plain
                @click="open11">
            offset message
        </el-button>

        <hr>
        <h2>Use HTML Fragments</h2>
        <el-button
                plain
                @click="open12">
            Use HTML snippets
        </el-button>

        <hr>
        <h2>Hide the close button</h2>
        <el-button
                plain
                @click="open13">
            hide the close button
        </el-button>

    </section>
</template>

<script>
    export default {
        name: "enotification",
        data: () => ({}),
        methods: {
            open() {
                const h = this.$createElement;

                this.$notify({
                    title: 'Title name',
                    message: h('i', { style: 'color: teal'}, 'this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy')
                });
            },

            open2() {
                this.$notify({
                    title: 'Tips',
                    message: 'This is a message that will not be closed automatically',
                    duration: 0
                });
            },
            open3() {
                this.$notify({
                    title: 'Success',
                    message: 'This is a successful prompt message',
                    type: 'success'
                });
            },

            open4() {
                this.$notify({
                    title: 'Warning',
                    message: 'This is a warning message',
                    type: 'warning'
                });
            },

            open5() {
                this.$notify.info({
                    title: 'Message',
                    message: 'This is a reminder message for a message'
                });
            },

            open6() {
                this.$notify.error({
                    title: 'error',
                    message: 'This is an error message'
                });
            },
            open7() {
                this.$notify({
                    title: 'custom location',
                    message: 'The message popped up in the upper right corner'
                });
            },

            open8() {
                this.$notify({
                    title: 'custom location',
                    message: 'The message popped up in the lower right corner',
                    position: 'bottom-right'
                });
            },

            open9() {
                this.$notify({
                    title: 'custom location',
                    message: 'The message popped up in the lower left corner',
                    position: 'bottom-left'
                });
            },

            open10() {
                this.$notify({
                    title: 'custom location',
                    message: 'The message popped up in the upper left corner',
                    position: 'top-left'
                });
            },
            open11() {
                this.$notify({
                    title: 'offset',
                    message: 'This is a message with an offset',
                    offset: 100
                });
            },
            open12() {
                this.$notify({
                    title: 'HTML Fragment',
                    dangerouslyUseHTMLString: true,
                    message: '<strong>This is an <i>HTML</i> fragment</strong>'
                });
            },
            open13() {
                this.$notify.success({
                    title: 'Info',
                    message: 'This is a message without a close button',
                    showClose: false
                });
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>