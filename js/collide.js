AFRAME.registerComponent("collide-plane",{
    schema: {
        elementId:{type:"string",default:"#coin1"}
    },
    update: function(){
        this.isCollided(this.data.elementId)
    },
    isCollided: function(elememtId){
        const element = document.querySelector(elememtId)
        element.addEventListener("collide",(e)=>{
            if (elememtId.includes("coin")){
                console.log(elememtId + "collision")
            }
            else if(elememtId.include("fish")){
                console.log(elememtId + "collision")
            }
        })
    }
})