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
  challenge: {
    type: Schema.Types.ObjectId, 
    ref: 'Challenges'
  }
});

const UserSchema = model('User', User);

export {
  UserSchema
};