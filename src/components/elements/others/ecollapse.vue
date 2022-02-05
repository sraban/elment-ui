<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Consistency" name="1">
                <div>Consistent with real life: Consistent with the process and logic of real life, and follow the language and concepts that users are used to;</div>
                <div> is consistent in the interface: all elements and structures need to be consistent, such as: design styles, icons and text, element positions, etc. </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback Feedback" name="2">
                <div>Control feedback: Allow users to clearly perceive their operations through interface styles and interactive effects;</div>
                <div> page feedback: After the operation, the current state is clearly displayed through the changes of page elements. </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
                <div>Simplify the process: design a simple and intuitive operation process;</div>
                <div>Clear and clear: the language is clear and clear, allowing users to quickly understand and make decisions;</div>
                <div> Helps user identification: The interface is simple and straightforward, allowing users to quickly identify rather than recall, reducing the burden of user memory. </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
                <div>User decision-making: According to the scene, users can be given operation suggestions or safety tips, but they cannot replace the user's decision-making;</div>
                <div>The result is controllable: the user can freely perform operations, including undoing, rolling back, and terminating the current operation. </div>
            </el-collapse-item>
        </el-collapse>
        <hr>
        <h2>Accordion effect</h2>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Consistency" name="1">
                <div>Consistent with real life: Consistent with the process and logic of real life, and follow the language and concepts that users are used to;</div>
                <div> is consistent in the interface: all elements and structures need to be consistent, such as: design styles, icons and text, element positions, etc. </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback Feedback" name="2">
                <div>Control feedback: Allow users to clearly perceive their operations through interface styles and interactive effects;</div>
                <div> page feedback: After the operation, the current state is clearly displayed through the changes of page elements. </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
                <div>Simplify the process: design a simple and intuitive operation process;</div>
                <div>Clear and clear: the language is clear and clear, allowing users to quickly understand and make decisions;</div>
                <div> Helps user identification: The interface is simple and straightforward, allowing users to quickly identify rather than recall, reducing the burden of user memory. </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
                <div>User decision-making: According to the scene, users can be given operation suggestions or safety tips, but they cannot replace the user's decision-making;</div>
                <div>The result is controllable: the user can freely perform operations, including undoing, rolling back, and terminating the current operation. </div>
            </el-collapse-item>
        </el-collapse>
        <hr>
        <h2>Custom panel title</h2>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    Consistency<i class="header-icon el-icon-info"></i>
                </template>
                <div>Consistent with real life: Consistent with the process and logic of real life, and follow the language and concepts that users are used to;</div>
                <div> is consistent in the interface: all elements and structures need to be consistent, such as: design styles, icons and text, element positions, etc. </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback Feedback">
                <div>Control feedback: Allow users to clearly perceive their operations through interface styles and interactive effects;</div>
                <div> page feedback: After the operation, the current state is clearly displayed through the changes of page elements. </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency Efficiency">
                <div>Simplify the process: design a simple and intuitive operation process;</div>
                <div>Clear and clear: the language is clear and clear, allowing users to quickly understand and make decisions;</div>
                <div> Helps user identification: The interface is simple and straightforward, allowing users to quickly identify rather than recall, reducing the burden of user memory. </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability Controllability">
                <div>User decision-making: According to the scene, users can be given operation suggestions or safety tips, but they cannot replace the user's decision-making;</div>
                <div>The result is controllable: the user can freely perform operations, including undoing, rolling back, and terminating the current operation. </div>
            </el-collapse-item>
        </el-collapse>
    </section>
</template>

<script>
    export default {
        name: "ecollapse",
        data: () => ({
            activeNames: ['1'],
            activeName: '1'
        }),
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>