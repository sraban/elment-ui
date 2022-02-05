<template>
    <section>
        <hr>
        <h2>Fixed time point</h2>
        <el-time-select
                v-model="value1"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }"
                placeholder="select time">
        </el-time-select>

        <hr>
        <h2>Anytime</h2>
        <el-time-picker
                v-model="value2"
                :picker-options="{
                  selectableRange: '18:30:00 - 20:30:00'
                }"
                placeholder="any point in time">
        </el-time-picker>
        <el-time-picker
                arrow-control
                v-model="value3"
                :picker-options="{
                  selectableRange: '18:30:00 - 20:30:00'
                }"
                placeholder="any point in time">
        </el-time-picker>

        <hr>
        <h2>Fixed time range</h2>
        <el-time-select
                placeholder="start time"
                v-model="startTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
        </el-time-select>
        <el-time-select
                placeholder="end time"
                v-model="endTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: startTime
                }">
        </el-time-select>
        <hr>
        <h2>Any time frame</h2>
        <el-time-picker
                is-range
                v-model="value4"
                range-separator="to"
                start-placeholder="start time"
                end-placeholder="end time"
                placeholder="select time range">
        </el-time-picker>
        <el-time-picker
                is-range
                arrow-control
                v-model="value5"
                range-separator="to"
                start-placeholder="start time"
                end-placeholder="end time"
                placeholder="select time range">
        </el-time-picker>
    </section>
</template>

<script>
    export default {
        name: "etimepicker",
        data: () => ({
            value1: '',
            value2: new Date(2016, 9, 10, 18, 40),
            value3: new Date(2016, 9, 10, 18, 40),
            startTime: '',
            endTime: '',
            value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
        }),
    }
</script>

<style scoped>

</style>