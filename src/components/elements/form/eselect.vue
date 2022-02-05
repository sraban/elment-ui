<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-select v-model="value" placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>There is a disable option</h2>
        <el-select v-model="value2" placeholder="Please select">
            <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
            </el-option>
        </el-select>

        <hr>
        <h2>Disabled state</h2>
        <el-select v-model="value3" disabled placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>Clearable radio</h2>
        <el-select v-model="value4" clearable placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>Basic Multiple Choice</h2>
        <el-select v-model="value5" multiple placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <el-select
                v-model="value11"
                multiple
                collapse-tags
                style="margin-left: 20px;"
                placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>Custom Template</h2>
        <el-select v-model="value6" placeholder="Please select">
            <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>

        <hr>
        <h2>Grouping</h2>
        <el-select v-model="value7" placeholder="Please select">
            <el-option-group
                    v-for="group in options3"
                    :key="group.label"
                    :label="group.label">
                <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-option-group>
        </el-select>

        <hr>
        <h2>Searchable</h2>
        <el-select v-model="value8" filterable placeholder="Please select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>Remote Search</h2>
        <el-select
                v-model="value9"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter keywords"
                :remote-method="remoteMethod"
                :loading="loading">
            <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <hr>
        <h2>Create entry</h2>
        <el-select
                v-model="value10"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Please select an article label">
            <el-option
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

    </section>
</template>

<script>
    export default {
        name: "eselect",
        data: () => ({
            options: [{
                value: 'Option 1',
                label: 'Golden Cake'
            }, {
                value: 'Option 2',
                label: 'Double Skin Milk'
            }, {
                value: 'Option 3',
                label: 'Oyster fried'
            }, {
                value: 'Option 4',
                label: 'Dragon Beard Noodles'
            }, {
                value: 'Option 5',label: 'Peking duck'
            }],
            value: '',
            options2: [{
                value: 'Option 1',
                label: 'Golden Cake'
            }, {
                value: 'Option 2',
                label: 'Double Skin Milk',
                disabled: true
            }, {
                value: 'Option 3',
                label: 'Oyster fried'
            }, {
                value: 'Option 4',
                label: 'Dragon Beard Noodles'
            }, {
                value: 'Option 5',
                label: 'Peking duck'
            }],
            value2: '',
            value3: '',
            value4: '',
            value5: [],
            value11: [],
            cities: [{
                value: 'Beijing',
                label: 'Beijing'
            }, {
                value: 'Shanghai',
                label: 'Shanghai'
            }, {
                value: 'Nanjing',
                label: 'Nanjing'
            }, {
                value: 'Chengdu',
                label: 'Chengdu'
            }, {
                value: 'Shenzhen',
                label: 'Shenzhen'
            }, {
                value: 'Guangzhou',
                label: 'Guangzhou'
            }],
            value6: '',
            options3: [{
                label: 'Popular Cities',
                options: [{
                    value: 'Shanghai',
                    label: 'Shanghai'
                }, {
                    value: 'Beijing',
                    label: 'Beijing'
                }]
            }, {
                label: 'city name',
                options: [{
                    value: 'Chengdu',
                    label: 'Chengdu'
                }, {
                    value: 'Shenzhen',
                    label: 'Shenzhen'
                }, {
                    value: 'Guangzhou',
                    label: 'Guangzhou'
                }, {
                    value: 'Dalian',
                    label: 'Dalian'
                }]
            }],
            value7: '',
            value8: '',
            options4: [],
            value9: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],
            options5: [{
                value: 'HTML',
                label: 'HTML'
            }, {
                value: 'CSS',
                label: 'CSS'
            }, {
                value: 'JavaScript',
                label: 'JavaScript'
            }],
            value10: []
        }),
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options4 = [];
                }
            }
        },
        mounted() {
            this.list = this.states.map(item => {
                return {value: item, label: item};
            });
        }
    }
</script>

<style scoped>

</style>