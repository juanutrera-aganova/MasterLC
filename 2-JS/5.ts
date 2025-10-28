class SlotMachine{
    monedas:number =0;
    jugada:boolean[] =[false, false, false];

    play():string{
        this.monedas++;

        this.jugar();

        if(this.check()){
            const message =  "Congratulations!!!!. You won "+this.monedas+" coins!!"
            this.monedas=0;
            return message;
        }else{
            return "Good luck next time!!";
        }
    }

    private jugar():void{
        for(let i=0; i<3; i++){
            this.jugada[i]= Math.random()<0.5;
        }
    }

    private check(): boolean {
    return this.jugada.every(slot => slot === true);
    }

}

let machine1 = new SlotMachine();
console.log(machine1.play()); 
console.log(machine1.play()); 
console.log(machine1.play()); 
console.log(machine1.play()); 
console.log(machine1.play()); 
console.log(machine1.play()); 
