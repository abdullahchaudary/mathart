export default class ArtGen {
    constructor(cnvs){
        this.canvas = cnvs;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}