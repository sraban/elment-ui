<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <hr>
        <h2>Optional</h2>
        <el-tree
                :props="props"
                :load="loadNode"
                lazy
                show-checkbox
                @check-change="handleCheckChange">
        </el-tree>

        <hr>
        <h2>Lazy load custom leaf node</h2>
        <el-tree
                :props="props1"
                :load="loadNode1"
                lazy
                show-checkbox>
        </el-tree>

        <hr>
        <h2>Expanded by default and selected by default</h2>
        <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
        </el-tree>

        <hr>
        <h2>Disabled state</h2>
        <el-tree
                :data="data3"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]">
        </el-tree>

        <hr>
        <h2>Selection of tree nodes</h2>
        <el-tree
                :data="data2"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps">
        </el-tree>
        <div class="buttons">
            <el-button @click="getCheckedNodes">Get through node</el-button>
            <el-button @click="getCheckedKeys">Get by key</el-button>
            <el-button @click="setCheckedNodes">Set by node</el-button>
            <el-button @click="setCheckedKeys">Set by key</el-button>
            <el-button @click="resetChecked">Clear</el-button>
        </div>

        <hr>
        <h2>Custom node content</h2>
        <el-tree
                :data="data4"
                :props="defaultProps"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
        </el-tree>

        <hr>
        <h2>Node filtering</h2>
        <el-input
                placeholder="Enter keywords to filter"
                v-model="filterText">
        </el-input>

        <el-tree
                class="filter-tree"
                :data="data2"
                :props="defaultProps"
                default-expand-all
                :filter-node-method="filterNode"
                ref="tree2">
        </el-tree>

        <hr>
        <h2>Accordion Mode</h2>
        <el-tree
                :data="data"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick">
        </el-tree>

    </section>
</template>

<script>
    let id = 1000;

    export default {
        name: "etree",
        data: () => ({
            data: [{
                label: 'Level 1',
                children: [{
                    label: 'Secondary 1-1',
                    children: [{
                        label: 'Level 3 1-1-1'
                    }]
                }]
            }, {
                label: 'Level 2',
                children: [{
                    label: 'Secondary 2-1',
                    children: [{
                        label: 'Level 3 2-1-1'
                    }]
                }, {
                    label: 'Secondary 2-2',
                    children: [{
                        label: 'Level 3 2-2-1'
                    }]
                }]
            }, {
                label: 'Level 3',
                children: [{
                    label: 'Secondary 3-1',
                    children: [{
                        label: 'Level 3 3-1-1'
                    }]
                }, {
                    label: 'Secondary 3-2',
                    children: [{
                        label: 'Level 3 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            props: {
                label: 'name',
                children: 'zones'
            },
            count: 1,
            props1: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
            data2: [{
                id: 1,
                label: 'Level 1',
                children: [{
                    id: 4,
                    label: 'Secondary 1-1',
                    children: [{
                        id: 9,
                        label: 'Level 3 1-1-1'
                    }, {
                        id: 10,
                        label: 'Level 3 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: 'Level 2',
                children: [{
                    id: 5,
                    label: 'Secondary 2-1'
                }, {
                    id: 6,
                    label: 'Secondary 2-2'
                }]
            }, {id: 3,
                label: 'Level 3',
                children: [{
                    id: 7,
                    label: 'Secondary 3-1'
                }, {
                    id: 8,
                    label: 'Secondary 3-2'
                }]
            }],
            data3: [{
                id: 1,
                label: 'Level 2',
                children: [{
                    id: 3,
                    label: 'Secondary 2-1',
                    children: [{
                        id: 4,
                        label: 'Level 3 3-1-1'
                    }, {
                        id: 5,
                        label: 'Level 3 3-1-2',
                        disabled: true
                    }]
                }, {
                    id: 2,
                    label: 'Secondary 2-2',
                    disabled: true,
                    children: [{
                        id: 6,
                        label: 'Level 3 3-2-1'
                    }, {
                        id: 7,
                        label: 'Level 3 3-2-2',
                        disabled: true
                    }]
                }]
            }],
            data4: [{
                id: 1,
                label: 'Level 1',
                children: [{
                    id: 4,
                    label: 'Secondary 1-1',
                    children: [{
                        id: 9,
                        label: 'Level 3 1-1-1'
                    }, {
                        id: 10,
                        label: 'Level 3 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: 'Level 2',
                children: [{
                    id: 5,
                    label: 'Secondary 2-1'
                }, {
                    id: 6,
                    label: 'Secondary 2-2'
                }]
            }, {
                id: 3,
                label: 'Level 3',
                children: [{
                    id: 7,
                    label: 'Secondary 3-1'
                }, {
                    id: 8,
                    label: 'Secondary 3-2'
                }]
            }],
            filterText: '',
        }),
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                let hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    let data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            },
            loadNode1(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }];

                    resolve(data);
                }, 500);
            },
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            getCheckedKeys() {
                console.log(this.$refs.tree.getCheckedKeys());
            },
            setCheckedNodes() {
                this.$refs.tree.setCheckedNodes([{
                    id: 5,
                    label: 'Secondary 2-1'
                }, {
                    id: 9,
                    label: 'Level 3 1-1-1'
                }]);
            },
            setCheckedKeys() {
                this.$refs.tree.setCheckedKeys([3]);
            },
            resetChecked() {
                this.$refs.tree.setCheckedKeys([]);
            },
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            renderContent(h, { node, data, store }) {
                return (
                    <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
                    <span>
                    <span>{node.label}</span>
                </span>
                <span>
                <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>Append</el-button>
                <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                </span>
                </span>);
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
    }
</script>

<style scoped lang='scss'>

</style>