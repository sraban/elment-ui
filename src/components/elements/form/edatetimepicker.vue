<template>
    <section>
        <hr>
        <h2>Date and time</h2>
        <div class="block">
            <span class="demonstration">default</span>
            <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="select date time">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">with shortcut options</span>
            <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="select datetime"
                    align="right"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </div>
        <hr>
        <h2>Date and time range</h2>
        <div class="block">
            <span class="demonstration">default</span>
            <el-date-picker
                    v-model="value3"
                    type="datetimerange"
                    range-separator="to"
                    start-placeholder="start date"
                    end-placeholder="end date">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">with shortcut options</span>
            <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    :picker-options="pickerOptions2"
                    range-separator="to"
                    start-placeholder="start date"
                    end-placeholder="end date"
                    align="right">
            </el-date-picker>
        </div>
    </section>
</template>

<script>
    export default {
        name: "edatetimepicker",
        data: () => ({
            pickerOptions1: {
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
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
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
            value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            value4: ''

        })
    }
</script>

<style scoped>

</style>