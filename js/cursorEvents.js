AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default: "", type: "string"}
    },
    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        
    },
    handlePlacesList: function(){
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"]
        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute('cursor-listener', {
                selectedItemId: id
            })
            this.el.setAttribute("material", {color: "#d76b30", opacity: 1})
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", function(){
            
            console.log(this.el)
            const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"]
        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute('cursor-listener', {
                selectedItemId: id
            })
            this.el.setAttribute("material", {color: "#d76b30", opacity: 1})
        }
        })
    },
    handleMouseLeaveEvents: function(){

    },
})