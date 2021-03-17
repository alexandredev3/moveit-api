import { Schema, model } from 'mongoose';

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const UserSchema = model('User', User);

export {
  UserSchema
};