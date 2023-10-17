const Stack = require("./stack");


/** Design how you could design a browser back/forward system using two stacks, 
 * so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, 
 * then forward again to EBay, then onto Apple, and so on).
 * Write pseudo-code for this.
*/


// Google, Yahoo, EBay, Apple
class BackForward{
    constructor() {
        this.currentPage = null;
        this.forwardStack = new Stack(); 
        this.backStack = new Stack(); 
    }

    currentPage(){
        return this.currentPage;
    }
    clickPage(page){
        this.backStack.push(this.currentPage);
        this.forwardStack.clear();
        this.currentPage = page;
    }
    
    /**
     * goBack(): add the currentPage to top of the forwardStack stack 
     * and remove it from backStack
     */
    goBack(){
        this.forwardStack.push(this.currentPage);

        if(!this.backStack.isEmpty())
            this.currentPage = this.backStack.pop();
    }
    
    /**
     * goForward(): add the currentPage to top of the backStack stack 
     * and remove it from forwardStack
     */
    goForward(){
        this.backStack.push(this.currentPage);
    
        if(!this.forwardStack.isEmpty())
            this.currentPage = this.forwardStack.pop();
    }
}

module.exports = BackForward;
