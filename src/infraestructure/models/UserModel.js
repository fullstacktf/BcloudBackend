import mongoose from "mongoose";
// let uri = "mongodb://localhost:27017/prueba";
// mongoose.connect(uri, { useNewUrlParser: true });
// mongoose.set("useFindAndModify", false);


const UserSchema = mongoose.Schema(
    {
      gustos: Array,
      email: String,
      passw: String,
      librosAdquiridos: Array,
      nickName: String,
      librosFavoritos: Array
    },
    { collection: "UserData" }
  );
//export default mongoose.model("UserData", UserSchema);
