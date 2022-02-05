<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-tag>tag one</el-tag>
        <el-tag type="success">Tag II</el-tag>
        <el-tag type="info">Tag three</el-tag>
        <el-tag type="warning">Tag Four</el-tag>
        <el-tag type="danger">Tag Five</el-tag>

        <hr>
        <h2>Removable tags</h2>
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
            {{tag.name}}
        </el-tag>

        <hr>
        <h2>Dynamic edit tags</h2>
        <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

        <hr>
        <h2>Various sizes</h2>
        <el-tag closable>Default tag</el-tag>
        <el-tag size="medium" closable>Medium tag</el-tag>
        <el-tag size="small" closable>Small tag</el-tag>
        <el-tag size="mini" closable>Extra small tag</el-tag>

    </section>
</template>

<script>
    export default {
        name: "etag",
        data: () => ({
            tags: [
                { name: 'label one', type: '' },
                { name: 'label two', type: 'success' },
                { name: 'label three', type: 'info' },
                { name: 'label four', type: 'warning' },
                { name: 'label five', type: 'danger' }
            ],
            dynamicTags: ['tag one', 'tag two', 'tag three'],
            inputVisible: false,
            inputValue: ''
        }),
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick( () => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped lang='scss'>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>