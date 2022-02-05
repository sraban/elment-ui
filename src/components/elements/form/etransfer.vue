<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-transfer v-model="value1" :data="data"></el-transfer>
        <hr>
        <h2>Searchable</h2>
        <el-transfer
                filterable
                :filter-method="filterMethod"
                filter-placeholder="Please enter city pinyin"
                v-model="value2"
                :data="data2">
        </el-transfer>
        <hr>
        <h2>Can be customized, JSX syntax is used here</h2>
        <el-transfer
                v-model="value3"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :render-content="renderFunc"
                :titles="['Source', 'Target']"
                :button-texts="['to the left', 'to the right']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
            <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
        </el-transfer>
        <hr>
        <h2>Data item attribute alias</h2>
        <el-transfer
                v-model="value4"
                :props="{
                  key: 'value',
                  label: 'desc'
                }"
                :data="data3">
        </el-transfer>
    </section>
</template>

<script>
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
            data.push({
                key: i,
                label: `Alternative ${ i }`,
                disabled: i % 4 === 0
            });
        }
        return data;
    };
    const generateData2 = () => {
        const data = [];
        const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Nanjing', 'Xi\'an', 'Chengdu'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
            data.push({
                label: city,
                key: index,
                pinyin: pinyin[index]
            });
        });
        return data;
    };
    const generateData3 = () => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
            data.push({
                value: i,
                desc: `Alternative ${ i }`,
                disabled: i % 4 === 0
            });
        }
        return data;
    };
    export default {
        name: "etransfer",
        data: () => ({
            data: generateData(),
            value1: [1, 4],
            data2: generateData2(),
            value2: [],
            value3: [1],
            data3: generateData3(),
            value4: []
        }),
        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            },
            filterMethod(query, item) {
                return item.pinyin.indexOf(query) > -1;
            },
            renderFunc(h, option) {
                return <span>{ option.key } - { option.label }</span>;
            },
        }
    }
</script>

<style scoped lang='scss'>
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }
</style>