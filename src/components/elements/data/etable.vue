<template>
    <section>
        <hr>
        <h2>Basic form</h2>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Table with zebra pattern</h2>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Forms with borders</h2>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Table with Status</h2>
        <el-table
                :data="tableData2"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Fixed header</h2>
        <el-table
                :data="tableData3"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Fixed Columns</h2>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="date"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="province"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="Urban"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="zip code"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Operation"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">View</el-button>
                    <el-button type="text" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Fixed columns and headers</h2>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="date"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="province"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="Urban"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="zip code"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Operation"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">View</el-button>
                    <el-button type="text" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Fluid height</h2>
        <el-table
                :data="tableData4"
                style="width: 100%"
                max-height="250">
            <el-table-column
                    fixed
                    prop="date"
                    label="date"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="province"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="Urban"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="zip code"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Operation"
                    width="120">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData4)"
                            type="text"
                            size="small">
                        remove
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Multi-level header</h2>
        <el-table
                :data="tableData3"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    width="150">
            </el-table-column>
            <el-table-column label="shipping information">
                <el-table-column
                        prop="name"
                        label="name"
                        width="120">
                </el-table-column>
                <el-table-column label="address">
                    <el-table-column
                            prop="province"
                            label="province"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="Urban"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="address"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="zip code"
                            width="120">
                    </el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Single choice</h2>
        <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    property="date"
                    label="date"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="address"
                    label="address">
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="setCurrent(tableData[1])">Select the second row</el-button>
            <el-button @click="setCurrent()">Deselect</el-button>
        </div>

        <hr>
        <h2>Multiple selection</h2>
        <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="date"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Toggle the selected state of the second and third rows</el-button>
            <el-button @click="toggleSelection()">Cancel selection</el-button>
        </div>

        <hr>
        <h2>Sort</h2>
        <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                    prop="date"
                    label="date"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    :formatter="formatter">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Filter</h2>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="date"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="label"
                    width="100"
                    :filters="[{ text: 'home', value: 'home' }, { text: 'company', value: 'company' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === 'home' ? 'primary' : 'success'"
                            close-transition>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Custom column template</h2>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="date"
                    width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="name"
                    width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>Name: {{ scope.row.name }}</p>
                        <p>Address: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="Action">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <hr>
        <h2>Expand row</h2>
        <el-table
                :data="tableData5"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="Item name">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="Affiliated Store">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="Item ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="Store ID">
                            <span>{{ props.row.shopId }}</span>
                        </el-form-item>
                        <el-form-item label="Item Category">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="Store address">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="Item description">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="Item ID"
                    prop="id">
            </el-table-column>
            <el-table-column
                    label="Product name"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="description"
                    prop="desc">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Total row at the end of the table</h2>
        <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name">
            </el-table-column>
            <el-table-column
                    prop="amount1"
                    sortable
                    label="Numeric 1">
            </el-table-column>
            <el-table-column
                    prop="amount2"
                    sortable
                    label="Number 2">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    sortable
                    label="number 3">
            </el-table-column>
        </el-table>

        <el-table
                :data="tableData6"
                border
                height="200"
                :summary-method="getSummaries"
                show-summary
                style="width: 100%; margin-top: 20px">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name">
            </el-table-column>
            <el-table-column
                    prop="amount1"
                    label="Value 1 (yuan)">
            </el-table-column>
            <el-table-column
                    prop="amount2"
                    label="Numeric 2 (yuan)">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    label="Numeric 3 (yuan)">
            </el-table-column>
        </el-table>

        <hr>
        <h2>Merge rows or columns</h2>
        <div>
            <el-table
                    :data="tableData6"
                    :span-method="arraySpanMethod"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="name">
                </el-table-column>
                <el-table-column
                        prop="amount1"
                        sortable
                        label="Numeric 1">
                </el-table-column>
                <el-table-column
                        prop="amount2"
                        sortable
                        label="Number 2">
                </el-table-column>
                <el-table-column
                        prop="amount3"
                        sortable
                        label="number 3">
                </el-table-column>
            </el-table>

            <el-table
                    :data="tableData6"
                    :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="name">
                </el-table-column>
                <el-table-column
                        prop="amount1"
                        label="Value 1 (yuan)">
                </el-table-column>
                <el-table-column
                        prop="amount2"
                        label="Numeric 2 (yuan)">
                </el-table-column>
                <el-table-column
                        prop="amount3"
                        label="Numeric 3 (yuan)">
                </el-table-column>
            </el-table>
        </div>

        <hr>
        <h2>Custom Index</h2>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type="index"
                    :index="indexMethod">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="date"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="address">
            </el-table-column>
        </el-table>

    </section>
</template>

<script>
    export default {
        name: "etable",
        data: () => ({
            tableData: [{
                date: '2016-05-02',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-04',
                name: 'Wang Xiaohu',
                address: 'Lane 1517, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-01',
                name: 'Wang Xiaohu',
                address: 'Lane 1519, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-03',
                name: 'Wang Xiaohu',
                address: 'Lane 1516, Jinshajiang Road, Putuo District, Shanghai'
            }],
            tableData2: [{
                date: '2016-05-02',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
            }, {
                date: '2016-05-04',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-01',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
            }, {
                date: '2016-05-03',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }],
            tableData3: [{
                date: '2016-05-03',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
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
                date: '2016-05-08',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-06',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }, {
                date: '2016-05-07',
                name: 'Wang Xiaohu',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai'
            }],
            tableData4: [{
                date: '2016-05-03',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: 'Wang Xiaohu',
                province: 'Shanghai',
                city: 'Putuo District',
                address: 'Lane 1518, Jinshajiang Road, Putuo District, Shanghai',
                zip: 200333
            }],
            currentRow: null,
            multipleSelection: [],
            tableData5: [{
                id: '12987122',
                name: 'Haozi Haowei Egg Waffle',
                category: 'Jiangsu and Zhejiang snacks',
                desc: 'Dutch high-quality evaporated milk, creamy but not greasy',
                address: 'Zhenbei Road, Putuo District, Shanghai',
                shop: 'Wang Xiaohu',
                shopId: '10333'
            }, {
                id: '12987123',
                name: 'Haozi Haowei Egg Waffle',
                category: 'Jiangsu and Zhejiang snacks',
                desc: 'Dutch high-quality evaporated milk, creamy but not greasy',
                address: 'Zhenbei Road, Putuo District, Shanghai',
                shop: 'Wang Xiaohu',
                shopId: '10333'
            }, {
                id: '12987125',
                name: 'Haozi Haowei Egg Waffle',
                category: 'Jiangsu and Zhejiang snacks',
                desc: 'Dutch high-quality evaporated milk, creamy but not greasy',
                address: 'Zhenbei Road, Putuo District, Shanghai',
                shop: 'Wang Xiaohu',
                shopId: '10333'
            }, {
                id: '12987126',
                name: 'Haozi Haowei Egg Waffle',
                category: 'Jiangsu and Zhejiang snacks',
                desc: 'Dutch high-quality evaporated milk, creamy but not greasy',
                address: 'Zhenbei Road, Putuo District, Shanghai',
                shop: 'Wang Xiaohu',
                shopId: '10333'
            }],
            tableData6: [{
                id: '12987122',
                name: 'Wang Xiaohu',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: 'Wang Xiaohu',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: 'Wang Xiaohu',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: 'Wang Xiaohu',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: 'Wang Xiaohu',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            }]
        }),
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleClick(row) {
                console.log(row);
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = 'Total price';
                        return;
                    } 
                    const values = data.map(item=>Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += 'element';
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                return sums;
            },
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {return [0, 0];
                    }
                }
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            indexMethod(index) {
                return index * 2;
            }
        },

    }
</script>

<style scoped lang='scss'>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>