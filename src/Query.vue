<template>
  <div id="app">



<div v-if="1" :set="panel=1">
  <multipane class="custom-resizer" layout="vertical">
    <div class="pane" :style="{ width: '500px', minWidth: '500px' }">
      <div>
        <h6 class="title is-6">Pane 1</h6>
        Sraban Kumar Pahadasingh

        <v-jstree :data="data">
          <template scope="_">
            
            
            
            <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">

              <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>

              {{_.model.text}}
              <button style="border: 0px; background-color: transparent; cursor: pointer;" @click="customItemClick(_.vm, _.model, $event)">
                <i class="fa fa-remove"></i>
                </button>

            </div>


          </template>
        </v-jstree>


      </div>
    </div>
    <multipane-resizer></multipane-resizer>
    <div class="pane" :style="{flexGrow:1}">
      <div>
        <h6 class="title is-6">Pane 2</h6>

                            
            <el-row>
              <el-button>Default</el-button>
              <el-button type="primary">Primary</el-button>
              <el-button type="success">Success</el-button>
              <el-button type="info">Info</el-button>
              <el-button type="warning">Warning</el-button>
              <el-button type="danger">Danger</el-button>
            </el-row>

            <el-row>
              <el-button icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="info" icon="el-icon-message" circle></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
      </div>
    </div>
    <multipane-resizer v-if="panel"></multipane-resizer>
    <div class="pane" :style="{flexGrow:1}" v-if="panel">
      <div>
        <h6 class="title is-6">Pane 3</h6>
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </div>
  </multipane>
</div>




  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'; */
import { Multipane, MultipaneResizer } from 'vue-multipane';
import VJstree from 'vue-jstree';

export default {
  name: 'App',
  components: {
    Multipane, MultipaneResizer, VJstree
  },
  methods: {
    resize() {
      console.log('resize')
    },
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
    }
  },
  data() {
    return {
      "data": [
        {
          "text": "Same but with checkboxes",
          "children": [
            {
              "text": "initially selected",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder icon-state-default",
              "opened": true,
              "children": [
                {
                  "text": "Another node"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
          ]
        },
        {
          "text": "Same but with checkboxes",
          "opened": true,
          "children": [
            {
              "text": "initially selected",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder icon-state-default",
              "opened": true,
              "children": [
                {
                  "text": "Another node"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
          ]
        },
        {
          "text": "And wholerow selection"
        }
      ],
    }
  }
}
</script>

<style lang="scss">

  
/* --------------- */

.custom-resizer {
  width: 100%;
  height: 100vh;
}
.custom-resizer > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
  border: 1px solid #ccc;
}
.custom-resizer > .pane ~ .pane {
}
.custom-resizer > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 3px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  &:hover {
    &:before {
      border-color: #999;
    }
  }
}
</style>
