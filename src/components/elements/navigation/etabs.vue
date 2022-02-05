<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="User Management" name="first">User Management</el-tab-pane>
            <el-tab-pane label="Configuration Management" name="second">Configuration Management</el-tab-pane>
            <el-tab-pane label="Role Management" name="third">Role Management</el-tab-pane>
            <el-tab-pane label="Compensation for timed tasks" name="fourth">Compensation for timed tasks</el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Tab style</h2>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="User Management" name="first">User Management</el-tab-pane>
            <el-tab-pane label="Configuration Management" name="second">Configuration Management</el-tab-pane>
            <el-tab-pane label="Role Management" name="third">Role Management</el-tab-pane>
            <el-tab-pane label="Compensation for timed tasks" name="fourth">Compensation for timed tasks</el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Cardization</h2>
        <el-tabs type="border-card">
            <el-tab-pane label="User Management">User Management</el-tab-pane>
            <el-tab-pane label="Configuration Management">Configuration Management</el-tab-pane>
            <el-tab-pane label="Role Management">Role Management</el-tab-pane>
            <el-tab-pane label="Timing task compensation">Timing task compensation</el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Location</h2>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="User Management">User Management</el-tab-pane>
            <el-tab-pane label="Configuration Management">Configuration Management</el-tab-pane>
            <el-tab-pane label="Role Management">Role Management</el-tab-pane>
            <el-tab-pane label="Timing task compensation">Timing task compensation</el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Custom Tabs</h2>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> My Itinerary</span>
                my itinerary
            </el-tab-pane>
            <el-tab-pane label="Message Center">Message Center</el-tab-pane>
            <el-tab-pane label="Role Management">Role Management</el-tab-pane>
            <el-tab-pane label="Timing task compensation">Timing task compensation</el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Dynamic increase and decrease of tabs</h2>
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
                    :key="item.name+index"
                    v-for="(item, index) in editableTabs"
                    :label="item.title"
                    :name="item.name"
            >
                {{item.content}}
            </el-tab-pane>
        </el-tabs>

        <hr>
        <h2>Custom add tab trigger</h2>
        <div style="margin-bottom: 20px;">
            <el-button
                    size="small"
                    @click="addTab(editableTabsValue2)"
            >
                add tab
            </el-button>
        </div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                    v-for="(item, index) in editableTabs2"
                    :key="item.name+index"
                    :label="item.title"
                    :name="item.name"
            >
                {{item.content}}
            </el-tab-pane>
        </el-tabs>

    </section>
</template>

<script>
    export default {
        name: "etabs",
        data: () => ({
            activeName: 'second',
            activeName2: 'first',
            tabPosition: 'top',
            editableTabsValue: '2',
            editableTabs: [{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
            }, {
                title: 'Tab 2',
                name: '2',
                content: 'Tab 2 content'
            }],
            tabIndex: 2,
            editableTabsValue2: '2',
            editableTabs2: [{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
            }, {
                title: 'Tab 2',
                name: '2',
                content: 'Tab 2 content'
            }],
        }),
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            },
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>