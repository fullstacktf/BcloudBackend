import { UserRepository as userRepository } from "../userRepository";
import mongoose from "mongoose";
// import UserModel from "../../models/UserModel";

let UserModel = require('../../models/UserModel');
console.log('AAAA', UserModel);
UserModel = jest.fn();

describe.only('userRepository', () => {
    describe('addUser', () => {
        test('should add new user', () => {
            const result = new userRepository().addNewUser('a', 'b');
            // userRepository().data
            console.log(result);
            // expect(2 + 2).toBe(4);
        })
    });
});
