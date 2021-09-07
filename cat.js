class Cat{
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.maxSpeed = _speed;
    }
    sound(text){
        console.log(text);
    }
    catch(rat){
        //in ra meo da bat dc chuot
        if (this.maxSpeed >= rat.speed)
            console.log("meo "+ this.name + " da bat dc chuot " + rat.name);
    }
    eat(rat){
        console.log("meo "+ this.name + " da an chuot" + rat.name);
        rat.status = false;
        this.weight += rat.weight;
    }
}
