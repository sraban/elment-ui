<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-alert
                title="Successful prompt copy"
                type="success">
        </el-alert>
        <el-alert
                title="Text of the message prompt"
                type="info">
        </el-alert>
        <el-alert
                title="Copy of Warning Prompt"
                type="warning">
        </el-alert>
        <el-alert
                title="Text for error message"
                type="error">
        </el-alert>
        <hr>
        <h2>Custom close button</h2>
        <el-alert
                title="Uncloseable alert"
                type="success"
                :closable="false">
        </el-alert>
        <el-alert
                title="custom close-text"
                type="info"
                close-text="Got it">
        </el-alert>
        <el-alert
                title="alert with callback set"
                type="warning"
                @close="hello">
        </el-alert>

        <hr>
        <h2>with icon</h2>
        <el-alert
                title="Successful prompt copy"
                type="success"
                show-icon>
        </el-alert>
        <el-alert
                title="Text of the message prompt"
                type="info"
                show-icon>
        </el-alert>
        <el-alert
                title="Copy of Warning Prompt"
                type="warning"
                show-icon>
        </el-alert>
        <el-alert
                title="Text for error message"
                type="error"
                show-icon>
        </el-alert>

        <hr>
        <h2>Center text</h2>
        <el-alert
                title="Successful prompt copy"
                type="success"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="Text of the message prompt"
                type="info"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="Copy of Warning Prompt"
                type="warning"
                center
                show-icon>
        </el-alert>
        <el-alert
                title="Text for error message"
                type="error"
                center
                show-icon>
        </el-alert>

        <hr>
        <h2>Introduction with supporting text</h2>
        <el-alert key="0"
                title="Introduction with auxiliary text"
                type="success"
                description="This is a tongue twister: the black ash fertilizer will volatilize and turn gray and black fertilizer; the gray and black fertilizer will volatilize and turn black and gray. The black ash fertilizer will volatilize and turn gray and black"  show-icon>
        </el-alert>

        <hr>
        <h2>Introduction with icon and supporting text</h2>
        <el-alert key="1" title="Successful prompt copy" type="success" description="text description text description text description text description text description text description" show-icon>
        </el-alert>

        <el-alert key="2" title="Text of the message prompt" type="info" description="text description text description text description text description text description text description" show-icon>
        </el-alert>

        <el-alert key="3" title="Copy of Warning Prompt" type="warning" description="text description text description text description text description text description text description" show-icon>
        </el-alert>

        <el-alert key="4" title="Text for error message" type="error" description="text description text description text description text description text description text description" show-icon>
        </el-alert>

    </section>
</template>

<script>
    export default {
        name: "ealert",
        data: () => ({}),
        methods: {
            hello() {
                alert('Hello World!');
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>