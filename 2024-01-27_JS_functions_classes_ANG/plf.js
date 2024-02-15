class Person {
    constructor (name, geschlecht, groesseM, gewichtKG) {
        this.name = name;
        this.geschlecht = geschlecht;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
        if (geschlecht !== "m" && geschlecht ! == "f") {
            throw new Error("Wrong gender");
        }
    }
toString(){
    return "John Doe (180cm, 80kg)";
}

} 
    

export { Person };
