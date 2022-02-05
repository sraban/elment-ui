<template>
    <section>
        <hr>
        <h2>Select day</h2>
        <div class="block">
            <span class="demonstration">default</span>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="select date">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">with shortcut options</span>
            <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="Choose Date"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </div>

        <hr>
        <h2>Other date units</h2>
        <div class="block">
            <span class="demonstration">Week</span>
            <el-date-picker
                    v-model="value3"
                    type="week"
                    format="yyyy Week WW"
                    placeholder="Choose Week">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">month</span>
            <el-date-picker
                    v-model="value4"
                    type="month"
                    placeholder="select month">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">year</span>
            <el-date-picker
                    v-model="value5"
                    align="right"
                    type="year"
                    placeholder="select year">
            </el-date-picker>
        </div>

        <hr>
        <h2>Select date range</h2>
        <div class="block">
            <span class="demonstration">default</span>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="to"
                    start-placeholder="start date"
                    end-placeholder="end date">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">with shortcut options</span>
            <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="to"
                    start-placeholder="start date"
                    end-placeholder="end date"
                    :picker-options="pickerOptions2">
            </el-date-picker>
        </div>

        <hr>
        <h2>Default display date</h2>
        <div class="block">
            <span class="demonstration">date</span>
            <el-date-picker
                    v-model="value8"
                    type="date"
                    placeholder="Choose Date"
                    default-value="2010-10-01">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">daterange</span>
            <el-date-picker
                    v-model="value9"
                    type="daterange"
                    start-placeholder="start date"
                    end-placeholder="end date"
                    default-value="2010-10-01">
            </el-date-picker>
        </div>

        <hr>
        <h2>*return value format (beta, 2018-01-25)</h2>
        <div class="block">
            <span class="demonstration">Defaults to Date objects</span>
            <div class="demonstration">Component value: {{ value10 }}</div>
            <el-date-picker
                    v-model="value10"
                    type="date"
                    placeholder="Choose Date"
                    format="yyyy year MM month dd day">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">Format with value-format</span>
            <div class="demonstration">Component value: {{ value11 }}</div>
            <el-date-picker
                    v-model="value11"
                    type="date"
                    placeholder="Choose Date"
                    format="yyyy year MM month dd day"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
    </section>
</template>

<script>
    export default {
        name: "edatepicker",
        data: () => ({
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: 'today',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: 'yesterday',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: 'A week ago',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);}
                }]
            },
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            pickerOptions2: {
                shortcuts: [{
                    text: 'Last week',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: 'Last month',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: 'Last three months',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
        })
    }
</script>

<style scoped>

</style>