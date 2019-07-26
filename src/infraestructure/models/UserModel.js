import mongoose from "mongoose";

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