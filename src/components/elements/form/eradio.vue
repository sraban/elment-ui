<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-radio v-model="radio" label="1">Alternate</el-radio>
        <el-radio v-model="radio" label="2">Alternatives</el-radio>

        <hr>
        <h2>Disabled state</h2>
        <template>
            <el-radio disabled v-model="radio1" label="disabled">Alternate</el-radio>
            <el-radio disabled v-model="radio1" label="selected and disabled">Alternate</el-radio>
        </template>

        <hr>
        <h2>Radio Button Group</h2>
        <el-radio-group v-model="radio2">
            <el-radio :label="3">Alternatives</el-radio>
            <el-radio :label="6">Alternatives</el-radio>
            <el-radio :label="9">Alternatives</el-radio>
        </el-radio-group>

        <hr>
        <h2>Button style</h2>
        <div>
            <el-radio-group v-model="radio3">
                <el-radio-button label="Shanghai"></el-radio-button>
                <el-radio-button label="Beijing"></el-radio-button>
                <el-radio-button label="Guangzhou"></el-radio-button>
                <el-radio-button label="Shenzhen"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
                <el-radio-button label="Shanghai"></el-radio-button>
                <el-radio-button label="Beijing"></el-radio-button>
                <el-radio-button label="Guangzhou"></el-radio-button>
                <el-radio-button label="Shenzhen"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
                <el-radio-button label="Shanghai"></el-radio-button>
                <el-radio-button label="Beijing" disabled></el-radio-button>
                <el-radio-button label="Guangzhou"></el-radio-button>
                <el-radio-button label="Shenzhen"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
                <el-radio-button label="Shanghai"></el-radio-button>
                <el-radio-button label="Beijing"></el-radio-button>
                <el-radio-button label="Guangzhou"></el-radio-button>
                <el-radio-button label="Shenzhen"></el-radio-button>
            </el-radio-group>
        </div>

        <hr>
        <h2>with border</h2>
        <div>
            <el-radio v-model="radio7" label="1" border>Alternative 1</el-radio>
            <el-radio v-model="radio7" label="2" border>Alternative 2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio v-model="radio8" label="1" border size="medium">Alternative 1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">Alternative 2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio9" size="small">
                <el-radio label="1" border>Alternative 1</el-radio>
                <el-radio label="2" border disabled>Option 2</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio10" size="mini" disabled>
                <el-radio label="1" border>Alternative 1</el-radio>
                <el-radio label="2" border>Alternative 2</el-radio>
            </el-radio-group>
        </div>
    </section>
</template>

<script>
    export default {
        name: "eradio",
        data: () => ({
            radio: '1',
            radio1: 'selected and disabled',
            radio2: 3,
            radio3: 'Shanghai',
            radio4: 'Shanghai',
            radio5: 'Shanghai',
            radio6: 'Shanghai',
            radio7: '1',
            radio8: '1',
            radio9: '1',
            radio10: '1'
        })
    }
</script>

<style scoped>

</style>