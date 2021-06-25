import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

class Firebase {
    constructor() {
        this.auth = auth;
        this.firestore=firestore;
        this.storage=storage;
    }

// all queries

}

export default Firebase;