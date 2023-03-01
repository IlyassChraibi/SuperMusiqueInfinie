export class Concert {
    constructor(public name : string ,public city : string, public country : string, public street_address : string, 
        public datetime : string, public marker : google.maps.LatLngLiteral){}
}
