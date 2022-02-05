<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <div class="block">
            <span class="demonstration">Default click triggers submenu</span>
            <el-cascader
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
            </el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">hover triggers submenu</span>
            <el-cascader
                    expand-trigger="hover"
                    :options="options"
                    v-model="selectedOptions2"
                    @change="handleChange">
            </el-cascader>
        </div>

        <hr>
        <h2>Disable option</h2>
        <el-cascader
                :options="optionsWithDisabled"
        ></el-cascader>

        <hr>
        <h2>Show last level only</h2>
        <el-cascader
                :options="options"
                :show-all-levels="false"
        ></el-cascader>

        <hr>
        <h2>Select to change</h2>
        <el-cascader
                :options="options"
                change-on-select
        ></el-cascader>

        <hr>
        <h2>Dynamic loading of secondary options</h2>
        <el-cascader
                :options="options2"
                @active-item-change="handleItemChange"
                :props="props"
        ></el-cascader>

        <hr>
        <h2>Searchable</h2>
        <div class="block">
            <span class="demonstration">Only last-level menu options can be selected</span>
            <el-cascader
                    placeholder="Try Search: Guide"
                    :options="options"
                    filterable
            ></el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">Options to select any level of menu</span>
            <el-cascader
                    placeholder="Try Search: Guide"
                    :options="options"
                    filterable
                    change-on-select
            ></el-cascader>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ecascader",
        data: () => ({
            options: [{
                value: 'zhinan',
                label: 'Guide',
                children: [{
                    value: 'shejiyuanze',
                    label: 'Design principles',
                    children: [{
                        value: 'yizhi',
                        label: 'consistent'
                    }, {
                        value: 'fankui',
                        label: 'feedback'
                    }, {
                        value: 'xiaolv',
                        label: 'efficiency'
                    }, {
                        value: 'kekong',
                        label: 'controllable'
                    }]
                }, {
                    value: 'daohang',
                    label: 'Navigation',
                    children: [{
                        value: 'cexiangdaohang',
                        label: 'Side navigation'
                    }, {
                        value: 'dingbudaohang',
                        label: 'Top Navigation'
                    }]
                }]
            }, {
                value: 'zujian',
                label: 'component',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout layout'
                    }, {
                        value: 'color',
                        label: 'Color color'
                    }, {
                        value: 'typography',
                        label: 'Typography font'
                    }, {
                        value: 'icon',
                        label: 'Icon icon'
                    }, {
                        value: 'button',
                        label: 'Button button'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio radio button'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox checkbox'
                    }, {
                        value: 'input',
                        label: 'Input input box'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber counter'
                    }, {
                        value: 'select',
                        label: 'Select selector'
                    }, {
                        value: 'cascader',
                        label: 'Cascader cascade selector'
                    }, {
                        value: 'switch',
                        label: 'Switch switch'
                    }, {
                        value: 'slider',
                        label: 'Slider slider'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker time picker'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker date picker'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker datetime picker'
                    }, {
                        value: 'upload',
                        label: 'Upload upload'
                    }, {
                        value: 'rate',
                        label: 'Rate Rating'
                    }, {
                        value: 'form',
                        label: 'Form Form'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table table'
                    }, {
                        value: 'tag',
                        label: 'Tag label'
                    }, {
                        value: 'progress',
                        label: 'Progress progress bar'
                    }, {
                        value: 'tree',
                        label: 'Tree tree control'
                    }, {
                        value: 'pagination',
                        label: 'Pagination Pagination'
                    }, {
                        value: 'badge',
                        label: 'Badge label'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert warning'
                    }, {
                        value: 'loading',
                        label: 'Loading'
                    }, {
                        value: 'message',
                        label: 'Message message prompt'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox popup'
                    }, {
                        value: 'notification',
                        label: 'Notification notification'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu navigation menu'
                    }, {
                        value: 'tabs',
                        label: 'Tabs tabs'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown dropdown menu'
                    }, {
                        value: 'steps',
                        label: 'Steps step bar'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog dialog'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip text prompt'
                    }, {
                        value: 'popover',
                        label: 'Popover popover'
                    }, {
                        value: 'card',
                        label: 'Card Card'
                    }, {
                        value: 'carousel',
                        label: 'Carousel Carousel'
                    }, {
                        value: 'collapse',
                        label: 'Collapse collapse panel'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: 'resource',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: 'Component interaction documentation'
                }]
            }],
            optionsWithDisabled: [{
                value: 'zhinan',
                label: 'Guide',
                disabled: true,
                children: [{
                    value: 'shejiyuanze',
                    label: 'Design principles',
                    children: [{
                        value: 'yizhi',
                        label: 'consistent'
                    }, {
                        value: 'fankui',
                        label: 'feedback'
                    }, {
                        value: 'xiaolv',
                        label: 'efficiency'
                    }, {
                        value: 'kekong',
                        label: 'controllable'
                    }]
                }, {
                    value: 'daohang',
                    label: 'Navigation',
                    children: [{
                        value: 'cexiangdaohang',
                        label: 'Side navigation'
                    }, {
                        value: 'dingbudaohang',
                        label: 'Top Navigation'
                    }]
                }]
            }, {
                value: 'zujian',label: 'component',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout layout'
                    }, {
                        value: 'color',
                        label: 'Color color'
                    }, {
                        value: 'typography',
                        label: 'Typography font'
                    }, {
                        value: 'icon',
                        label: 'Icon icon'
                    }, {
                        value: 'button',
                        label: 'Button button'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio radio button'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox checkbox'
                    }, {
                        value: 'input',
                        label: 'Input input box'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber counter'
                    }, {
                        value: 'select',
                        label: 'Select selector'
                    }, {
                        value: 'cascader',
                        label: 'Cascader cascade selector'
                    }, {
                        value: 'switch',
                        label: 'Switch switch'
                    }, {
                        value: 'slider',
                        label: 'Slider slider'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker time picker'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker Date Picker'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker datetime picker'
                    }, {
                        value: 'upload',
                        label: 'Upload upload'
                    }, {
                        value: 'rate',
                        label: 'Rate Rating'
                    }, {
                        value: 'form',
                        label: 'Form Form'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table table'
                    }, {
                        value: 'tag',
                        label: 'Tag label'
                    }, {
                        value: 'progress',
                        label: 'Progress progress bar'
                    }, {
                        value: 'tree',
                        label: 'Tree tree control'
                    }, {
                        value: 'pagination',
                        label: 'Pagination Pagination'
                    }, {
                        value: 'badge',
                        label: 'Badge label'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert warning'
                    }, {
                        value: 'loading',
                        label: 'Loading'
                    }, {
                        value: 'message',
                        label: 'Message message prompt'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox popup'
                    }, {
                        value: 'notification',
                        label: 'Notification notification'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu navigation menu'
                    }, {
                        value: 'tabs',
                        label: 'Tabs tabs'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown dropdown menu'
                    }, {
                        value: 'steps',
                        label: 'Steps step bar'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog dialog'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip text prompt'
                    }, {
                        value: 'popover',
                        label: 'Popoverpop-up windows'
                    }, {
                        value: 'card',
                        label: 'Card Card'
                    }, {
                        value: 'carousel',
                        label: 'Carousel Carousel'
                    }, {
                        value: 'collapse',
                        label: 'Collapse collapse panel'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: 'resource',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: 'Component interaction documentation'
                }]
            }],
            options2: [{
                label: 'Jiangsu',
                cities: []
            }, {
                label: 'Zhejiang',
                cities: []
            }],
            props: {
                value: 'label',
                children: 'cities'
            },
            selectedOptions: [],
            selectedOptions2: []
        }),
        methods: {
            handleChange(value) {
                console.log(value);
            },
            handleItemChange(val) {
                console.log('active item:', val);
                setTimeout( () => {
                    if (val.indexOf('Jiangsu') > -1 && !this.options2[0].cities.length) {
                        this.options2[0].cities = [{
                            label: 'Nanjing'
                        }];
                    } else if (val.indexOf('Zhejiang') > -1 && !this.options2[1].cities.length) {
                        this.options2[1].cities = [{
                            label: 'Hangzhou'
                        }];
                    }
                }, 300);
            }
        }
    }
</script>

<style scoped>

</style>