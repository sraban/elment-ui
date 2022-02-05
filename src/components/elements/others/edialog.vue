<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-button type="text" @click="dialogVisible = true">Click to open Dialog</el-button>

        <el-dialog
                title="Tips"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>This is a piece of information</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">OK</el-button>
            </span>
        </el-dialog>
        <hr>
        <h2>Custom Content</h2>
        <!-- Table -->
        <el-button type="text" @click="dialogTableVisible = true">Open the Dialog of the nested table</el-button>

        <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
                <el-table-column property="date" label="date" width="150"></el-table-column>
                <el-table-column property="name" label="name" width="200"></el-table-column>
                <el-table-column property="address" label="address"></el-table-column>
            </el-table>
        </el-dialog>

        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">Open the Dialog of the nested form</el-button>

        <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="Activity name" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="active area" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="Please select the active region">
                        <el-option label="Area 1" value="shanghai"></el-option>
                        <el-option label="Area 2" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">OK</el-button>
            </div>
        </el-dialog>

        <hr>
        <h2>Nested Dialog</h2>
        <el-button type="text" @click="outerVisible = true">Click to open the outer Dialog</el-button>

        <el-dialog title="outer Dialog" :visible.sync="outerVisible">
            <el-dialog
                    width="30%"
                    title="Inner Dialog"
                    :visible.sync="innerVisible"
                    append-to-body>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">Cancel</el-button>
                <el-button type="primary" @click="innerVisible = true">Open inner Dialog</el-button>
            </div>
        </el-dialog>
        <hr>
        <h2>Centered layout</h2>
        <el-button type="text" @click="centerDialogVisible = true">Click to open Dialog</el-button>

        <el-dialog
                title="Tips"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span>It should be noted that the content is not centered by default</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">OK</el-button>
  </span>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        name: "edialog",
        data: () => ({
            dialogVisible: false,
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
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            outerVisible: false,
            innerVisible: false,
            centerDialogVisible: false
        }),
        methods: {
            handleClose(done) {
                this.$confirm('Confirm to close?')
                    .then( () => {
                        done();
                    })
                    .catch( () => {});
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>