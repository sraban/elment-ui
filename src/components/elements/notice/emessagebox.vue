<template>
    <section>
        <hr>
        <h2>Message prompt</h2>
        <el-button type="text" @click="open">Click to open Message Box</el-button>
        <hr>
        <h2>Confirmation message</h2>
        <el-button type="text" @click="open2">Click to open Message Box</el-button>
        <hr>
        <h2>Submit content</h2>
        <el-button type="text" @click="open3">Click to open Message Box</el-button>

        <hr>
        <h2>Custom</h2>
        <el-button type="text" @click="open4">Click to open Message Box</el-button>

        <hr>
        <h2>Use HTML Fragments</h2>
        <el-button type="text" @click="open5">Click to open Message Box</el-button>

        <hr>
        <h2>Centered layout</h2>
        <el-button type="text" @click="open6">Click to open Message Box</el-button>
    </section>
</template>

<script>
    export default {
        name: "emessagebox",
        data: () => ({}),
        methods:{
            open() {
                this.$alert('This is a piece of content', 'Title name', {
                    confirmButtonText: 'OK',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open2() {
                this.$confirm('This operation will permanently delete the file, do you want to continue?', 'Prompt', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete successful!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Undeleted'
                    });
                });
            },
            open3() {
                this.$prompt('Please enter your email', 'prompt', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    inputPattern: /[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: 'The mailbox format is incorrect'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: 'Your email is: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Cancel input'
                    });
                });
            },
            open4() {
                const h = this.$createElement;
                this.$msgbox({
                    title: 'Message',
                    message: h('p', null, [
                        h('span', null, 'The content can be '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = 'Executing...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            open5() {
                this.$alert('<strong>This is an <i>HTML</i> fragment</strong>', 'HTML fragment', {
                    dangerouslyUseHTMLString: true
                });
            },
            open6() {
                this.$confirm('This operation will permanently delete the file, do you want to continue?', 'Prompt', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete successful!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Undeleted'
                    });
                });
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>