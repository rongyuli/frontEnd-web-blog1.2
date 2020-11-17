let floor = 1
let check = function(){
    if($('#submit').attr('disabled') === 'disabled'){
        $('#submitBtn').attr({'src': '../images/prohibit.jpg'})
    }else{
        $('#submitBtn').attr({'src': '../images/submit.png'})
    }
}
new Vue({
    el: '#app',
    data: {
        messageArray: [],
        name: '',
        content: '',
        src: 1
    },
    methods: {
        addMessage(){
            let messageObj = {name: '', content: '',time: '',floor: 0,src: '../images/photo'}
            let myDate = new Date();
            let mytime=myDate.toLocaleString()
            if(this.name.length === 0){
                messageObj.name = '匿名用户'
            }else{
                messageObj.name = this.name
            }
            console.log(this)
            messageObj.content = this.content
            messageObj.time = mytime
            messageObj.src = messageObj.src + this.src + '.jpg'
            this.src ++ 
            if(this.src > 5){
                this.src = 1
            }

            switch(floor){
                case 1 : messageObj.floor = '沙发'; break;
                case 2 : messageObj.floor = '板凳'; break;
                case 3 : messageObj.floor = '地板'; break;
                case 4 : messageObj.floor = '地下室'; break;
                default : messageObj.floor = '第' + floor + '楼'
            }
            floor ++
            this.messageArray.unshift(messageObj)
            this.name = ''
            this.content = ''
        }
    }
})

$().ready(function(){
    // $('#submitBtn').on('click', check) 
    // $('#contentInput').on('input', check) 
    $('#submit,#submitBtn').on('click', function(){
        setTimeout(check,100)
    })
    $('#contentInput').on('input', function(){
        setTimeout(check,100)
    })
})
