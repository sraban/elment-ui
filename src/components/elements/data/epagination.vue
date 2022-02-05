<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <div class="block">
            <span class="demonstration">Effects with fewer pages</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">Effects larger than 7 pages</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <hr>
        <h2>Pagination with background color</h2>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <hr>
        <h2>Small tabs</h2>
        <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
        </el-pagination>
        <hr>
        <h2>Additional Features</h2>
        <div class="block">
            <span class="demonstration">Show totals</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">Adjust the number of lines displayed per page</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">Go directly</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="block">
            <span class="demonstration">Full functionality</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </section>
</template>

<script>
    export default {
        name: "epagination",
        data: () => ({
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
        }),
        methods: {
            handleSizeChange(val) {
                console.log(`${val} per page`);
            },
            handleCurrentChange(val) {
                console.log(`Current page: ${val}`);
            }
        },
    }
</script>

<style scoped lang='scss'>

</style>