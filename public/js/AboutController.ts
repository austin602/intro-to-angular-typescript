namespace App {
    export class AboutController {
        static $inject = [];

        //create our public variables that
        //will be useable outside of this object in
        //areas like our markup / template pages.
        public title;

        //create our constructor method that will run
        //once our object is created. We will use our
        //constructor functions to setup or configure
        //a new object.
        constructor (){
            this.title = 'About Page';

        }

        public testMethod(){
            console.log ('Hi, I Was Clicked');
            this.title = 'Happy Birthday';
        }
    }
}
