import {Db} from '../../domain/Db';
import {Book} from '../../domain/Book'
import { compareSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";

/**
 * en este archivo se inseeta toda la lógica de la base de datos.
 */
export class DbMongoBook extends Db{
    async existBook(titulo_){
        const libro = await BookData.findOne({ titulo: titulo_ });
        if(libro != null )
        return true;
        else 
        return false;
    }
}