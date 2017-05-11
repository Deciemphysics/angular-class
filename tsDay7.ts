function uIElement(target: Function){ /* do ui stuff */}
function deprecated(t:any, p:string, d: PropertyDescriptor){
    console.log('this method will go away soon.');
}

@uIElement 
class ContactForm {
    @deprecated
    someOldMethod(){ }

}

// These are used in angular to define meta-data

function uIElement2(element:string){
    return function(target: Function) {
        console.log(`Creating new element: ${element}`)
    }
}

@uIElement2('Simple Contact Form')
    class ContactForm2{

    }


// <TFunction extends Function>(target: TFunction) => TFunction | void;