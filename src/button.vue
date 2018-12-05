<template>
    <div class="button">
        <button :class="{'g-button': true, 'plain': plain, 'round': round, [position]: true}" :disabled="disabled">
            <div class="icon" v-if="icon">
                <i :class="'iconfont i-' + this.icon" ></i>
            </div>
            <div class="content">
                <slot></slot>
            </div>        
        </button>        
    </div>
</template>
<script>

export default {
    props: ['icon', 'position', 'disabled', 'round', 'plain'],
    data() {
      return {
         
      }
    },
    mounted() {
    //    console.log(this.round, 'round')
    },
    computed: {
    //    classIcon() {
    //       if (this.icon) {
    //         return `iconfont i-${this.icon}`;
    //       }
    //       else {
    //         return ''
    //       }
    //    }
    }
}
</script>
<style lang="scss" scoped>
.button {
display: inline-block;
@keyframes identifier {
    from {
    transform: rotateZ(0deg);
    }
    to {
    transform: rotateZ(360deg);
    }
}
.g-button {
    font-size: var(--font-size);
    height: var(--font-height);
    display: flex;
    align-items: center;
    padding: .4em 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    // animation: identifier 1s infinite linear;
    .icon {
        animation: identifier 1s infinite linear;
        transform-origin: center;
        .iconfont {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            
        }        
    }

    &:active {
        border-color: var(--button-active-bg);
    }
    &:hover {
       cursor: pointer;
       border-color: var(--border-color-hover);
    }
    &:focus {
        outline: none;
    }
}

.round {
   border-radius: 20px;
}

.plain {
   &:hover {
     background-color: var(--button-active-bg);
   }
}

.g-button[disabled] {
    cursor: not-allowed;
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}
.right {
    >.icon {
      order: 2
    }
    >.content {
       order: 1;
    }
}    
}
.button + .button {
    margin-left: 10px;
}
// .left {
//     >.icon {
//       order: 1
//     }
//     >.icon {
//        order: 2;
//     }
// }

</style>