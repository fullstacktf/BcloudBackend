import mongoose from "mongoose";


export class Helper {

  static connectDatabase() {
    let uri = "mongodb://localhost:27017/Bookcloud";
    mongoose.connect(uri, { useNewUrlParser: true });
    mongoose.set("useFindAndModify", false);
  }
  
  static tagged(text) {
    text = text.toLowerCase();
    text = text.trim();
    text = text.replace(/\s/g, "-");
    return text;
  }

  


  
}
