export class Persona {
    
    userId:Number;
    id:Number;
    title:string;
    completed:boolean;
    
    constructor(userId:Number,id:Number,title:string,completed:boolean){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    
}