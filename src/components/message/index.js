import { h, render } from "vue";
import Message from './index.vue';

/*
theOptions:{
    duration - 消息提示框持续时间
    message - 消息内容
}
*/

export class MessageCreator {
    constructor() {
        this.queue = [];
    }

    present(options) {
        // 在配置中添加 index,以便后续计算偏移量
        let msgOptions = {...options,index:this.queue.length+1};
        const myMessage = h(h(Message), msgOptions);
        let container = document.createElement('div');
        container.classList.add('fixed','overflow-hidden','-translate-x-1/2','left-1/2','top-0');
        render(myMessage, container);
        document.body.appendChild(container);
        
        
        const lastOffset = this.queue[this.queue.length-1]?.offsetY;
        const offsetY = lastOffset ? container?.firstChild?.offsetHeight + 10 + lastOffset : 20;
        container.style.top = `${offsetY}px`

        this.queue.push({
            container,
            offsetY
        });
        if(msgOptions.duration){
            setTimeout(() => {
                this.dismiss();
            }, msgOptions.duration);
        }
    }

    dismiss() {
        let container = this.queue.shift()?.container;
        if(container){
            container.classList.add('animate-messageAnimation');
        }
        setTimeout(()=>{
            document.body.removeChild(container);
        },1000);

    }
}
