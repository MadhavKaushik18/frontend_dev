
const user = {
    name: "Madhav",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName();
const fixedUser = {
    name: "Madhav",
    showName: function() {
        console.log(this.name);
    }
};

fixedUser.showName();
