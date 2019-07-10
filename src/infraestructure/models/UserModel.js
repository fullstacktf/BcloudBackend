import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/prueba");
mongoose.set("useFindAndModify", false);

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
export default mongoose.model("UserData", UserSchema);