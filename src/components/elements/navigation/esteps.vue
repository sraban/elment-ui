<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-steps :active="active" finish-status="success">
            <el-step title="Step 1"></el-step>
            <el-step title="Step 2"></el-step>
            <el-step title="Step 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">Next</el-button>

        <hr>
        <h2>With status step bar</h2>
        <el-steps :space="200" :active="1" finish-status="success">
            <el-step title="Completed"></el-step>
            <el-step title="In Progress"></el-step>
            <el-step title="Step 3"></el-step>
        </el-steps>

        <hr>
        <h2>Step bar with description</h2>
        <el-steps :active="1">
            <el-step title="Step 1" description="This is a long, long, descriptive text"></el-step>
            <el-step title="Step 2" description="This is a long, long, descriptive text"></el-step>
            <el-step title="Step 3" description="This paragraph is not that long"></el-step>
        </el-steps>

        <hr>
        <h2>Centered step bar</h2>
        <el-steps :active="2" align-center>
            <el-step title="Step 1" description="This is a long, long, descriptive text"></el-step>
            <el-step title="Step 2" description="This is a long, long, descriptive text"></el-step>
            <el-step title="Step 3" description="This is a long, long, descriptive text"></el-step>
            <el-step title="Step 4" description="This is a long, long, descriptive text"></el-step>
        </el-steps>

        <hr>
        <h2>Step bar with icon</h2>
        <el-steps :active="1">
            <el-step title="Step 1" icon="el-icon-edit"></el-step>
            <el-step title="Step 2" icon="el-icon-upload"></el-step>
            <el-step title="Step 3" icon="el-icon-picture"></el-step>
        </el-steps>

        <hr>
        <h2>Vertical step bar</h2>
        <div style="height: 300px;">
            <el-steps direction="vertical" :active="1">
                <el-step title="Step 1"></el-step>
                <el-step title="Step 2"></el-step>
                <el-step title="Step 3" description="This is a long, long, descriptive text"></el-step>
            </el-steps>
        </div>

        <hr>
        <h2>Simple style step bar</h2>
        <el-steps :active="1" simple>
            <el-step title="Step 1" icon="el-icon-edit"></el-step>
            <el-step title="Step 2" icon="el-icon-upload"></el-step>
            <el-step title="Step 3" icon="el-icon-picture"></el-step>
        </el-steps>

        <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
            <el-step title="Step 1" ></el-step>
            <el-step title="Step 2" ></el-step>
            <el-step title="Step 3" ></el-step>
        </el-steps>
    </section>
</template>

<script>
    export default {
        name: "esteps",
        data: () => ({
            active: 0
        }),
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>