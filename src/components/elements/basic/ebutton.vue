<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <div>
            <el-button>Default button</el-button>
            <el-button type="primary">primary button</el-button>
            <el-button type="success">Success button</el-button>
            <el-button type="info">Information button</el-button>
            <el-button type="warning">Warning button</el-button>
            <el-button type="danger">Dangerous button</el-button>
        </div>

        <div style="margin: 20px 0">
            <el-button plain>Plain button</el-button>
            <el-button type="primary" plain>Primary button</el-button>
            <el-button type="success" plain>Success button</el-button>
            <el-button type="info" plain>Information button</el-button>
            <el-button type="warning" plain>Warning button</el-button>
            <el-button type="danger" plain>Danger button</el-button>
        </div>

        <div>
            <el-button round>Round button</el-button>
            <el-button type="primary" round>Primary button</el-button>
            <el-button type="success" round>Success button</el-button>
            <el-button type="info" round>Information button</el-button>
            <el-button type="warning" round>Warning button</el-button>
            <el-button type="danger" round>Danger button</el-button>
        </div>

        <hr>
        <h2>Disabled state</h2>
        <div>
            <el-button disabled>Default button</el-button>
            <el-button type="primary" disabled>Primary button</el-button>
            <el-button type="success" disabled>Success button</el-button>
            <el-button type="info" disabled>Information button</el-button>
            <el-button type="warning" disabled>Warning button</el-button>
            <el-button type="danger" disabled>Dangerous button</el-button>
        </div>

        <div style="margin: 20px 0">
            <el-button plain disabled>Plain button</el-button>
            <el-button type="primary" plain disabled>Primary button</el-button>
            <el-button type="success" plain disabled>Success button</el-button>
            <el-button type="info" plain disabled>Information button</el-button>
            <el-button type="warning" plain disabled>Warning button</el-button>
            <el-button type="danger" plain disabled>Dangerous button</el-button>
        </div>

        <div>
            <el-button round disabled>Round button</el-button>
            <el-button type="primary" disabled round>Primary button</el-button>
            <el-button type="success" disabled round>Success button</el-button>
            <el-button type="info" disabled round>Information button</el-button>
            <el-button type="warning" disabled round>Warning button</el-button>
            <el-button type="danger" disabled round>Dangerous button</el-button>
        </div>

        <hr>
        <h2>Text button</h2>
        <el-button type="text">Text button</el-button>
        <el-button type="text" disabled>Text button</el-button>

        <hr>
        <h2>Icon button</h2>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
        <el-button type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>

        <hr>
        <h2>Button Group</h2>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">Previous</el-button>
            <el-button type="primary">Next page<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>

        <hr>
        <h2>Loading</h2>
        <el-button type="primary" loading="true">Loading</el-button>
        <el-button type="primary" @click="changeLoading" :loading="loadingState">{{loadingButtonName}}</el-button>

        <hr>
        <h2>Various sizes</h2>
        <div>
        <el-button>Default button</el-button>
        <el-button size="medium">Medium button</el-button>
        <el-button size="small">Small button</el-button>
        <el-button size="mini">Extra small button</el-button>
        </div>
        <div style="margin-top: 20px">
            <el-button round>Default button</el-button>
            <el-button size="medium" round>Medium button</el-button>
            <el-button size="small" round>Small button</el-button>
            <el-button size="mini" round>Extra small button</el-button>
        </div>


    </section>
</template>

<script>
    export default {
        name: "ebutton",
        data: () => ({
            loadingState: false,
            loadingButtonName: 'Click to load'
        }),
        methods: {
            changeLoading() {
                this.loadingState = !this.loadingState;
                    this.loadingButtonName = 'Loading';
            }
        }
    }
</script>

<style scoped>

</style>