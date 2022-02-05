<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <div class="block">
            <span class="demonstration">default</span>
            <el-slider v-model="value1"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">Custom initial value</span>
            <el-slider v-model="value2"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">Hide Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">Formatting Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">disable</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>

        <hr>
        <h2>Discrete value</h2>
        <div class="block">
            <span class="demonstration">Do not display breaks</span>
            <el-slider
                    v-model="value6"
                    :step="10">
            </el-slider>
        </div>
        <div class="block">
            <span class="demonstration">Show breaks</span>
            <el-slider
                    v-model="value7"
                    :step="10"
                    show-stops>
            </el-slider>
        </div>

        <hr>
        <h2>with input box</h2>
        <div class="block">
            <el-slider
                    v-model="value8"
                    show-input>
            </el-slider>
        </div>

        <hr>
        <h2>Range selection</h2>
        <div class="block">
            <el-slider
                    v-model="value9"
                    range
                    show-stops
                    :max="10">
            </el-slider>
        </div>

        <hr>
        <h2>Portrait Mode</h2>
        <div class="block">
            <el-slider
                    v-model="value10"
                    vertical
                    height="200px">
            </el-slider>
        </div>

    </section>
</template>

<script>
    export default {
        name: "eslider",
        data: () => ({
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: [4, 8],
            value10: 0
        }),
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
</script>

<style scoped>

</style>