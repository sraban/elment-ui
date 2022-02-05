<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-checkbox v-model="checked">Alternatives</el-checkbox>

        <hr>
        <h2>Disabled state</h2>
        <el-checkbox v-model="checked1" disabled>Option 1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>Options</el-checkbox>

        <hr>
        <h2>Multiple checkbox group</h2>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="Checkbox A"></el-checkbox>
            <el-checkbox label="Checkbox B"></el-checkbox>
            <el-checkbox label="Checkbox C"></el-checkbox>
            <el-checkbox label="disabled" disabled></el-checkbox>
            <el-checkbox label="checked and disabled" disabled></el-checkbox>
        </el-checkbox-group>

        <hr>
        <h2>indeterminate state</h2>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Select all</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

        <hr>
        <h2>Limited number of optional items</h2>
        <el-checkbox-group
                v-model="checkedCities1"
                :min="1"
                :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

        <hr>
        <h2>Button style</h2>
        <div>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">
                    {{city}}
                </el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>

        <hr>
        <h2>with border</h2>
        <div>
            <el-checkbox v-model="checked3" label="Alternative 1" border></el-checkbox>
            <el-checkbox v-model="checked4" label="Alternative 2" border></el-checkbox>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox v-model="checked5" label="Alternative 1" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked6" label="Alternative 2" border size="medium"></el-checkbox>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup5" size="small">
                <el-checkbox label="Alternative 1" border></el-checkbox>
                <el-checkbox label="Alternative 2" border disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                <el-checkbox label="Alternative 1" border></el-checkbox>
                <el-checkbox label="Alternative 2" border></el-checkbox>
            </el-checkbox-group>
        </div>
    </section>
</template>

<script>
    const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
    export default {
        name: "echeckbox",
        data: () => ({
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ['checked and disabled', 'checkbox A'],
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
            isIndeterminate: true,
            checkedCities1: ['Shanghai', 'Beijing'],
            cities: cityOptions,
            checkboxGroup1: ['Shanghai'],
            checkboxGroup2: ['Shanghai'],
            checkboxGroup3: ['Shanghai'],
            checkboxGroup4: ['Shanghai'],
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: true,
            checkboxGroup5: [],
            checkboxGroup6: []
        }),
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }

    }
</script>

<style scoped>

</style>